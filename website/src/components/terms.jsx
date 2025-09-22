import React from 'react';
import { motion } from 'framer-motion';

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 p-8 md:p-12"
        >
          <h1 className="gellix-font text-4xl md:text-5xl font-bold text-white mb-8">Terms & Conditions</h1>
          
          <div className="gellix-font text-gray-200 space-y-6 leading-relaxed">
            <div className="bg-blue-900/30 rounded-xl p-6 border border-blue-500/30 mb-8">
              <p className="text-blue-200">
                These terms (and any documents referred to in them) tell you the terms on which you may make use of the Rudiarius Capital Management website (the "Website"). Please read these terms carefully prior to use of the Website. By using the Website, you confirm your acceptance to these terms. If you do not agree to these terms, you should exit the Website immediately and refrain from using it.
              </p>
            </div>

            <section>
              <h2 className="text-2xl font-bold text-blue-300 mb-4">1. Information about Rudiarius Capital Management</h2>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-white/10">
                <p><strong>Rudiarius Capital Management</strong></p>
                <p>Sandton, Johannesburg, South Africa</p>
                <p>FSP License: 45286</p>
                <p>You can contact us by email at <a href="mailto:fungai@rudiarius.co.za" className="text-blue-300 hover:text-blue-200 transition-colors">fungai@rudiarius.co.za</a></p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-300 mb-4">2. Intellectual Property Rights</h2>
              <div className="space-y-4">
                <p>
                  <strong>2.1</strong> This Website is owned by Rudiarius Capital Management and any and all intellectual property rights in the Website including, but not limited to, copyright and database rights and any logos or trademarks (whether registered or unregistered) are owned by and remain the property of Rudiarius at all times.
                </p>
                
                <p>
                  <strong>2.2</strong> You may print off, copy and may download extracts of the content on the Website for your personal reference and may draw the attention of others within your organisation to material posted on our Website, provided that:
                </p>
                
                <ul className="space-y-2 list-disc list-inside ml-4 text-sm">
                  <li>Our status (and that of any identified contributors) as authors of material on the Website must always be acknowledged</li>
                  <li>You do not use any part of the content on the Website for commercial purposes without our prior written consent</li>
                  <li>You do not modify in any way the paper or digital copies of any materials you have printed off or downloaded</li>
                  <li>Any information on the Website which is marked as being confidential is treated as such and is not disclosed to any third party</li>
                </ul>

                <p>
                  <strong>2.3</strong> You agree that you will not use any part of the Website to:
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-slate-800/30 rounded-lg p-4 border border-white/10">
                    <ul className="space-y-2 text-sm list-disc list-inside">
                      <li>Commit or encourage any criminal offence</li>
                      <li>Send or receive offensive or abusive material</li>
                      <li>Collect or store personal data about other users</li>
                      <li>Upload content that facilitates hacking</li>
                      <li>Infringe intellectual property rights</li>
                    </ul>
                  </div>
                  <div className="bg-slate-800/30 rounded-lg p-4 border border-white/10">
                    <ul className="space-y-2 text-sm list-disc list-inside">
                      <li>Circumvent security safeguards</li>
                      <li>Cause annoyance to other users</li>
                      <li>Send unsolicited advertising or spam</li>
                      <li>Affect system performance or functionality</li>
                      <li>Permit any third party to do any of the above</li>
                    </ul>
                  </div>
                </div>

                <p>
                  <strong>2.4</strong> If you use the content of the Website in breach of these terms of use, your right to use the Website will cease immediately.
                </p>

                <p>
                  <strong>2.5</strong> No links to the Website may be included on any other site without our prior written consent. You are not entitled to modify or redistribute the contents of the Website.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-300 mb-4">3. Website Disclaimer</h2>
              <div className="space-y-4">
                <div className="bg-yellow-900/30 rounded-xl p-6 border border-yellow-500/30">
                  <p>
                    <strong>3.1</strong> This Site is not directed at, or intended for distribution to or use by, any person or entity who is a citizen or resident of or located in any jurisdiction where such distribution, publication, availability or use would be contrary to applicable law or regulation or which would subject the firm to any registration or licensing requirement within such jurisdiction.
                  </p>
                </div>

                <p>
                  <strong>3.2</strong> Neither this website as a whole nor any part hereof shall constitute an offer of or the solicitation of an offer to invest, or the sale of securities, nor shall there be any sale of any investments or commitments in connection with this website in any jurisdiction in which such offer, solicitation or sale would be unlawful.
                </p>

                <p>
                  <strong>3.3</strong> The contents of this website do not constitute investment, legal, tax or other advice and should not be taken as such. Rudiarius Capital Management acts as investment manager and does not offer investment advice or opportunities to retail clients as defined in applicable financial services regulations.
                </p>

                <p>
                  <strong>3.4</strong> The regulated services provided by Rudiarius Capital Management are only accessible to Eligible Counterparties or Professional Clients as defined by applicable financial services regulations. As the firm is not permitted to deal with Retail Clients this means that the same levels of protection afforded to Retail Clients would not be available to prospective regulated activity clients of the firm.
                </p>

                <p>
                  <strong>3.5</strong> The content made available on the Website is intended for general information purposes only and is provided on an "as is" basis. It does not constitute advice or the making of any recommendation and the content on the Website should not be relied upon as the basis for any decision or action.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-300 mb-4">4. Risk Warning</h2>
              <div className="bg-red-900/30 rounded-xl p-6 border border-red-500/30">
                <p>
                  <strong>4.1</strong> No representation or warranty is given that the information or opinions contained in this website are accurate, reliable or complete. Any information contained within this website is subject to amendment, revision or updating. Rudiarius Capital Management reserves the right to suspend or withdraw access to the pages of this site without notice at any time and accepts no responsibility for these pages not being available at all times.
                </p>
                
                <p className="mt-4">
                  <strong>4.2</strong> Users of this website must not transmit any virus, 'worm', 'Trojan horse', or other item of a destructive nature to this site and it is the user's responsibility to ensure that whatever is downloaded or selected for use from the site is free from such items.
                </p>

                <p className="mt-4">
                  <strong>4.3</strong> This site is governed by the laws of South Africa. By accessing the site, you agree to submit to the exclusive jurisdiction of the South African Courts and any adjudication they make in respect of litigation arising in connection with the site.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-300 mb-4">5. Third Party Websites</h2>
              <p>
                <strong>5.1</strong> While we retain the right to establish hypertext links between the Website and any third party website, if you choose to use such a hypertext link you will leave the Website. Once you leave the Website, whether or not you realise that you are leaving, we are not responsible in any way for the content of any other website that you enter.
              </p>
              
              <p>
                <strong>5.2</strong> You agree not to create any hypertext links or deep links between this Website and any third party site without our express prior written consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-300 mb-4">Contact Information</h2>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-white/10">
                <p>If you have any questions about these Terms & Conditions, please contact us:</p>
                <div className="mt-4 space-y-2">
                  <p><strong>Rudiarius Capital Management</strong></p>
                  <p>Sandton, Johannesburg, South Africa</p>
                  <p>Email: <a href="mailto:fungai@rudiarius.co.za" className="text-blue-300 hover:text-blue-200 transition-colors">fungai@rudiarius.co.za</a></p>
                  <p>Phone: +27 10 017 6996</p>
                  <p>FSP License: 45286</p>
                </div>
              </div>
            </section>

            <div className="bg-blue-900/30 rounded-xl p-6 border border-blue-500/30 mt-8">
              <p className="text-sm text-blue-200">
                <strong>Last Updated:</strong> September 2025
              </p>
              <p className="text-sm text-blue-200 mt-2">
                These Terms & Conditions may be updated from time to time. Any changes will be posted on this page.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsConditions;