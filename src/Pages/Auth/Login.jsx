import React, { use, useState } from 'react';
import {  useNavigate } from 'react-router';
import { AuthContext } from '../../AuthProvider/Provider';
import Swal from 'sweetalert2'
import { FaEye,FaEyeSlash } from "react-icons/fa";


const Login = () => {
    const [error, setError] = useState("");
    const [showPass, setShowPass] = useState(false);
    const [controlledEmail,setEmail] = useState('');
   
  const {LogIn,signInWithGoogle,user} = use(AuthContext);
    const navigate = useNavigate();

   
  const handleGooglelogIn = ()=>{
   
     signInWithGoogle()
    .then(() => {
        Swal.fire({
      title: "Success!",
      text: "Logged in Successfully!.",
      icon: "success",
       
    });
   navigate('/');
    })
    .catch(error => {
      // console.error(error.message);
     
    });

  }
  const  handleLogin = e =>{
     
    e.preventDefault();
   const form = e.target;
   const email = form.email.value;
   const password = form.password.value;

   LogIn(email,password)
  .then((result) =>{
        const user = result.user;
        // console.log(user);
         Swal.fire({
      title: "Success!",
      text: "Logged in Successfully!.",
      icon: "success",
       
    });
   navigate('/');
      }
     
    )
    .catch((error)=>{
       const errorCode = error.code;
        // console.error(error.code); 

        if (error.code === 'auth/invalid-credential') {
    Swal.fire({
      title: 'Login Failed',
      text: 'Email or password is incorrect.',
      icon: 'error',
      confirmButtonText: 'Try Again',
    });
      
   }
  
         else {
          Swal.fire({
            title: 'Login Failed',
            text: error.message,
            icon: 'error',
            confirmButtonText: 'OK',
          });
        setError(errorCode);
        }
    })
   
    
     }
  const getEmail=(e)=>{
      const email = e.target.value;
    //  console.log(email);
     setEmail(email);
     
    }
const handleResetPass=e=>{
  const email = controlledEmail;
 navigate('/auth/reset', { state: { email } });
}
    return (
        <div className="hero bg-base-200 ">
  <div className="hero-content flex-col lg:flex">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold mb-5">Login now!</h1>
      
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 
    shadow-2xl border border-gray-200">
      <div className="card-body">
        <form onSubmit={handleLogin} className="form ">
          <label className="label">Email</label>
          <input type="email" name='email' className="input mb-1 mt-1"
           placeholder="Email" onChange={getEmail} />
          <label className="label">Password</label>
          <div className='relative'>
                   <input type={showPass ? 'text':'password'} name='password' className="input bg-[#F3F3F3] w-full" 
                   placeholder="Password" required/>
                   <button type='button' onClick={()=>setShowPass(!showPass)} className='btn btn-lg text-gray-400 border-0 absolute
                    -right-1 -top-1'>
                     {
                     showPass?<FaEyeSlash></FaEyeSlash>:<FaEye />
                     }
                     </button>
                   </div>
          <div><a onClick={handleResetPass} className="link link-hover">Forgot password?</a></div>
          <button type='submit' className="btn btn-neutral w-full mt-4 mb-2 ">Login</button>
          <p>Don't have an account? <span onClick={()=>navigate('/auth/register')} className='text-blue-700 
          font-bold hover:underline cursor-pointer'>Register</span></p>
          
        </form>
        <div className='flex flex-col text-center'>
    <p className='text-secondary font-light text-xs m-4'>Or</p>
   
    {/* Google */}
<button onClick={handleGooglelogIn} className="btn bg-white text-black border-[#e5e5e5] mb-3">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>

{/* Facebook */}
<button  className="btn bg-[#1A77F2] text-white border-[#005fd8]">
  <svg aria-label="Facebook logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="white" d="M8 12h5V8c0-6 4-7 11-6v5c-4 0-5 0-5 3v2h5l-1 6h-4v12h-6V18H8z"></path></svg>
  Login with Facebook
</button>
  </div>
      </div>
    </div>
  </div>
  
</div>
    );
};

export default Login;