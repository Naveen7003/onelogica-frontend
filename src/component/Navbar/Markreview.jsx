import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { markReview } from '../../store/Actions/managerActions';

const Markreview = () => {
    const { employeeId } = useParams(); // Get the employeeId from URL
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [reviewDate, setReviewDate] = useState(new Date().toISOString().substring(0, 10)); // Default date
  const [rating, setRating] = useState('');
  const [feedback, setFeedback] = useState(['']); // Array for multiple feedback inputs

  // Function to handle form submission
  const handleSubmitReview = (e) => {
    e.preventDefault();
    
    const reviewData = {
      reviewDate,
      rating: parseInt(rating), // Convert rating to a number
      feedback: feedback.filter(item => item !== ""), // Filter out empty feedback inputs
    };
    dispatch(markReview({ id: employeeId, data: reviewData }))
    navigate('/manager/profile');
  };

  // Function to handle feedback changes
  const handleFeedbackChange = (index, value) => {
    const updatedFeedback = [...feedback];
    updatedFeedback[index] = value;
    setFeedback(updatedFeedback);
  };

  // Function to add a new feedback field
  const addFeedbackField = () => {
    setFeedback([...feedback, '']);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Performance Review</h2>
        
        <form onSubmit={handleSubmitReview}>
          {/* Review Date */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Review Date</label>
            <input
              type="date"
              value={reviewDate}
              onChange={(e) => setReviewDate(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          {/* Rating */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Rating (1 to 5)</label>
            <input
              type="number"
              min="1"
              max="5"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter rating (1-5)"
              required
            />
          </div>

          {/* Feedback */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Feedback</label>
            {feedback.map((fb, index) => (
              <input
                key={index}
                type="text"
                value={fb}
                onChange={(e) => handleFeedbackChange(index, e.target.value)}
                className="w-full p-2 mb-2 border border-gray-300 rounded"
                placeholder={`Feedback ${index + 1}`}
              />
            ))}
            
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-600 transition duration-300"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  )
}

export default Markreview
