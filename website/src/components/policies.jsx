import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 p-8 md:p-12"
        >
          <h1 className="gellix-font text-4xl md:text-5xl font-bold text-white mb-8">Privacy Policy</h1>
          
          <div className="gellix-font text-gray-200 space-y-6 leading-relaxed">
            <p className="text-lg">
              This policy sets out the basis on which any personal data Rudiarius Capital Management collects from you, or that you provide to us, will be processed by us.
            </p>
            
            <p>
              Please read the following carefully to understand our views and practices regarding your personal data and how we will treat it.
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-blue-300 mb-4">Introduction</h2>
                <p>
                  This Privacy Notice outlines how Rudiarius Capital Management ("Rudiarius," "we," "us," or "our") collects, uses, processes, and protects your personal data when you browse and interact with our website. We take your privacy very seriously. We will ensure that all the personal information we collected about you is processed fairly and lawfully, in accordance with applicable data privacy legislation and we aim to meet current internet best practice. For the purpose of data protection regulations, Rudiarius acts as a data controller.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-blue-300 mb-4">Contact Details</h2>
                <div className="bg-slate-800/50 rounded-xl p-6 border border-white/10">
                  <p><strong>Rudiarius Capital Management</strong></p>
                  <p>Sandton, Johannesburg</p>
                  <p>South Africa</p>
                  <p>FSP License: 45286</p>
                  <p>Email: fungai@rudiarius.co.za</p>
                  <p>Phone: +27 10 017 6996</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-blue-300 mb-4">Types of Personal Data We Collect</h2>
                <p>Where we collect data that identifies an individual this is classed as "personal data". We collect various types of personal data, including but not limited to:</p>
                
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-slate-800/30 rounded-lg p-4 border border-white/10">
                    <h3 className="font-semibold text-blue-200 mb-2">Identity Data</h3>
                    <p className="text-sm">Full name, title, previous names, marital status, date of birth, photographic proof of identity.</p>
                  </div>
                  <div className="bg-slate-800/30 rounded-lg p-4 border border-white/10">
                    <h3 className="font-semibold text-blue-200 mb-2">Contact Data</h3>
                    <p className="text-sm">Postal address, email address, telephone numbers.</p>
                  </div>
                  <div className="bg-slate-800/30 rounded-lg p-4 border border-white/10">
                    <h3 className="font-semibold text-blue-200 mb-2">Financial Data</h3>
                    <p className="text-sm">Bank account details, tax information, investment history, source of funds.</p>
                  </div>
                  <div className="bg-slate-800/30 rounded-lg p-4 border border-white/10">
                    <h3 className="font-semibold text-blue-200 mb-2">Technical Data</h3>
                    <p className="text-sm">IP address, browser type and version, time zone setting, operating system and platform.</p>
                  </div>
                </div>

                <p className="mt-4">
                  The above list is not exhaustive and we may from time to time require additional information to satisfy our legal and regulatory obligations. Where additional information is required we will provide you with a reasonable explanation of why it is required unless we are prevented from doing so by law.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-blue-300 mb-4">How We Collect Your Personal Data</h2>
                <ul className="space-y-2 list-disc list-inside">
                  <li><strong>Direct Interactions:</strong> You may provide your personal data by filling in forms or questionnaires or by responding information requests from us, corresponding with us by post, phone, email, or otherwise.</li>
                  <li><strong>Third Parties:</strong> We may receive personal data about you from various third parties, including intermediaries where you have authorised the sharing of your personal data, public databases, and professional advisors.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-blue-300 mb-4">Purpose and Legal Basis for Processing</h2>
                <p>We only collect your personal data where we have a lawful purpose to do so. These reasons include:</p>
                <ul className="space-y-2 list-disc list-inside mt-4">
                  <li><strong>Legitimate Interests:</strong> To manage our relationship with you, improve our services, and ensure security.</li>
                  <li><strong>Legal Obligations:</strong> To comply with legal and regulatory requirements.</li>
                  <li><strong>Consent:</strong> To send marketing communications where you have given your explicit consent.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-blue-300 mb-4">Data Security</h2>
                <p>
                  We implement appropriate security measures to protect your personal data from unauthorised access, alteration, disclosure, or destruction. We restrict access to personal data to employees, agents, contractors, and other third parties who have a business need to know.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-blue-300 mb-4">Your Rights</h2>
                <p>
                  You have various rights in relation to your personal data, including to request access to your personal data, to request rectification of inaccurate personal data, to request the erasure of your personal data, to request restrictions on the processing of your personal data and to object to our processing of your personal data.
                </p>
                <p className="mt-4">
                  To exercise these rights, contact us at <a href="mailto:fungai@rudiarius.co.za" className="text-blue-300 hover:text-blue-200 transition-colors">fungai@rudiarius.co.za</a>. We aim to respond within one month.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-blue-300 mb-4">Contact Us</h2>
                <p>
                  If you have any questions or concerns about this Privacy Policy, please contact us at <a href="mailto:fungai@rudiarius.co.za" className="text-blue-300 hover:text-blue-200 transition-colors">fungai@rudiarius.co.za</a>.
                </p>
              </section>

              <div className="bg-blue-900/30 rounded-xl p-6 border border-blue-500/30 mt-8">
                <p className="text-sm text-blue-200">
                  <strong>Last Updated:</strong> September 2025
                </p>
                <p className="text-sm text-blue-200 mt-2">
                  This Privacy Policy may be updated from time to time. Any changes will be posted on this page.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;