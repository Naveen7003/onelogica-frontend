import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { uploadDocument } from '../../store/Actions/employeActions';
import { useNavigate } from 'react-router-dom';

const DocumentUpload = () => {
  const dispatch = useDispatch();
  const [resume, setResume] = useState(null);
  const [certificate, setCertificate] = useState(null);
  const navigate = useNavigate()

  // Function to handle file input for resume
  const handleResumeUpload = (e) => {
    const file = e.target.files[0];
    setResume(file);
  };

  // Function to handle file input for certificate
  const handleCertificateUpload = (e) => {
    const file = e.target.files[0];
    setCertificate(file);
  };

  // Function to submit the files
  const handleSubmit = () => {
    if (!resume && !certificate) {
      alert('Please upload a resume or certificate.');
      return;
    }

    // Upload resume if available
    if (resume) {
      const resumeFormData = new FormData();
      resumeFormData.append('documentType', 'resume');
      resumeFormData.append('file', resume);
      dispatch(uploadDocument(resumeFormData)); // Send only the FormData
      navigate("/employe/profile")
    }

    // Upload certificate if available
    if (certificate) {
      const certificateFormData = new FormData();
      certificateFormData.append('documentType', 'certification');
      certificateFormData.append('file', certificate);
      dispatch(uploadDocument(certificateFormData)); // Send only the FormData
      navigate("/employe/profile")
    }

  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 p-8">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-5xl font-bold text-center text-gray-800 mt-6 mb-8">
          Upload Your Documents
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto">

          {/* Resume Upload */}
          <div className="mb-6">
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Upload Resume
            </label>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleResumeUpload}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
          </div>

          {/* Certificate Upload */}
          <div className="mb-6">
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Upload Certificate
            </label>
            <input
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={handleCertificateUpload}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              onClick={handleSubmit}
              className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-600"
            >
              Upload Documents
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentUpload;
