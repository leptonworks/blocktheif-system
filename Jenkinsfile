pipeline {
    agent any
    tools {
        nodejs 'NodeJS'
    }
    stages {
        stage('Install Dependencies') {
            steps {
                dir('client') {
                    sh 'npm install'
                }
                dir('contract') {
                    sh 'yarn install'
                }
                dir('databaseServer/my-project') {
                    sh 'yarn install'
                }
            }
        }
        stage('Run Frontend') {
            steps {
                dir('client') {
                    sh 'npm run dev &'
                }
            }
        }
        stage('Run Backend') {
            steps {
                dir('databaseServer/my-project') {
                    sh 'yarn develop &'
                }
            }
        }
        stage('Run Smart Contract') {
            steps {
                dir('contract') {
                    sh 'npx hardhat node &'
                    sh 'sleep 5' // Give the node some time to start
                    sh 'npx hardhat run scripts/sample-script.js --network localhost'
                }
            }
        }
        stage('Run ML Model') {
            steps {
                dir('server') {
                    sh 'python3 app.py &'
                }
            }
        }
    }
    post {
        always {
            // Actions to perform after the pipeline, e.g., send notifications, clean up workspace, etc.
        }
    }
}
