import React, { use, useState } from 'react';
import { FaEye,FaEyeSlash } from "react-icons/fa";
import { AuthContext } from '../../AuthProvider/Provider';
import { useLocation } from 'react-router';
import Swal from 'sweetalert2';


const ResetPass = () => {

     const location = useLocation();
  const passedEmail = location?.state?.email || '';
  const [email, setEmail] = useState(passedEmail);
const [passError, setPassError] = useState('');
    const [showPass, setShowPass] = useState(false);
    const {resetPassword} = use(AuthContext);


    const handleResetPass=e=>{
         e.preventDefault();
        const newPassword = e.target.NewPassword.value;
        const confirmPassword = e.target.ConfirmPassword.value;
        const email = e.target.email.value;

   if (newPassword !== confirmPassword) {
      setPassError("Passwords do not match.");
      return;
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

        resetPassword(email)
        .then(()=>{
          Swal.fire("Check Your Email", "A reset link has been sent to your email.", "success");
             window.open('https://mail.google.com', '_blank');

        })

    }
    return (
          <div className="hero bg-base-200 ">
          <div className="hero-content flex-col lg:flex">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl mt-5 font-bold mb-5">Reset Password</h1>
              
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 
            shadow-2xl border border-gray-200">
              <div className="card-body">
                <form onSubmit={handleResetPass} className="form space-y-1">
                  <label className="label">Email</label>
                  <input
                type="email"
                name="email"
                value={email}
                className="input input-bordered mb-2"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
              />
                  <label className="label">New Password</label>
                  <div className='relative'>
                           <input type={showPass ? 'text':'password'} name='NewPassword' className="input bg-[#F3F3F3] w-full" 
                           placeholder="Password" required/>
                           <button type='button' onClick={()=>setShowPass(!showPass)} className='btn btn-lg text-gray-400 border-0 absolute
                            -right-1 -top-1'>
                             {
                             showPass?<FaEyeSlash></FaEyeSlash>:<FaEye />
                             }
                             </button>
                           </div>
                <label className="label">Confirm New Password</label>
                  <div className='relative'>
                           <input type={showPass ? 'text':'password'} name='ConfirmPassword' className="input bg-[#F3F3F3] w-full" 
                           placeholder="Password" required/>
                           <button type='button' onClick={()=>setShowPass(!showPass)} className='btn btn-lg text-gray-400 border-0 absolute
                            -right-1 -top-1'>
                             {
                             showPass?<FaEyeSlash></FaEyeSlash>:<FaEye />
                             }
                             </button>
                           </div>
                            {passError && <p className="text-red-500 text-sm">{passError}</p>}
                  <button type='submit' className="btn btn-neutral w-full mt-4 mb-2 ">Reset</button>
                  
                  
                </form>
             
              </div>
            </div>
          </div>
          
        </div>
    );
};

export default ResetPass;