import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database, Globe, Bell, UserCheck, Server } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 p-5 sm:p-8 md:p-12"
        >
          <h1 className="gellix-font text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-8">Privacy Policy</h1>

          <div className="gellix-font text-gray-200 space-y-6 leading-relaxed">
            {/* Introduction Banner */}
            <div className="bg-blue-900/30 rounded-xl p-5 sm:p-6 border border-blue-500/30 mb-8">
              <p className="text-blue-200 text-base sm:text-lg">
                At Rudiarius Capital Management (Pty) Ltd and its affiliated entities (collectively referred to as "Rudiarius Capital Management", "we", "our", or "us"), we are committed to protecting your privacy and ensuring the security of your personal information. We process personal data in compliance with the Protection of Personal Information Act, 2013 (POPIA), including but not limited to the conditions for lawful processing and the rights of data subjects.
              </p>
            </div>

            <p>
              This policy explains how we collect, use, share, and protect your data, and outlines your rights regarding this information.
            </p>

            {/* Section 1 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-blue-300 mb-4">1. Information We Collect</h2>
              <p className="mb-4">We may collect the following categories of personal information in order to provide our services and meet our legal obligations:</p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-slate-800/30 rounded-xl p-4 sm:p-5 border border-white/10">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="bg-blue-500/20 rounded-lg p-2">
                      <UserCheck size={18} className="text-blue-300" />
                    </div>
                    <h3 className="font-semibold text-blue-200">Personal Identifiers</h3>
                  </div>
                  <p className="text-sm">Name, ID number, passport number, date of birth, and tax identification number.</p>
                </div>
                <div className="bg-slate-800/30 rounded-xl p-4 sm:p-5 border border-white/10">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="bg-blue-500/20 rounded-lg p-2">
                      <Globe size={18} className="text-blue-300" />
                    </div>
                    <h3 className="font-semibold text-blue-200">Contact Information</h3>
                  </div>
                  <p className="text-sm">Physical address, postal address, telephone numbers, and email addresses.</p>
                </div>
                <div className="bg-slate-800/30 rounded-xl p-4 sm:p-5 border border-white/10">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="bg-blue-500/20 rounded-lg p-2">
                      <Database size={18} className="text-blue-300" />
                    </div>
                    <h3 className="font-semibold text-blue-200">Financial Information</h3>
                  </div>
                  <p className="text-sm">Bank account details, transaction history, investment records, credit assessments, and source of funds declarations.</p>
                </div>
                <div className="bg-slate-800/30 rounded-xl p-4 sm:p-5 border border-white/10">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="bg-blue-500/20 rounded-lg p-2">
                      <Server size={18} className="text-blue-300" />
                    </div>
                    <h3 className="font-semibold text-blue-200">Digital Data</h3>
                  </div>
                  <p className="text-sm">IP addresses, browser type, cookies, device identifiers, and website interaction data.</p>
                </div>
                <div className="bg-slate-800/30 rounded-xl p-4 sm:p-5 border border-white/10">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="bg-blue-500/20 rounded-lg p-2">
                      <Shield size={18} className="text-blue-300" />
                    </div>
                    <h3 className="font-semibold text-blue-200">Special Personal Information</h3>
                  </div>
                  <p className="text-sm">Biometric data and health-related information where required for specific services, processed with appropriate safeguards under POPIA.</p>
                </div>
                <div className="bg-slate-800/30 rounded-xl p-4 sm:p-5 border border-white/10">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="bg-blue-500/20 rounded-lg p-2">
                      <Eye size={18} className="text-blue-300" />
                    </div>
                    <h3 className="font-semibold text-blue-200">Third-Party Sources</h3>
                  </div>
                  <p className="text-sm">We may collect data from partners, service providers, professional representatives, and regulatory authorities under lawful compliance.</p>
                </div>
              </div>

              <div className="bg-yellow-900/20 rounded-xl p-4 border border-yellow-500/20 mt-4">
                <p className="text-sm text-yellow-200">
                  <strong>Children's Data:</strong> We do not knowingly collect personal information from children under the age of 18 without verifiable parental or guardian consent, in accordance with POPIA.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-blue-300 mb-4">2. How We Use Your Data</h2>
              <p className="mb-4">Your personal information is used for the following purposes:</p>

              <div className="space-y-3">
                {[
                  { title: "Service Delivery", desc: "To manage your investment accounts, process transactions, and deliver the financial services you have requested." },
                  { title: "Legal & Regulatory Compliance", desc: "To meet our obligations under POPIA, FICA, the Financial Advisory and Intermediary Services Act, and other applicable South African legislation." },
                  { title: "Fraud Prevention & Security", desc: "To detect, prevent, and investigate fraudulent or unauthorised activities and to protect our clients and business." },
                  { title: "Marketing & Communication", desc: "To send you market commentary, newsletters, and investment updates where you have provided your explicit consent." },
                  { title: "Security Monitoring", desc: "To monitor and maintain the security of our systems, networks, and digital platforms." }
                ].map((item, index) => (
                  <div key={index} className="bg-slate-800/20 rounded-lg p-4 border border-white/5">
                    <div className="flex items-start space-x-3">
                      <div className="bg-blue-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-sm">{item.title}</h4>
                        <p className="text-sm text-gray-300 mt-1">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-slate-800/30 rounded-xl p-4 sm:p-5 border border-white/10 mt-4">
                <h4 className="font-semibold text-blue-200 mb-2">Lawful Basis for Processing</h4>
                <p className="text-sm">We rely on the following lawful grounds: your consent, the performance of a contract, compliance with a legal obligation, and the protection of our legitimate interests (such as fraud prevention and business administration).</p>
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-blue-300 mb-4">3. Data Sharing</h2>
              <p>
                We may share your personal information with regulatory authorities (such as the FSCA and the Information Regulator), contracted service providers, partner financial institutions, auditors, and legal advisors where required to fulfil our obligations. All third parties with whom we share data are bound by confidentiality agreements and are required to comply with POPIA.
              </p>
              <p className="mt-3">
                We will never sell your personal information to third parties for marketing purposes.
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-blue-300 mb-4">4. Data Retention</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="bg-slate-800/30 rounded-xl p-4 border border-white/10 text-center">
                  <div className="text-2xl font-bold text-blue-300 mb-2">7 Years</div>
                  <h4 className="font-semibold text-white text-sm mb-1">Personal Identifiers</h4>
                  <p className="text-xs text-gray-400">Retained up to 7 years after account closure</p>
                </div>
                <div className="bg-slate-800/30 rounded-xl p-4 border border-white/10 text-center">
                  <div className="text-2xl font-bold text-blue-300 mb-2">7 Years</div>
                  <h4 className="font-semibold text-white text-sm mb-1">Financial Records</h4>
                  <p className="text-xs text-gray-400">As required by regulatory compliance</p>
                </div>
                <div className="bg-slate-800/30 rounded-xl p-4 border border-white/10 text-center">
                  <div className="text-2xl font-bold text-blue-300 mb-2">As Needed</div>
                  <h4 className="font-semibold text-white text-sm mb-1">Special Information</h4>
                  <p className="text-xs text-gray-400">Retained only as long as necessary for purpose</p>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-blue-300 mb-4">5. Your Rights</h2>
              <p className="mb-4">Under POPIA, you have the following rights in relation to your personal information:</p>

              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Right to access your personal information",
                  "Right to request correction of inaccurate data",
                  "Right to request deletion of your data",
                  "Right to object to the processing of your data",
                  "Right to be informed about data collection",
                  "Right to withdraw consent at any time",
                  "Right to lodge a complaint with the Information Regulator",
                  "Right not to be subject to automated decision-making"
                ].map((right, index) => (
                  <div key={index} className="flex items-center space-x-2 bg-slate-800/20 rounded-lg p-3 border border-white/5">
                    <div className="w-2 h-2 rounded-full bg-blue-400 flex-shrink-0"></div>
                    <span className="text-sm">{right}</span>
                  </div>
                ))}
              </div>

              <p className="mt-4 text-sm">
                To exercise any of these rights, please contact our Information Officer at <a href="mailto:info@rudiarius.co.za" className="text-blue-300 hover:text-blue-200 transition-colors">info@rudiarius.co.za</a>. We will respond to your request within a reasonable time, not exceeding 30 days.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-blue-300 mb-4">6. Security Measures</h2>
              <p className="mb-4">We implement robust technical and organisational measures to safeguard your personal information:</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { icon: Lock, label: "Encryption" },
                  { icon: Shield, label: "Access Controls" },
                  { icon: Eye, label: "Regular Audits" },
                  { icon: Server, label: "Penetration Testing" },
                  { icon: Bell, label: "24/7 Monitoring" },
                  { icon: Database, label: "Secure Backups" }
                ].map((measure, index) => (
                  <div key={index} className="bg-slate-800/30 rounded-lg p-3 border border-white/10 text-center">
                    <measure.icon size={20} className="text-blue-300 mx-auto mb-2" />
                    <span className="text-xs text-gray-300">{measure.label}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-blue-300 mb-4">7. Cookies and Tracking</h2>
              <p>
                Our website uses cookies and similar tracking technologies for secure authentication, analytics, and to enhance your browsing experience. You can manage your cookie preferences through your browser settings. Please note that disabling certain cookies may affect the functionality of our website.
              </p>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-blue-300 mb-4">8. International Data Transfers</h2>
              <p>
                Where it is necessary to transfer your personal information outside of South Africa, we ensure that adequate safeguards are in place in accordance with Section 72 of POPIA. Such transfers will only occur to jurisdictions with comparable data protection laws, or subject to binding agreements that ensure the protection of your rights.
              </p>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-blue-300 mb-4">9. Updates to this Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or operational needs. The most current version will always be available on our website. We encourage you to review this policy periodically.
              </p>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-blue-300 mb-4">10. Contact Us</h2>
              <div className="bg-slate-800/50 rounded-xl p-5 sm:p-6 border border-white/10">
                <p className="mb-4">For any questions, concerns, or requests regarding your personal information, please contact our Information Officer:</p>
                <div className="space-y-2">
                  <p><strong className="text-white">Rudiarius Capital Management (Pty) Ltd</strong></p>
                  <p>Level 2, Bowman Building</p>
                  <p>11 Alice Lane</p>
                  <p>Sandton, Johannesburg 2196</p>
                  <p>South Africa</p>
                  <p className="mt-3">Tel: <a href="tel:+27100176996" className="text-blue-300 hover:text-blue-200 transition-colors">+27 10 017 6996</a></p>
                  <p>Email: <a href="mailto:info@rudiarius.co.za" className="text-blue-300 hover:text-blue-200 transition-colors">info@rudiarius.co.za</a></p>
                  <p className="mt-3 text-sm text-gray-400">FSP License: 45286 | Authorised Financial Services Provider</p>
                </div>
              </div>
            </section>

            <div className="bg-blue-900/30 rounded-xl p-5 sm:p-6 border border-blue-500/30 mt-8">
              <p className="text-sm text-blue-200">
                <strong>Last Updated:</strong> March 2026
              </p>
              <p className="text-sm text-blue-200 mt-2">
                This Privacy Policy is reviewed and updated regularly to ensure it reflects our current practices and commitments to data protection.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
