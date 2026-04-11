import { useState } from 'react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setError('Please fill in all required fields.');
      setLoading(false);
      return;
    }

    try {
      await axios.post(`${API}/contact`, formData);
      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (err) {
      setError('Failed to submit form. Please try again.');
      console.error('Contact form error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-20" data-testid="contact-page">
      <section className="py-24 px-6 lg:px-12 bg-white" data-testid="contact-hero">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs tracking-[0.2em] uppercase font-semibold text-amber-600 mb-4" data-testid="contact-overline">
            GET IN TOUCH
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl tracking-tighter font-black uppercase mb-8" data-testid="contact-title">
            CONTACT US
          </h1>
          <p className="text-xl leading-relaxed text-zinc-600 max-w-4xl" data-testid="contact-intro">
            Ready to discuss your infrastructure project? Reach out to our team for expert consultation and support.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 bg-[#F4F4F5] border-t border-zinc-200" data-testid="contact-content">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl sm:text-5xl tracking-tight font-bold uppercase mb-8" data-testid="contact-info-title">
                LET'S TALK
              </h2>
              
              <div className="space-y-8 mb-12">
                <div data-testid="contact-address">
                  <div className="text-xs tracking-[0.2em] uppercase font-semibold text-amber-600 mb-2">ADDRESS</div>
                  <p className="text-lg text-zinc-700">Pune, Maharashtra, India</p>
                </div>
                
                <div data-testid="contact-phone">
                  <div className="text-xs tracking-[0.2em] uppercase font-semibold text-amber-600 mb-2">PHONE</div>
                  <p className="text-lg text-zinc-700">+91 98765 43210</p>
                </div>
                
                <div data-testid="contact-email">
                  <div className="text-xs tracking-[0.2em] uppercase font-semibold text-amber-600 mb-2">EMAIL</div>
                  <p className="text-lg text-zinc-700">info@atmagauravinfra.com</p>
                </div>
              </div>

              <div className="h-96 bg-zinc-200 border border-zinc-300 overflow-hidden" data-testid="contact-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242118.07334292754!2d73.72288185!3d18.52461995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Pune Location"
                ></iframe>
              </div>
            </div>

            <div className="bg-white p-12 border border-zinc-200" data-testid="contact-form-container">
              <h3 className="text-3xl tracking-tight font-bold uppercase mb-8">SEND A MESSAGE</h3>
              
              {success && (
                <div className="bg-amber-500 text-zinc-950 p-4 mb-6 border border-amber-600" data-testid="contact-success-message">
                  <p className="font-semibold">Thank you for your message!</p>
                  <p className="text-sm">We'll get back to you shortly.</p>
                </div>
              )}
              
              {error && (
                <div className="bg-red-100 text-red-800 p-4 mb-6 border border-red-300" data-testid="contact-error-message">
                  <p>{error}</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} data-testid="contact-form">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-xs tracking-[0.2em] uppercase font-semibold text-zinc-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-zinc-300 rounded-none focus:border-amber-500 focus:outline-none transition-colors"
                      required
                      data-testid="contact-input-name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-xs tracking-[0.2em] uppercase font-semibold text-zinc-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-zinc-300 rounded-none focus:border-amber-500 focus:outline-none transition-colors"
                      required
                      data-testid="contact-input-email"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-xs tracking-[0.2em] uppercase font-semibold text-zinc-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-zinc-300 rounded-none focus:border-amber-500 focus:outline-none transition-colors"
                      data-testid="contact-input-phone"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-xs tracking-[0.2em] uppercase font-semibold text-zinc-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-zinc-300 rounded-none focus:border-amber-500 focus:outline-none transition-colors"
                      required
                      data-testid="contact-input-subject"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-xs tracking-[0.2em] uppercase font-semibold text-zinc-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="6"
                      className="w-full px-4 py-3 border-2 border-zinc-300 rounded-none focus:border-amber-500 focus:outline-none transition-colors resize-none"
                      required
                      data-testid="contact-input-message"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                    data-testid="contact-submit-button"
                  >
                    {loading ? 'SENDING...' : 'SEND MESSAGE'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;