import React from 'react';
import { useNavigate } from 'react-router';

const SubscriptionCard = ({data}) => {
     
    const navigate = useNavigate();
    const {id, thumbnail, name, tech_category, price, frequency }=data
    // console.log(typeof id);
    return (
        <div>
             <div className="card shadow p-2 bg-white gap-3 flex items-center">
      <img src={thumbnail} alt={name} className="card-thumbnail h-56"/>
      <h3 className='text-primary font-bold text-xl'>{name}</h3>
      <p className="tech-category badge badge-soft badge-info">{tech_category}</p>
      <p className="price">Price: ${price} / {frequency}</p>
      <button className='btn bg-[#585379] text-white hover:bg-[#393651b0]
       mb-4 mt-2' onClick={() => navigate ( `/details/${id}`)}>
        Details
      </button>
    </div>
        </div>
    );
};

export default SubscriptionCard;


{/* <a href="https://ibb.co.com/39Wq6JcZ"><img src="https://i.ibb.co.com/jPG20pDX/content.webp" alt="content" border="0" /></a> */}