import { useState } from 'react';
import { Mail, MapPin, Phone, Send } from './Icons';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setSubmitMessage('>> MESSAGE_SENT: Encrypted transmission successful. Response incoming...');
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);

    setTimeout(() => setSubmitMessage(''), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section 
      id="contact" 
      className="py-16 sm:py-20 md:py-24 border-t border-blue-500/20"
      aria-labelledby="contact-heading"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 id="contact-heading" className="text-4xl sm:text-5xl md:text-6xl text-center mb-6 text-blue-400 font-mono glitch-effect">
            {'> CONTACT_CHANNEL'}
          </h2>
          <div className="w-24 h-1.5 bg-blue-500 mx-auto mb-8 sm:mb-12 md:mb-16"></div>
          <p className="text-center text-blue-200 mb-12 sm:mb-16 md:mb-20 max-w-2xl mx-auto font-mono text-base sm:text-lg leading-relaxed px-4">
            {'>> Secure communication channel active. Encrypted connection established.'}
          </p>

          <div className="grid md:grid-cols-3 gap-5 sm:gap-6 md:gap-7 mb-10 sm:mb-12 md:mb-16">
            <div className="bg-slate-900/70 backdrop-blur-md border border-blue-500/30 p-6 sm:p-7 md:p-8 text-center hover:border-blue-400 transition-all shadow-lg shadow-blue-500/10 rounded-lg">
              <div className="w-14 h-14 sm:w-16 sm:h-16 border border-blue-500 flex items-center justify-center mx-auto mb-5 sm:mb-6">
                <Mail className="text-blue-400" size={32} />
              </div>
              <h3 className="text-xl sm:text-2xl mb-3 sm:mb-4 text-blue-400 font-mono">{'> EMAIL'}</h3>
              <a href="mailto:gangulsw@gmail.com" className="text-blue-200 hover:text-cyan-300 active:text-cyan-200 transition-colors font-mono text-base sm:text-lg break-all min-h-[44px] flex items-center justify-center" aria-label="Send email to gangulsw@gmail.com">
                gangulsw@gmail.com
              </a>
            </div>

            <div className="bg-slate-900/70 backdrop-blur-md border border-blue-500/30 p-6 sm:p-7 md:p-8 text-center hover:border-blue-400 transition-all shadow-lg shadow-blue-500/10 rounded-lg">
              <div className="w-14 h-14 sm:w-16 sm:h-16 border border-blue-500 flex items-center justify-center mx-auto mb-5 sm:mb-6">
                <Phone className="text-blue-400" size={32} />
              </div>
              <h3 className="text-xl sm:text-2xl mb-3 sm:mb-4 text-blue-400 font-mono">{'> PHONE'}</h3>
              <a href="tel:+94718853420" className="text-blue-200 hover:text-cyan-300 active:text-cyan-200 transition-colors font-mono text-base sm:text-lg min-h-[44px] flex items-center justify-center" aria-label="Call +94 71 885 3420">
                +94 71 885 3420
              </a>
            </div>

            <div className="bg-slate-900/70 backdrop-blur-md border border-blue-500/30 p-6 sm:p-7 md:p-8 text-center hover:border-blue-400 transition-all shadow-lg shadow-blue-500/10 rounded-lg">
              <div className="w-14 h-14 sm:w-16 sm:h-16 border border-blue-500 flex items-center justify-center mx-auto mb-5 sm:mb-6">
                <MapPin className="text-blue-400" size={32} />
              </div>
              <h3 className="text-xl sm:text-2xl mb-3 sm:mb-4 text-blue-400 font-mono">{'> LOCATION'}</h3>
              <p className="text-blue-200 font-mono text-base sm:text-lg">Kottawa, Sri Lanka</p>
            </div>
          </div>

          <div className="bg-slate-900/70 backdrop-blur-md border border-blue-500/30 p-6 sm:p-8 md:p-10 max-w-2xl mx-auto shadow-lg shadow-blue-500/10 rounded-lg">
            <div className="mb-5 text-blue-400 font-mono text-base sm:text-lg">
              {'>> INITIALIZING_SECURE_FORM...'}
            </div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block mb-2 text-blue-400 font-mono text-base sm:text-lg">
                  {'> NAME'}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                  className="w-full px-4 py-2.5 min-h-[44px] bg-slate-950/50 border border-blue-500/30 text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 font-mono backdrop-blur-sm text-base"
                  placeholder="ENTER_NAME"
                  aria-required="true"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-blue-400 font-mono text-base sm:text-lg">
                  {'> EMAIL'}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                  inputMode="email"
                  className="w-full px-4 py-2.5 min-h-[44px] bg-slate-950/50 border border-blue-500/30 text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 font-mono backdrop-blur-sm text-base"
                  placeholder="user@domain.com"
                  aria-required="true"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-blue-400 font-mono text-base sm:text-lg">
                  {'> MESSAGE'}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2.5 min-h-[120px] bg-slate-950/50 border border-blue-500/30 text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 resize-none font-mono backdrop-blur-sm text-base"
                  placeholder="ENTER_ENCRYPTED_MESSAGE..."
                  aria-required="true"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-3 min-h-[48px] bg-blue-500/20 text-blue-400 border border-blue-500 hover:bg-blue-500/30 active:bg-blue-500/40 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 font-mono shadow-lg shadow-blue-500/20 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900 touch-manipulation"
                aria-busy={isSubmitting}
              >
                {isSubmitting ? (
                  '>> TRANSMITTING...'
                ) : (
                  <>
                    <Send size={20} />
                    <span>{'> SEND_MESSAGE'}</span>
                  </>
                )}
              </button>

              {submitMessage && (
                <div className="mt-4 p-4 bg-blue-500/10 text-blue-400 border border-blue-500/30 font-mono text-sm">
                  {submitMessage}
                </div>
              )}
            </form>
          </div>

          <div className="mt-12 sm:mt-16 text-center">
            <p className="text-blue-300 font-mono text-base sm:text-lg mb-6">{'>> ADDITIONAL_RESOURCES'}</p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <a
                href="https://github.com/ganguls"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 sm:px-8 py-3 sm:py-4 min-h-[44px] bg-slate-900/70 backdrop-blur-md border border-blue-500/30 text-blue-300 hover:border-blue-400 hover:bg-blue-500/10 active:bg-blue-500/20 transition-all font-mono text-base sm:text-lg flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900 touch-manipulation rounded"
              >
                {'> VIEW_GITHUB'}
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 sm:px-8 py-3 sm:py-4 min-h-[44px] bg-slate-900/70 backdrop-blur-md border border-blue-500/30 text-blue-300 hover:border-blue-400 hover:bg-blue-500/10 active:bg-blue-500/20 transition-all font-mono text-base sm:text-lg flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900 touch-manipulation rounded"
              >
                {'> VIEW_LINKEDIN'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
