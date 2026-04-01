import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 p-5 sm:p-8 md:p-12"
        >
          <h1 className="gellix-font text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-8">Terms & Conditions</h1>

          <div className="gellix-font text-gray-200 space-y-6 leading-relaxed">
            {/* Introduction Banner */}
            <div className="bg-blue-900/30 rounded-xl p-5 sm:p-6 border border-blue-500/30 mb-8">
              <p className="text-blue-200">
                These terms and conditions ("Terms") govern your access to and use of the Rudiarius Capital Management (Pty) Ltd website (the "Website"). By accessing or using the Website, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree, you must discontinue use of the Website immediately.
              </p>
            </div>

            {/* Section 1 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-blue-300 mb-4">1. About Rudiarius Capital Management</h2>
              <div className="bg-slate-800/50 rounded-xl p-5 sm:p-6 border border-white/10">
                <p><strong className="text-white">Rudiarius Capital Management (Pty) Ltd</strong></p>
                <p>An authorised Financial Services Provider</p>
                <p>FSP License: 45286</p>
                <p className="mt-3">Level 2, Bowman Building</p>
                <p>11 Alice Lane, Sandton, Johannesburg 2196</p>
                <p>South Africa</p>
                <p className="mt-3">Email: <a href="mailto:info@rudiarius.co.za" className="text-blue-300 hover:text-blue-200 transition-colors">info@rudiarius.co.za</a></p>
                <p>Tel: <a href="tel:+27100176996" className="text-blue-300 hover:text-blue-200 transition-colors">+27 10 017 6996</a></p>
              </div>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-blue-300 mb-4">2. Intellectual Property Rights</h2>
              <div className="space-y-4">
                <p>
                  <strong>2.1</strong> All intellectual property rights in the Website, including but not limited to copyright, database rights, trademarks (whether registered or unregistered), logos, graphics, text, software, and design, are owned by Rudiarius Capital Management and are protected under South African and international intellectual property laws.
                </p>

                <p>
                  <strong>2.2</strong> You may print, copy, or download extracts of the Website content for your personal, non-commercial reference, provided that:
                </p>

                <ul className="space-y-2 list-disc list-inside ml-4 text-sm">
                  <li>Our status as the author of such material is always acknowledged</li>
                  <li>No content is used for commercial purposes without our prior written consent</li>
                  <li>You do not modify any printed or downloaded materials</li>
                  <li>Any confidential information is treated as such and not disclosed to third parties</li>
                </ul>

                <p>
                  <strong>2.3</strong> You agree that you will not use the Website or any part of it to:
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-slate-800/30 rounded-lg p-4 border border-white/10">
                    <ul className="space-y-2 text-sm list-disc list-inside">
                      <li>Commit or encourage any criminal offence</li>
                      <li>Transmit offensive, defamatory, or abusive material</li>
                      <li>Collect or store personal data about other users</li>
                      <li>Upload content that facilitates hacking or cyber attacks</li>
                      <li>Infringe upon any intellectual property rights</li>
                    </ul>
                  </div>
                  <div className="bg-slate-800/30 rounded-lg p-4 border border-white/10">
                    <ul className="space-y-2 text-sm list-disc list-inside">
                      <li>Attempt to circumvent security safeguards</li>
                      <li>Interfere with other users' access to the Website</li>
                      <li>Distribute unsolicited advertising or spam</li>
                      <li>Impair the performance or functionality of any system</li>
                      <li>Permit or assist any third party in doing any of the above</li>
                    </ul>
                  </div>
                </div>

                <p>
                  <strong>2.4</strong> Any use of Website content in breach of these Terms will result in the immediate termination of your right to access and use the Website.
                </p>

                <p>
                  <strong>2.5</strong> No hyperlinks to the Website may be established on any external site without our prior written consent. You may not redistribute, modify, or create derivative works from any content on the Website.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-blue-300 mb-4">3. Website Disclaimer</h2>
              <div className="space-y-4">
                <div className="bg-yellow-900/30 rounded-xl p-5 sm:p-6 border border-yellow-500/30">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle size={20} className="text-yellow-300 flex-shrink-0 mt-1" />
                    <p>
                      <strong>3.1</strong> This Website is not directed at, or intended for distribution to or use by, any person or entity who is a citizen or resident of, or located in, any jurisdiction where such distribution, publication, availability, or use would be contrary to applicable law or regulation, or which would subject Rudiarius Capital Management to any registration or licensing requirement within such jurisdiction.
                    </p>
                  </div>
                </div>

                <p>
                  <strong>3.2</strong> Nothing on this Website constitutes an offer, solicitation, or invitation to invest, nor the sale of any securities or financial instruments. No investment commitments shall arise from the use of or reliance on this Website in any jurisdiction where such activity would be unlawful.
                </p>

                <p>
                  <strong>3.3</strong> The contents of this Website do not constitute investment, legal, tax, or other professional advice and should not be relied upon as such. Rudiarius Capital Management acts as an investment manager and does not provide investment advice or opportunities to retail clients as defined under the Financial Advisory and Intermediary Services Act (FAIS).
                </p>

                <p>
                  <strong>3.4</strong> The regulated services offered by Rudiarius Capital Management are designed for professional and institutional investors. As we do not service retail clients, the protections typically afforded to retail investors under applicable financial services regulations may not apply.
                </p>

                <p>
                  <strong>3.5</strong> All content on the Website is provided on an "as is" basis for general information purposes only. It does not constitute a recommendation, and no investment decision should be made solely on the basis of the information presented on this Website.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-blue-300 mb-4">4. Risk Warning</h2>
              <div className="bg-red-900/30 rounded-xl p-5 sm:p-6 border border-red-500/30">
                <div className="space-y-4">
                  <p>
                    <strong>4.1</strong> No representation or warranty, express or implied, is given that the information or opinions contained on this Website are accurate, reliable, or complete. All information is subject to change without notice. Rudiarius Capital Management reserves the right to suspend or withdraw access to the Website at any time without prior notice and accepts no liability for periods of unavailability.
                  </p>

                  <p>
                    <strong>4.2</strong> The value of investments and income derived from them may go down as well as up. Past performance is not a reliable indicator of future results. You may not recover the amount originally invested.
                  </p>

                  <p>
                    <strong>4.3</strong> Users of this Website must not transmit any virus, malware, "worm", "Trojan horse", or other item of a destructive nature. It is your responsibility to ensure that any content downloaded from the Website is free from such harmful components.
                  </p>

                  <p>
                    <strong>4.4</strong> This Website and these Terms are governed by the laws of the Republic of South Africa. By accessing the Website, you consent to the exclusive jurisdiction of the South African courts in respect of any dispute arising from your use of the Website.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-blue-300 mb-4">5. Third-Party Websites</h2>
              <div className="space-y-4">
                <p>
                  <strong>5.1</strong> The Website may contain hyperlinks to third-party websites for your convenience. Once you leave the Website via such a link, we have no control over and accept no responsibility for the content, privacy practices, or availability of any external site.
                </p>

                <p>
                  <strong>5.2</strong> You agree not to create any hyperlinks or deep links between this Website and any third-party site without our express prior written consent.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-blue-300 mb-4">6. Limitation of Liability</h2>
              <div className="space-y-4">
                <p>
                  <strong>6.1</strong> To the fullest extent permitted by law, Rudiarius Capital Management shall not be liable for any direct, indirect, incidental, consequential, or special damages arising from or related to your use of or inability to access the Website, including but not limited to loss of data, revenue, or profits.
                </p>

                <p>
                  <strong>6.2</strong> We do not guarantee that the Website will be uninterrupted, error-free, or free from viruses or other harmful components. It is your responsibility to implement appropriate safeguards to protect your equipment and data.
                </p>
              </div>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-blue-300 mb-4">7. Amendments</h2>
              <p>
                We reserve the right to amend these Terms at any time. Changes will take effect upon publication on the Website. Your continued use of the Website following any such changes constitutes your acceptance of the revised Terms. We encourage you to review this page periodically.
              </p>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-blue-300 mb-4">8. Severability</h2>
              <p>
                If any provision of these Terms is found to be unlawful, void, or unenforceable by a court of competent jurisdiction, such provision shall be severed from these Terms without affecting the validity and enforceability of the remaining provisions.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-blue-300 mb-4">9. Contact Information</h2>
              <div className="bg-slate-800/50 rounded-xl p-5 sm:p-6 border border-white/10">
                <p className="mb-4">If you have any questions about these Terms & Conditions, please contact us:</p>
                <div className="space-y-2">
                  <p><strong className="text-white">Rudiarius Capital Management (Pty) Ltd</strong></p>
                  <p>Level 2, Bowman Building</p>
                  <p>11 Alice Lane, Sandton, Johannesburg 2196</p>
                  <p>South Africa</p>
                  <p className="mt-3">Email: <a href="mailto:info@rudiarius.co.za" className="text-blue-300 hover:text-blue-200 transition-colors">info@rudiarius.co.za</a></p>
                  <p>Tel: <a href="tel:+27100176996" className="text-blue-300 hover:text-blue-200 transition-colors">+27 10 017 6996</a></p>
                  <p className="mt-3 text-sm text-gray-400">FSP License: 45286 | Authorised Financial Services Provider</p>
                </div>
              </div>
            </section>

            <div className="bg-blue-900/30 rounded-xl p-5 sm:p-6 border border-blue-500/30 mt-8">
              <p className="text-sm text-blue-200">
                <strong>Last Updated:</strong> March 2026
              </p>
              <p className="text-sm text-blue-200 mt-2">
                These Terms & Conditions are reviewed periodically. The most current version will always be available on this page.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsConditions;
