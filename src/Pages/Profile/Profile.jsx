import React, { use, useState } from 'react';
import { AuthContext } from '../../AuthProvider/Provider';
import { ToastContainer,toast } from 'react-toastify';

const Profile = () => {
  const { user,setUser,updateUser } = use(AuthContext);
 const [nameError, setNameError] = useState("");
 

  const handleUpdate = (e) => {
    e.preventDefault();
   const form = e.target;
   const name = form.name.value;
   const photo = form.photo.value;
    if (name.length < 5) {
        setNameError("Name should be at least 5 characters.");
    return;
    } else {
    setNameError("");
    }

  
    updateUser({
        
       displayName : name,
       photoURL: photo
      }).then(()=>{

          setUser({ ...user, displayName: name, photoURL: photo });
       toast("Profile Updated Successfully!!");
      })

      form.reset();
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 px-4">
        <ToastContainer></ToastContainer>
      <div className="card bg-white shadow-lg p-8 rounded-xl
       flex flex-col md:flex-row gap-10">
        <div className="flex flex-col justify-center items-center md:w-1/2 gap-4">
          <img
            className="w-40 h-40 rounded-full border-4 border-primary object-cover"
            src={user?.photoURL || "https://randomuser.me/api/portraits/men/1.jpg"}
            alt="User Profile"
          />
          <h1 className="text-2xl font-bold text-primary">
            {user?.displayName || "Anonymous User"}
          </h1>
          <p className="text-secondary">{user?.email}</p>
          <p className="text-primary font-bold w-full p-2">
          Photo URL:
          <span className="text-secondary font-normal break-words">
           {user?.photoURL}
             </span>
            </p>
        </div>

        <form
          onSubmit={handleUpdate}
          className="flex flex-col gap-4 md:w-1/2 justify-center"
        >
          <label className="text-primary font-semibold">Update Name</label>
          <input
            type="text" name='name'
            className="input input-bordered w-full bg-[#F3F3F3]"
            required
          />
       {nameError && <p className="text-xs text-error">{nameError}</p>}
          <label className="text-primary font-semibold">Update Photo URL</label>
          <input
            type="url" name='photo'
            className="input input-bordered w-full bg-[#F3F3F3]"
             required
          />
   
          <button type="submit" className="btn bg-[#585379] text-white hover:bg-[#393651b0] mt-4">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
