'use client';
import React, { useState } from 'react';

export default function DistributorSignUp() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    distributorType: [] as string[],
    mobileNumber: '',
    company: '',
    enquiry: ''
  });
  
  const [charCount, setCharCount] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (name === 'enquiry') {
      setCharCount(value.length);
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      distributorType: checked 
        ? [...prev.distributorType, value]
        : prev.distributorType.filter(type => type !== value)
    }));
  };

  const handleSubmit = async () => {
    if (!formData.firstName || !formData.email) {
      setSubmitMessage('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('/api/submit-form.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.success) {
        setSubmitMessage('Form submitted successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          distributorType: [],
          mobileNumber: '',
          company: '',
          enquiry: ''
        });
        setCharCount(0);
      } else {
        setSubmitMessage('Error: ' + result.message);
      }
    } catch (error) {
      setSubmitMessage('Error submitting form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-purple-200 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-purple-800 mb-2">
            Distributer Sign up
          </h1>
          <div className="h-1 w-72 bg-purple-800"></div>
        </div>

        <div className="space-y-6">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="E.g. Prem Hari"
                className="w-full px-4 py-3 border-2 border-purple-300 rounded-lg focus:outline-none focus:border-purple-600 bg-white"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="E.g. Mainali"
                className="w-full px-4 py-3 border-2 border-purple-300 rounded-lg focus:outline-none focus:border-purple-600 bg-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="E.g. prem@gmail.com"
              className="w-full px-4 py-3 border-2 border-purple-300 rounded-lg focus:outline-none focus:border-purple-600 bg-white"
            />
          </div>


          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              placeholder="E.g. +977 9**********"
              className="w-full px-4 py-3 border-2 border-purple-300 rounded-lg focus:outline-none focus:border-purple-600 bg-white"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-3">
              Are you a
            </label>
            <div className="space-y-3">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  value="General Trade Distributer"
                  checked={formData.distributorType.includes('General Trade Distributer')}
                  onChange={handleCheckboxChange}
                  className="w-5 h-5 border-2 border-purple-400 rounded focus:ring-2 focus:ring-purple-500"
                />
                <span className="ml-3 text-gray-800">General Trade Distributer</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  value="Stockist"
                  checked={formData.distributorType.includes('Stockist')}
                  onChange={handleCheckboxChange}
                  className="w-5 h-5 border-2 border-purple-400 rounded focus:ring-2 focus:ring-purple-500"
                />
                <span className="ml-3 text-gray-800">Stockist</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  value="supermarket"
                  checked={formData.distributorType.includes('supermarket')}
                  onChange={handleCheckboxChange}
                  className="w-5 h-5 border-2 border-purple-400 rounded focus:ring-2 focus:ring-purple-500"
                />
                <span className="ml-3 text-gray-800">supermarket</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">
              Mobile Number
            </label>
            <p className="text-sm text-gray-700 mb-2">
              Please enter your mobile phone number, so we can get in touch with you. Thank you and get ready to join the JTI family!
            </p>
            <input
              type="tel"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleInputChange}
              placeholder="E.g. 9*********"
              className="w-full px-4 py-3 border-2 border-purple-300 rounded-lg focus:outline-none focus:border-purple-600 bg-white"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">
              Your Company
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              placeholder="Company Name"
              className="w-full px-4 py-3 border-2 border-purple-300 rounded-lg focus:outline-none focus:border-purple-600 bg-white"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">
              Enquiry Details
            </label>
            <div className="relative">
              <textarea
                name="enquiry"
                value={formData.enquiry}
                onChange={handleInputChange}
                placeholder="Enter your message..."
                maxLength={180}
                rows={6}
                className="w-full px-4 py-3 border-2 border-purple-300 rounded-lg focus:outline-none focus:border-purple-600 bg-white resize-none"
              />
              <div className="absolute bottom-3 right-3 text-sm text-gray-600">
                {charCount} / 180
              </div>
            </div>
          </div>

          <div>
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </div>

          {submitMessage && (
            <div className={`p-4 rounded-lg ${submitMessage.includes('Error') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
              {submitMessage}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}