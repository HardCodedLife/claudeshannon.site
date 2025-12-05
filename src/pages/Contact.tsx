import { useState, type FormEvent } from 'react';
import axios from 'axios';
import type { ContactForm } from '../types';

const Contact = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
	setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');
    console.log('Form submitted:', formData);
    // Here you can add your form submission logic, e.g., sending data to a server
	try {
      // Replace with your actual Worker URL
      const response = await axios.post(
        'https://contact-form.claudeshannon.site',
        formData,
      );
	  
	  
	  if (response.status === 200) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          name: '',
          email: '',
          message: '',
        });
		// Clear success message after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000);
	  } else {
        setSubmitStatus('error');
        setErrorMessage(response.data?.error || 'Failed to send message');
      }
    } catch (error) {
      setSubmitStatus('error');
  
      if (axios.isAxiosError(error) && error.response) {
        const errorData = error.response.data;
    
        // Handle validation errors (422)
        if (error.response.status === 422 || errorData?.name === 'validation_error') {
          if (errorData?.message?.includes('email') || errorData?.message?.includes('reply_to')) {
            setErrorMessage('Invalid email address. Please enter a valid email (e.g., name@example.com)');
          } else {
            setErrorMessage(errorData?.message || 'Validation error. Please check your input.');
          }
        } else {
          setErrorMessage(errorData?.error || errorData?.message || 'Failed to send message.');
        }
      } else {
        setErrorMessage('Network error. Please try again.');
      }
  
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto py-16 px-4 max-w-2xl">
      <h2 className="text-4xl font-bold mb-8 text-center">Contact Me</h2>
	  {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
          Message sent successfully! I'll get back to you soon.
        </div>
      )}	
	  
	  {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
          {errorMessage}
        </div>
      )}
	  
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg focut:outline-none focus:ring-2 focus:ring-blue-500"
              required
			  disabled={isSubmitting}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
			  disabled={isSubmitting}
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={5}
              required
			  disabled={isSubmitting}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700"
			disabled={isSubmitting}
		  >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
    </div>
  );
};

export default Contact;
