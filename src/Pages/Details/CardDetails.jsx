import React, { useState } from 'react';
import { useLoaderData, useLocation,  useParams } from 'react-router';
import { FaStar } from "react-icons/fa";
import { Helmet } from 'react-helmet-async';

const CardDetails = () => {
  const [reviewText, setReviewText] = useState('');
   const [rating, setRating] = useState('');
  const [reviews, setReviews] = useState([]);
const {id} = useParams();
  const data = useLoaderData();
const location = useLocation();
  // console.log(data);
  const parseID = parseInt(id);
  const singleCardData = data.find(cardData => cardData.id === parseID );

//   console.log(singleCardData);
  
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const reviewText = e.target.text.value;
     const Rating = parseInt(e.target.rating.value);
    if (!reviewText || isNaN(Rating) || Rating < 1 || Rating > 5) {
      alert('Please enter a valid review and a rating between 1 and 5.');
       return;
    }

       const newReview = {
      text: reviewText,
        rating: Rating,
      date: new Date().toLocaleString()
    };

    setReviews([newReview, ...reviews]);
    setReviewText('');
     setRating('');
  };
if(location.pathname == '/details/:id'){
  
    return <div className='flex justify-center items-center
     text-2xl font-semibold text-primary mt-16'>
    You have not subscribed any item.
   
  </div>
}
  return (
 
    
    <div className="max-w-4xl mx-auto p-6">
  <Helmet>
    <title>GadgetGo-subscribe now</title>
  </Helmet>
        <h1 className='text-4xl font-bold text-primary my-8'>Your Subscription</h1>
      <div className="mb-8 card shadow p-5 bg-white ">
         <img 
          src={singleCardData?.banner}
            
          className="w-full object-cover rounded-lg"
        />
         <h1 className="text-primary font-bold text-2xl mt-4">
            {singleCardData?.name}</h1>
         <p className="text-gray-600 mt-2">{singleCardData?.description}</p>
         <p className="mt-3 text-md space-x-2 text-primary font-semibold">Features:</p>
          <div className='flex'>
         {
             
                 singleCardData?.features.map((data, index) => (
                <div key={index} className="badge badge-success badge-xs md:badge-sm ml-4">{data}</div>
                
            ))}
         </div>
        <p className="mt-4 text-md space-x-2 text-primary font-semibold">Category:  
             <span className='badge badge-soft badge-info font-light mr-10'>{singleCardData?.tech_category} </span>
           Frequency:<span className='badge
            badge-soft badge-warning font-light'> 
                {singleCardData?.frequency}</span></p>
           <p className="text-xl font-semibold mt-2">Price: ${singleCardData?.price}</p>
           <div className='flex justify-center mt-5'><button className='btn bg-green-600 rounded-xs
           text-sm py-1 text-white hover:bg-[#0a9a19b0] w-full' >Subscribe</button></div>
      </div>

     
      <div className="bg-gray-50 p-6 rounded-md shadow mb-6 space-x-4">
        <form onSubmit={handleSubmit}>
        <h2 className="text-xl font-semibold mb-4 text-primary">Leave a Review</h2>
         <textarea
          type='text' name='text'
         
            placeholder="Write your review..."
          className="w-full border border-gray-300 rounded p-2 mb-4"
          rows="3"
        />
        <input className='w-30 border border-gray-300 rounded text-center'
          type="number"
            name='rating'
          
           placeholder="Rating (1-5)"
            min="1"
          max="5"
        />
        <div className='mt-3'>
        <button
          type='submit'
          className="bg-[#585379] text-white px-4 py-2 
          rounded hover:bg-[#423c5f]"
        >
          Submit Review
        </button>
        </div>
       </form>
      </div>
   
      
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4 text-primary">Customer Reviews :</h2>
        {reviews.length === 0 ? (
          <p className="text-gray-500">No reviews yet.</p>
        ) : (
          <ul className="space-y-4">
            {reviews.map((r, idx) => (
              <div key={idx} className="border-b pb-4">
                <div >
                <p className="text-gray-800 font-medium">Rating: 
                    <span className='text-yellow-500 text-lg'><FaStar /></span> 
                    {r.rating}/5</p></div>
                  <p className="text-gray-700">{r.text}</p>
                 <p className="text-sm text-gray-400">{r.date}</p>
              </div>
             ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CardDetails;
