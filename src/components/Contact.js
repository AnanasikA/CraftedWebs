import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaComment } from 'react-icons/fa';
import SectionHeading from './SectionHeading';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState('');
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false
  });

  const validateForm = () => {
    let newErrors = {
      name: !formData.name,
      email: !/\S+@\S+\.\S+/.test(formData.email),
      message: !formData.message
    };
    setErrors(newErrors);
    return !(newErrors.name || newErrors.email || newErrors.message);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      alert("Wypełnij poprawnie wszystkie pola");
      return;
    }

    setIsSubmitting(true);

    // Konfiguracja EmailJS
    emailjs.send(
      'service_uq45nvk', // zamień na swój Service ID z EmailJS
      'template_sv51gfq', // zamień na swój Template ID z EmailJS
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      'vgMyUXe7D-ey-o5-Y' // zamień na swój User ID z EmailJS
    ).then(() => {
      console.log('Formularz wysłany:', formData);
      setSubmittedName(formData.name);
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }).catch((error) => {
      console.error('Błąd przy wysyłaniu wiadomości:', error);
      setIsSubmitting(false);
      alert('Wystąpił problem podczas wysyłania wiadomości. Spróbuj ponownie później.');
    });
  };

  return (
    <section id="contact" className="min-h-screen bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 flex items-center justify-center p-5 sm:p-8 md:p-10 lg:p-16 xl:p-20">
      <div className={`w-full max-w-lg sm:max-w-xl md:max-w-2xl bg-white bg-opacity-30 backdrop-blur-md p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 rounded-lg shadow-2xl transition-transform duration-300 transform ${isSubmitting ? 'animate-submit' : ''}`}>
        <SectionHeading title="Kontakt" />

        {isSubmitted ? (
          <div className="text-center space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-green-600">
              Dziękujemy za wiadomość, {submittedName}!
            </h2>
            <p className="text-gray-700 text-base md:text-lg">
              Otrzymaliśmy Twoją wiadomość i skontaktujemy się z Tobą jak najszybciej.
              Jeśli masz jeszcze jakieś pytania, nie wahaj się do nas napisać!
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="bg-gradient-to-r from-green-400 to-green-600 text-white py-2 px-6 rounded-full hover:from-green-500 hover:to-green-700 transition-all duration-300 transform hover:scale-105"
            >
              Wyślij kolejną wiadomość
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="mb-4 group">
              <label className="block text-lg font-medium mb-2 flex items-center" htmlFor="name">
                <FaUser className="mr-2 text-gray-500" /> Imię
              </label>
              <input 
                type="text" 
                id="name" 
                className={`w-full p-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded focus:ring-2 focus:ring-green-400 transition-transform transform group-hover:scale-105 focus:scale-105 duration-300 shadow-sm`}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">To pole jest wymagane</p>}
            </div>
            <div className="mb-4 group">
              <label className="block text-lg font-medium mb-2 flex items-center" htmlFor="email">
                <FaEnvelope className="mr-2 text-gray-500" /> Email
              </label>
              <input 
                type="email" 
                id="email" 
                className={`w-full p-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded focus:ring-2 focus:ring-green-400 transition-transform transform group-hover:scale-105 focus:scale-105 duration-300 shadow-sm`}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">Podaj prawidłowy adres email</p>}
            </div>
            <div className="mb-4 group">
              <label className="block text-lg font-medium mb-2 flex items-center" htmlFor="message">
                <FaComment className="mr-2 text-gray-500" /> Wiadomość
              </label>
              <textarea 
                id="message" 
                className={`w-full p-3 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded focus:ring-2 focus:ring-green-400 transition-transform transform group-hover:scale-105 focus:scale-105 duration-300 shadow-sm`}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">To pole jest wymagane</p>}
            </div>
            <button 
              type="submit" 
              className={`bg-gradient-to-r from-green-400 to-green-600 text-white py-2 px-6 rounded-full hover:from-green-500 hover:to-green-700 transition-all duration-300 transform ${isSubmitting ? 'animate-spin' : 'hover:scale-105'}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Wysyłanie...' : 'Wyślij wiadomość'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default Contact;






      
