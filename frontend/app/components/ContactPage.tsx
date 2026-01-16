'use client';
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, User, MessageSquare } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
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
    
    if (name === 'message') {
      setCharCount(value.length);
    }
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitMessage('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');

    setTimeout(() => {
      setSubmitMessage('Message sent successfully! We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setCharCount(0);
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      content: "Mainali Industries Pvt. Ltd.",
      subtitle: "Kathmandu, Nepal",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+977 980-2022445",
      subtitle: "Mon-Fri, 9:00 AM - 5:00 PM",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "info@mainaliindustries.com",
      subtitle: "We'll respond within 24 hours",
      bgColor: "bg-pink-100",
      iconColor: "text-pink-600"
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Monday - Friday",
      subtitle: "9:00 AM - 5:00 PM NST",
      bgColor: "bg-green-100",
      iconColor: "text-green-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100">
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto">
            Have questions about our products? We&apos;re here to help!
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 -mt-32">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`${info.bgColor} w-14 h-14 rounded-full flex items-center justify-center mb-4`}>
                <info.icon className={info.iconColor} size={28} />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">{info.title}</h3>
              <p className="text-gray-700 font-semibold">{info.content}</p>
              <p className="text-gray-500 text-sm mt-1">{info.subtitle}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
  
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Send Us a Message</h2>
                <p className="text-gray-600">Fill out the form below and we&apos;ll get back to you as soon as possible.</p>
              </div>

              <div className="space-y-6">
           
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3.5 text-gray-400" size={20} />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your name"
                      className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3.5 text-gray-400" size={20} />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3.5 text-gray-400" size={20} />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+977 XXXXXXXXXX"
                        className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="How can we help you?"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us more about your inquiry..."
                      maxLength={500}
                      rows={6}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-purple-500 transition-colors resize-none"
                    />
                    <div className="absolute bottom-3 right-3 text-sm text-gray-500">
                      {charCount} / 500
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                >
                  <Send size={20} />
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </button>

                {/* Submit Message */}
                {submitMessage && (
                  <div className={`p-4 rounded-lg ${submitMessage.includes('Error') || submitMessage.includes('required') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                    {submitMessage}
                  </div>
                )}
              </div>
            </div>
          </div>


          <div className="lg:col-span-1 space-y-6">

            <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl shadow-xl p-8 text-white">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <MessageSquare size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Become a Distributor</h3>
              <p className="text-purple-100 mb-6">
                Join our growing network of distributors across Nepal and grow your business with us.
              </p>
              <Link
                href="/Distributor_form"
                className="block w-full bg-white text-purple-600 font-semibold py-3 px-6 rounded-lg hover:bg-purple-50 transition-colors text-center"
              >
                Sign Up Now
              </Link>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Our Location</h3>
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="text-gray-400" size={48} />
              </div>
              <p className="text-gray-600 text-sm">
                Visit our headquarters in Kathmandu to learn more about our products and services.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-pink-600 rounded-2xl shadow-xl p-8 text-white">
              <h3 className="text-xl font-bold mb-3">Have Questions?</h3>
              <p className="text-blue-100 mb-4">
                Check out our FAQ page for quick answers to common questions.
              </p>
              <a
                href="/faq"
                className="text-white font-semibold underline hover:text-blue-100 transition-colors"
              >
                View FAQs →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}