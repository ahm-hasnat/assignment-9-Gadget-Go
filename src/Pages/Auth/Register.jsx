import React, { use, useState } from 'react';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2'
import { AuthContext } from '../../AuthProvider/Provider';
import { FaEye,FaEyeSlash } from "react-icons/fa";

const Register = () => {
  
      const { createUser,signInWithGoogle,updateUser,setUser } = use(AuthContext);
  const [nameError, setNameError] = useState("");
  const [passError,setPassError] = useState([]);
  const [showPass, setShowPass] = useState(false);

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


    const handleRegister = e =>{
        e.preventDefault();

      
        
        const form = e.target;
   const name = form.name.value;
      const photo = form.photo.value;
    const email = form.email.value;
   const password = form.password.value;


    if (name.length < 5) {
        setNameError("Name should be at least 5 characters.");
    return;
    } else {
    setNameError("");
    }

  
     const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
     const hasLength = password.length >= 6;

      if (!hasLength && !hasUpper && !hasLower) {
        setPassError("Password must be at least 6 characters, include at least one uppercase and one lowercase letter.");
      return;
   }
    else if (hasLength && !hasUpper && !hasLower) {
     setPassError("Include at least one uppercase and one lowercase letter.");
      return;
  }
   else if (!hasLength) {
     setPassError("Password must be at least 6 characters.");
    return;
      }
       else if (!hasUpper) {
    setPassError("Include at least one uppercase letter.");
      return;
    } 
    else if (!hasLower) {
       setPassError("Include at least one lowercase letter.");
      return;
    } 
    else {
       setPassError(""); 
  } 
 

createUser(email,password)
    .then((result) =>{
      const user = result.user;
      // console.log(user);
      updateUser({
     
       displayName : name,
       photoURL: photo
      })

      .then(()=>{

        Swal.fire({
    title: "Success!",
    text: "Registration completed.!!",
    icon: "success",
  });
  navigate("/");
  } )

      })
      
   .catch((error) => {
    if (error.code === 'auth/email-already-in-use') {
      Swal.fire({
        title: "User already exists!",
        icon: "warning",
        text: "Please log in!",
        draggable: true,
      });
        navigate("/auth/login");
    }
    })
}


  

    return (
         <div className="hero bg-[#F3F3F3]  
        flex items-center justify-center">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-3xl font-bold">Register Now!</h1>
      
    </div>
    <div className="card bg-white max-w-lg shrink-0 shadow-2xl">
      <div className="card-body ">
        <form onSubmit={handleRegister} className="fieldset w-sm">
          <label className="label ">Name</label>
          <input type="text" name='name' className="input bg-[#F3F3F3] w-full" 
          placeholder="Name" required/>

           {nameError && <p className="text-xs text-error">{nameError}</p>}

           <label className="label ">Photo URL</label>
          <input type="url" name='photo' className="input bg-[#F3F3F3] w-full" 
          placeholder="photo link" required/>
           <label className="label ">Email</label>
          <input type="email" name='email' className="input bg-[#F3F3F3] w-full"
           placeholder="Email" required/>
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
          {passError && <p className="text-xs text-error">{passError}</p>}
          <button type='submit' className="btn btn-neutral mt-4 ">Register</button>
          
          <div className='flex gap-2'>
            <input type="checkbox" defaultChecked className="checkbox checkbox-sm"
             required/>
            <p>Accept terms & conditions</p>
          </div>
           <p className='text-secondary mt-3 text-center'>Already have an account?
             <span onClick={()=> navigate ('/auth/login')} className=' text-blue-700  
            hover:underline cursor-pointer font-semibold'>Login</span></p>
        </form>
         <div className='flex flex-col text-center'>
    <p className='text-secondary font-light text-xs m-4'>Or</p>
   
    {/* Google */}
<button onClick={handleGooglelogIn} className="btn bg-white text-black border-[#e5e5e5] mb-3">
  <svg aria-label="Google logo" width="16" height="16" 
  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g>
    <path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" 
    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
    <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57">
        </path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73">
            </path><path fill="#ea4335" d="m153 219c22-69 116-109 
            179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>

{/* Facebook */}
<button  className="btn bg-[#1A77F2] text-white border-[#005fd8]">
  <svg aria-label="Facebook logo" width="16" height="16" 
  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
    <path fill="white" d="M8 12h5V8c0-6 4-7 11-6v5c-4 0-5 0-5 3v2h5l-1 6h-4v12h-6V18H8z">
        </path></svg>
  Login with Facebook
</button>
  </div>
      </div>
    </div>
  </div>
</div>
    );
};

export default Register;