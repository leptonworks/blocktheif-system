import axios from 'axios';
import { toast } from 'react-toastify';

const axiosInstance = axios.create();

axiosInstance.interceptors.response.use(
  (response) => {
    console.log('Response interceptor (success)');
    return response;
  },
  (error) => {
    console.log('Response interceptor (error)');
    console.log('Error details:', error);

    if (error.response && error.response.status === 401) {
      console.log('Unauthorized request detected');
      localStorage.removeItem('token');
      localStorage.removeItem('userRole');
      // Add the toast notification
      toast.error('Your session has expired. Please log in again.', {
        hideProgressBar: true,
      });
       // Redirect to login page after a delay
       setTimeout(() => {
        window.location.href = '/Login1';
      }, 5000); // 3000 milliseconds (3 seconds) delay
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
