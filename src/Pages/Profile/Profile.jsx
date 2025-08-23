import React, { use } from 'react';
import { AuthContext } from '../../AuthProvider/Provider';

const Profile = () => {
    const {user} = use(AuthContext);
    return (
        <div>
            <div>
                <img  src={user?.photoURL || "https://randomuser.me/api/portraits/men/1.jpg"} alt="" />
        </div>
        </div>
    );
};

export default Profile;