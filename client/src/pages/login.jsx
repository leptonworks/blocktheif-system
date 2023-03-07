import React,{useState} from 'react';


  function login() 
  {
    
    const [name,setName] = useState("")
    const [password,setPassword] = useState("")
    const [email,setEmail] = useState("")

    function signUp()
    {
        let item = {name,password,email}
        console.warn(item)

        

    }


    return (
    <section className="h-screen grid md:grid-cols-2">
      <div className="bg-gray-300 flex items-center justify-center ">
        <h1 className="text-3xl sm:text-5xl py-1">
        
        </h1>
        <div className='col-sm-6 offset-sm-3'>
          <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className='form-control' placeholder='name'/>
          <br />
          <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className='form-control' placeholder='password'/>
          <br />
          <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className='form-control' placeholder='email'/>
          <br />
          <br />
          <button onClick={signUp} className='btn btn-primary'>Sign up</button>
        </div>
      </div>
      <div className="col-span-1 w-full h-full text-center bg-black py-32 flex items-center justify-center">
        <div className="flex w-full justify-center items-center">
          <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
            <div className="flex-1 flex-col md:mr-10">
              <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
                Login Details
              </h1>
              <div className="flex items-center justify-center">
                <p className="mt-5 text-white font-light md:w-9/12 w-full text-base">
                  Lorem Ipsum1x
                </p>
              </div>
              <div className="flex items-center justify-center">

              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
     )
}

export default login;