import { ChevronRight, MessageSquare, Headset, Receipt, Users, CheckCircle, Loader2, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';
import { PageSEO } from '../components/PageSEO';
import { ContactMapBanner } from '../components/ContactMapBanner';

const WORKER_URL = 'https://form-email-handler.force123em.workers.dev';
const TURNSTILE_SITE_KEY = '0x4AAAAAAEFGpSR2phQfdDip';

declare global {
  interface Window {
    turnstile?: {
      render: (container: HTMLElement, options: Record<string, unknown>) => string;
      reset: (widgetId?: string) => void;
    };
  }
}

export function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const faqs = [
    {
      q: "How quickly will someone respond to my inquiry?",
      a: "Our team typically responds to all inquiries within 24 hours during standard business days. For urgent IT support, existing clients can use the Client Portal for priority routing."
    },
    {
      q: "Can I get a quote before committing to a service?",
      a: "Absolutely. Once we understand your requirements through an initial call or email, we will provide a clear, customized proposal with no hidden fees or obligations."
    },
    {
      q: "Where is SOLKN located?",
      a: "We have offices in London, UK and Gujarat, India. Our teams operate across both time zones to provide comprehensive support and development services."
    },
    {
      q: "Do you offer emergency IT support for new clients?",
      a: "While our priority response times are reserved for clients on Managed IT contracts, we do offer emergency break-fix support depending on current capacity. Contact us to discuss your urgent needs."
    }
  ];

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [turnstileToken, setTurnstileToken] = useState('');
  const turnstileRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | undefined>(undefined);

  const [formData, setFormData] = useState({
    helpType: '',
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    phone: '',
    location: '',
    details: '',
    smsConsent: false,
    marketingConsent: false,
  });

  const [detailsError, setDetailsError] = useState('');

  useEffect(() => {
    const scriptId = 'cf-turnstile-script';
    const renderWidget = () => {
      if (turnstileRef.current && window.turnstile && widgetIdRef.current === undefined) {
        widgetIdRef.current = window.turnstile.render(turnstileRef.current, {
          sitekey: TURNSTILE_SITE_KEY,
          callback: (token: string) => setTurnstileToken(token),
          'expired-callback': () => setTurnstileToken(''),
        });
      }
    };

    if (window.turnstile) {
      renderWidget();
      return;
    }

    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
      script.async = true;
      script.defer = true;
      script.onload = renderWidget;
      document.body.appendChild(script);
    } else {
      const interval = setInterval(() => {
        if (window.turnstile) {
          renderWidget();
          clearInterval(interval);
        }
      }, 200);
      return () => clearInterval(interval);
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');

    const wordCount = formData.details.trim().split(/\s+/).filter((word) => word.length > 0).length;
    if (wordCount < 3) {
      setDetailsError('Please provide a minimum of 3 words.');
      return;
    }
    setDetailsError('');

    if (!turnstileToken) {
      setSubmitError('Please complete the verification check before submitting.');
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch(WORKER_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`.trim(),
          email: formData.email,
          message: formData.details,
          helpType: formData.helpType,
          companyName: formData.companyName,
          phone: formData.phone,
          location: formData.location,
          turnstileToken,
        }),
      });

      if (!res.ok) {
        const errBody = await res.json().catch(() => ({}));
        throw new Error(errBody.error || 'Something went wrong. Please try again.');
      }

      setIsSubmitted(true);
    } catch (err) {
      setSubmitError(
        err instanceof Error ? err.message : 'Something went wrong. Please try again.'
      );
      if (window.turnstile && widgetIdRef.current !== undefined) {
        window.turnstile.reset(widgetIdRef.current);
        setTurnstileToken('');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-50 text-gray-900 flex flex-col items-center relative w-full">
      <PageSEO
        title="Contact SOLKN | Managed IT Support, Web Development & AI Solutions"
        description="Get in touch with SOLKN for managed IT support, secure cloud hosting, custom web development, and AI-powered business solutions. Speak to our team today."
      />

      {/* Header Banner */}
      <div className="w-full h-[400px] md:h-[500px] bg-black relative overflow-hidden flex items-center justify-center">
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-6 tracking-tight drop-shadow-lg">Get in Touch</h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto font-light drop-shadow">
            Have a question about IT support, hosting, or AI solutions? Our team is ready to help — reach out below.
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8 mt-12 relative z-20">
        <div className="bg-white rounded-[2rem] p-2 md:p-3 shadow-2xl flex flex-col lg:flex-row-reverse">

          {/* Info Panel — hidden on mobile */}
          <div className="hidden lg:flex lg:w-5/12 flex-col p-2 lg:p-3">
            <div className="relative overflow-hidden rounded-[1.5rem] p-8 md:p-10 text-white bg-black shadow-2xl h-full flex flex-col justify-between">

              <div className="relative z-10 flex flex-col">
                <h3 className="text-3xl md:text-4xl font-light mb-6 tracking-tight">Let's connect you with the right team</h3>
                <p className="text-white/70 font-light mb-12 leading-relaxed text-lg">
                  Select the option below that best matches your enquiry, and we'll route it to the right team.
                </p>

                <div className="space-y-4">
                  {[
                    { icon: <MessageSquare className="w-6 h-6 text-white" />, title: "Sales" },
                    { icon: <Headset className="w-6 h-6 text-white" />, title: "Support" },
                    { icon: <Receipt className="w-6 h-6 text-white" />, title: "Billing & invoices" },
                    { icon: <Users className="w-6 h-6 text-white" />, title: "Channel Partners" }
                  ].map((item, idx) => (
                    <Link to="/client-portal" key={idx} className="w-full flex items-center gap-4 p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-left group">
                      <div className="w-12 h-12 rounded-lg bg-black/50 flex items-center justify-center shrink-0 border border-white/5 group-hover:border-white/20 transition-colors">
                        {item.icon}
                      </div>
                      <span className="font-medium text-white/90 group-hover:text-white transition-colors text-lg">{item.title}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="relative z-10 mt-16 pt-8 border-t border-white/10 flex flex-col gap-8">
                <div>
                  <p className="text-sm font-medium text-white mb-2">Get Access</p>
                  <p className="text-sm text-blue-100/60 font-light">
                    Sign up at <a href="#" className="text-blue-300 underline">solkn.com</a> to start using our services.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-white mb-2">Questions?</p>
                  <p className="text-sm text-blue-100/60 font-light">
                    Reach us at <a href="mailto:info@solkn.com" className="text-blue-300 underline">info@solkn.com</a> or call <a href="tel:+447540319866" className="text-blue-300 underline">+44 7540 319866</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="w-full lg:w-7/12 p-6 md:p-12 lg:p-16 flex flex-col overflow-y-auto">
            <h2 className="text-4xl md:text-5xl font-medium mb-4 text-gray-900 tracking-tight">Send Us a Message</h2>
            <p className="text-lg font-light text-gray-600 mb-8 leading-relaxed">
              Fill out the form below and let us know what you need — from network management and secure cloud hosting to custom application development. A member of our team will be in touch shortly.
            </p>

            <div className="bg-gray-100 shadow-xl border border-gray-200 p-8 md:p-12 rounded-[2rem] relative overflow-hidden">
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div>
                  <label htmlFor="helpType" className="block text-sm mb-2 text-gray-800 font-medium">How Can We Help You?</label>
                  <select
                    id="helpType"
                    name="helpType"
                    value={formData.helpType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-transparent bg-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-gray-900 shadow-inner transition-colors appearance-none"
                  >
                    <option value="">Please Select</option>
                    <option value="Managed IT Support">Managed IT Support</option>
                    <option value="IT Outsourcing">IT Outsourcing</option>
                    <option value="Web Development & Hosting">Web Development & Hosting</option>
                    <option value="AI Business Solutions">AI Business Solutions</option>
                    <option value="Network Infrastructure">Network Infrastructure</option>
                    <option value="Network Monitoring">Network Monitoring</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm mb-2 text-gray-800 font-medium">First Name <span className="text-red-400">*</span></label>
                    <input
                      id="firstName"
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-transparent bg-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-gray-900 shadow-inner transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm mb-2 text-gray-800 font-medium">Last Name <span className="text-red-400">*</span></label>
                    <input
                      id="lastName"
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-transparent bg-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-gray-900 shadow-inner transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="companyName" className="block text-sm mb-2 text-gray-800 font-medium">Company Name <span className="text-red-400">*</span></label>
                    <input
                      id="companyName"
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-transparent bg-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-gray-900 shadow-inner transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm mb-2 text-gray-800 font-medium">Business Email <span className="text-red-400">*</span></label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-transparent bg-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-gray-900 shadow-inner transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm mb-2 text-gray-800 font-medium">Phone Number</label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-transparent bg-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-gray-900 shadow-inner transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="location" className="block text-sm mb-2 text-gray-800 font-medium">Business Location <span className="text-red-400">*</span></label>
                    <input
                      id="location"
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      required
                      placeholder="E.g., England, Wales"
                      className="w-full px-4 py-3 rounded-xl border border-transparent bg-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-gray-900 placeholder:text-gray-400 shadow-inner transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="details" className="block text-sm mb-2 text-gray-800 font-medium">Please Provide Additional Details <span className="text-red-400">*</span></label>
                  <textarea
                    id="details"
                    rows={4}
                    required
                    name="details"
                    value={formData.details}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border bg-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-black text-gray-900 shadow-inner transition-colors ${detailsError ? 'border-red-400 focus:border-red-400' : 'border-transparent focus:border-transparent'}`}
                  ></textarea>
                  {detailsError && <p className="text-red-500 text-xs mt-1">{detailsError}</p>}
                </div>

                <div className="space-y-3 pt-4 text-sm text-gray-500">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="smsConsent"
                      checked={formData.smsConsent}
                      onChange={handleChange}
                      className="mt-1 w-4 h-4 text-[#2b3d5b] bg-white border-gray-300 rounded focus:ring-[#2b3d5b] focus:ring-offset-gray-900"
                    />
                    <span>
                      I consent to receive SMS updates from SOLKN and agree to the terms outlined in our{' '}
                      <Link to="/privacy-policy" className="underline text-gray-600 hover:text-sky-600 transition-colors">
                        Privacy Policy
                      </Link>. Consent is not a condition of purchase; msg & data rates may apply. Reply STOP to opt out.
                    </span>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="marketingConsent"
                      checked={formData.marketingConsent}
                      onChange={handleChange}
                      className="mt-1 w-4 h-4 text-[#2b3d5b] bg-white border-gray-300 rounded focus:ring-[#2b3d5b] focus:ring-offset-gray-900"
                    />
                    <span>I'd like to receive marketing emails and updates from SOLKN.</span>
                  </label>
                </div>

                <div ref={turnstileRef} className="pt-2" />

                {submitError && (
                  <p className="text-red-500 text-sm">{submitError}</p>
                )}

                <div className="pt-6">
                  {isSubmitted ? (
                    <button type="button" disabled className="bg-green-600 text-white px-8 py-3.5 rounded-full font-medium flex items-center justify-center w-full md:w-auto transition-colors shadow-lg">
                      <CheckCircle className="mr-2 w-5 h-5" /> Form Submitted
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-black text-white px-8 py-3.5 rounded-full font-medium flex items-center justify-center w-full md:w-auto hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5 duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 w-5 h-5 animate-spin" /> Sending...
                        </>
                      ) : (
                        <>
                          Send Contact Request <ChevronRight className="ml-2 w-5 h-5" />
                        </>
                      )}
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
      
      <ContactMapBanner />

      <section className="py-24 bg-gray-50 w-full">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-gray-900">Your questions, answered</h2>
          </div>
          <div className="space-y-2">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-b border-gray-200 pb-2">
                <button 
                  className="w-full flex items-center justify-between py-4 text-left focus:outline-none group"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  <span className="text-lg font-medium text-gray-900 group-hover:text-[#1e293b] transition-colors">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-[#2b3d5b] transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === idx ? 'max-h-40 opacity-100 mb-4' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-gray-600 text-sm leading-relaxed pr-8">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Banner */}
      <div className="py-24 relative overflow-hidden rounded-[3rem] border border-gray-800 mx-4 sm:mx-6 lg:mx-8 mt-12 mb-8 bg-[#0a0a0a] text-white shadow-2xl self-stretch">
        {/* Background image */}
        <div
          className="absolute inset-0 z-0 opacity-70 mix-blend-screen"
          style={{
            backgroundImage: 'url("/marketingbanner.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
          aria-hidden="true"
        ></div>
        <div className="absolute inset-0 z-0 bg-black/50"></div>

        {/* Flare effect for the banner */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-50%] right-[-10%] w-[80%] h-[150%] bg-[radial-gradient(ellipse_at_center,rgba(217,119,6,0.3)_0%,transparent_70%)] blur-[80px]"></div>
          <div className="absolute top-[0%] right-[10%] w-[1px] h-[200%] bg-white/20 rotate-[45deg] blur-[2px]"></div>
          <div className="absolute top-[10%] right-[0%] w-[200%] h-[1px] bg-white/20 rotate-[45deg] blur-[2px]"></div>
          {/* Noise overlay */}
          <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center w-full">
          <h2 className="text-4xl md:text-6xl font-semibold mb-6 text-white tracking-tight leading-[1.05]">
            Stay ahead without<br />the noise.
          </h2>
          <p className="text-white/70 font-light mb-6 max-w-xl">
            Get practical IT, security, and AI insights from SOLKN — straight to your inbox, no spam.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 w-full max-w-lg mt-2 justify-center">
            <label htmlFor="newsletterEmail" className="sr-only">Email address</label>
            <input
              id="newsletterEmail"
              type="email"
              placeholder="Enter your email"
              className="bg-transparent border border-white/20 text-white placeholder:text-white/50 px-5 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 flex-grow text-sm md:text-base"
              required
            />
            <button
              type="submit"
              className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors shrink-0 text-sm md:text-base"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

    </div>
  );
}