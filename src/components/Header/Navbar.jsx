import React, { use } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { TfiShoppingCart } from "react-icons/tfi";
import { AuthContext } from '../../AuthProvider/Provider';
import Swal from 'sweetalert2'


const Navbar = () => {
       const navigate = useNavigate();
 const {user,logOut} = use(AuthContext);
     console.log(user);
   const   handleLogOut = ()=>{
      
        logOut()
        .then(()=>{
              Swal.fire({
                 title: "Logged Out!",
                 text: "User Logged Out.Stay connected!.",
                 icon: "info",
                  
               });
        navigate('/auth/login')
        })

      }

        const activeLink = ({ isActive }) =>
     isActive
      ? "underline text-black-600"
      : "text-black-600";
    return (
        <div className="navbar bg-[#F9FAFB] px-4 shadow-sm py-1 sticky top-0 z-30">
        
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" 
        viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" 
        strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 text-secondary
        rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li ><NavLink className={activeLink} to='/'>Home</NavLink></li>
        <li >
          
        <NavLink className = {activeLink} to = '/details/:id'> Subscription</NavLink>
    
        </li>
        <li ><NavLink className = {activeLink} to = '/errorpage' >Contacts</NavLink></li>
      </ul>
    </div>
    <img className='w-16' src="/src/assets/gadget-100.png" alt="" />
    <a className="text-[#585379] text-xl font-bold">Gadget 
        <span className='text-[#009fb7]'>Go</span></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     <li > <NavLink className={activeLink} to='/'>Home</NavLink></li>
      <li>
       <NavLink className = {activeLink} to = '/details/:id'> Subscription</NavLink>
       
      </li>
    <li ><NavLink className = {activeLink} to = '/errorpage' >Contacts</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end flex gap-4">
    <div className='text-2xl font-bold'><TfiShoppingCart /></div>
    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">

        <div className="w-10 rounded-full">
         <NavLink to='/profile'><img title={user?.displayName || "Guest"}
          className="w-12 rounded-full  cursor-pointer"
          src={`${ user?.photoURL ||

            "https://randomuser.me/api/portraits/men/1.jpg" 

          }`}
          alt=""
        /></NavLink>
        </div>
      </div>
      { user ? 
    <button onClick={handleLogOut } className="btn bg-[#585379]
     text-white hover:bg-[#393651b0]">Log Out</button>
       : <NavLink className="btn bg-[#585379]
     text-white hover:bg-[#393651b0]" to= '/auth/login'>Log In</NavLink>     
    }
  </div>
</div>
    );
};

export default Navbar;

// https://randomuser.me/api/portraits/men/2.jpg
//  <img
//             alt="Tailwind CSS Navbar component"
//             src="https://randomuser.me/api/portraits/men/1.jpg" />
