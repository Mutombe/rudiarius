import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Shield, FileText, Eye, Users, Database, AlertCircle, Clock } from 'lucide-react';

const ClientPrivacyPolicy = () => {
  const dataTypes = [
    { title: "Investment Profile", description: "Risk tolerance, investment objectives, financial goals", icon: FileText },
    { title: "Financial Information", description: "Assets, income, bank details, transaction history", icon: Database },
    { title: "Identity Verification", description: "KYC documents, proof of identity, address verification", icon: Shield },
    { title: "Communication Records", description: "Meeting notes, correspondence, advice records", icon: Users }
  ];

  const protectionMeasures = [
    { title: "Encryption", description: "All client data encrypted in transit and at rest", level: "High" },
    { title: "Access Controls", description: "Role-based access with multi-factor authentication", level: "High" },
    { title: "Regular Audits", description: "Quarterly security assessments and compliance reviews", level: "Medium" },
    { title: "Staff Training", description: "Ongoing privacy and security awareness training", level: "Medium" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 p-8 md:p-12"
        >
          <h1 className="gellix-font text-4xl md:text-5xl font-bold text-white mb-8">Client Privacy Policy</h1>
          
          <div className="gellix-font text-gray-200 space-y-6 leading-relaxed">
            <div className="bg-blue-900/30 rounded-xl p-6 border border-blue-500/30 mb-8">
              <div className="flex items-center space-x-3 mb-3">
                <Lock className="text-blue-300" size={24} />
                <h2 className="text-xl font-semibold text-blue-200">Client Data Protection Commitment</h2>
              </div>
              <p className="text-blue-200">
                As your trusted financial services provider, Rudiarius Capital Management is committed to protecting your personal and financial information with the highest standards of privacy and security. This policy explains how we collect, use, and safeguard your data in our client relationship.
              </p>
            </div>

            <section>
              <h2 className="text-2xl font-bold text-blue-300 mb-4">Our Privacy Principles</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-800/30 rounded-xl p-6 border border-white/10">
                  <h3 className="font-semibold text-blue-200 mb-3">Purpose Limitation</h3>
                  <p className="text-sm text-gray-300">
                    We only collect and use client data for specific, legitimate purposes related to providing investment management services and meeting regulatory requirements.
                  </p>
                </div>
                <div className="bg-slate-800/30 rounded-xl p-6 border border-white/10">
                  <h3 className="font-semibold text-blue-200 mb-3">Data Minimization</h3>
                  <p className="text-sm text-gray-300">
                    We collect only the minimum data necessary to effectively manage your investments and comply with legal obligations.
                  </p>
                </div>
                <div className="bg-slate-800/30 rounded-xl p-6 border border-white/10">
                  <h3 className="font-semibold text-blue-200 mb-3">Transparency</h3>
                  <p className="text-sm text-gray-300">
                    We provide clear information about what data we collect, why we need it, and how we use it in our client relationships.
                  </p>
                </div>
                <div className="bg-slate-800/30 rounded-xl p-6 border border-white/10">
                  <h3 className="font-semibold text-blue-200 mb-3">Security First</h3>
                  <p className="text-sm text-gray-300">
                    We implement robust technical and organizational measures to protect client data from unauthorized access or disclosure.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-300 mb-4">Client Data We Collect</h2>
              <p className="mb-6">
                To provide investment management services and meet regulatory requirements, we collect various types of client information:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                {dataTypes.map((type, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-slate-800/40 to-slate-700/40 rounded-xl p-6 border border-white/10"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-green-500/20 rounded-full p-3 flex-shrink-0">
                        <type.icon size={24} className="text-green-300" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-2">{type.title}</h3>
                        <p className="text-sm text-gray-300">{type.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 bg-yellow-900/30 rounded-xl p-6 border border-yellow-500/30">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="text-yellow-300 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-yellow-200 mb-2">Regulatory Requirements</h3>
                    <p className="text-yellow-200 text-sm">
                      As a licensed Financial Services Provider (FSP 45286), we are required by law to collect certain information for Know Your Customer (KYC), Anti-Money Laundering (AML), and record-keeping purposes.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-300 mb-4">How We Use Your Data</h2>
              
              <div className="space-y-4">
                <div className="bg-slate-800/20 rounded-lg p-4 border border-white/5">
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">1</div>
                    <div>
                      <h4 className="font-semibold text-white text-sm mb-1">Investment Management</h4>
                      <p className="text-sm text-gray-300">Analyzing your financial profile to provide suitable investment advice and portfolio management services</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-800/20 rounded-lg p-4 border border-white/5">
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">2</div>
                    <div>
                      <h4 className="font-semibold text-white text-sm mb-1">Risk Assessment</h4>
                      <p className="text-sm text-gray-300">Evaluating your risk tolerance and investment capacity to ensure suitable recommendations</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-800/20 rounded-lg p-4 border border-white/5">
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">3</div>
                    <div>
                      <h4 className="font-semibold text-white text-sm mb-1">Regulatory Compliance</h4>
                      <p className="text-sm text-gray-300">Meeting FAIS Act requirements, reporting obligations, and maintaining required records</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-800/20 rounded-lg p-4 border border-white/5">
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">4</div>
                    <div>
                      <h4 className="font-semibold text-white text-sm mb-1">Client Communication</h4>
                      <p className="text-sm text-gray-300">Providing regular updates, reports, and maintaining effective communication about your investments</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-300 mb-6">Data Protection Measures</h2>
              
              <div className="space-y-6">
                {protectionMeasures.map((measure, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-r from-slate-800/40 to-slate-700/40 rounded-xl p-6 border border-white/10"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-white">{measure.title}</h3>
                      <span className={`px-2 py-1 text-xs font-bold rounded ${
                        measure.level === 'High' ? 'bg-green-600 text-white' : 'bg-yellow-600 text-white'
                      }`}>
                        {measure.level} Priority
                      </span>
                    </div>
                    <p className="text-sm text-gray-300">{measure.description}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-300 mb-4">Data Sharing and Disclosure</h2>
              
              <div className="bg-slate-800/30 rounded-xl p-6 border border-white/10">
                <h3 className="font-semibold text-blue-200 mb-4">We may share your information with:</h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-slate-700/30 rounded-lg p-4">
                    <h4 className="font-semibold text-green-200 text-sm mb-2">Permitted Disclosures</h4>
                    <ul className="text-xs space-y-1 text-gray-300 list-disc list-inside">
                      <li>Professional service providers (lawyers, auditors)</li>
                      <li>Regulatory authorities when required</li>
                      <li>Service providers under strict confidentiality</li>
                      <li>With your explicit consent</li>
                    </ul>
                  </div>
                  
                  <div className="bg-slate-700/30 rounded-lg p-4">
                    <h4 className="font-semibold text-red-200 text-sm mb-2">Never Shared With</h4>
                    <ul className="text-xs space-y-1 text-gray-300 list-disc list-inside">
                      <li>Marketing companies</li>
                      <li>Unaffiliated third parties</li>
                      <li>Social media platforms</li>
                      <li>Other clients or unauthorized parties</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-300 mb-4">Data Retention</h2>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-green-900/30 rounded-xl p-6 border border-green-500/30 text-center">
                  <Clock className="mx-auto mb-3 text-green-300" size={32} />
                  <div className="text-green-200 font-semibold mb-2">Active Clients</div>
                  <p className="text-sm text-gray-300">Data retained for duration of client relationship plus regulatory requirements</p>
                </div>
                
                <div className="bg-yellow-900/30 rounded-xl p-6 border border-yellow-500/30 text-center">
                  <Clock className="mx-auto mb-3 text-yellow-300" size={32} />
                  <div className="text-yellow-200 font-semibold mb-2">Former Clients</div>
                  <p className="text-sm text-gray-300">Records kept for minimum 5 years after relationship ends as required by FAIS</p>
                </div>
                
                <div className="bg-blue-900/30 rounded-xl p-6 border border-blue-500/30 text-center">
                  <Clock className="mx-auto mb-3 text-blue-300" size={32} />
                  <div className="text-blue-200 font-semibold mb-2">Secure Disposal</div>
                  <p className="text-sm text-gray-300">Data securely destroyed when no longer required for business or legal purposes</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-300 mb-4">Your Rights</h2>
              
              <div className="bg-slate-800/30 rounded-xl p-6 border border-white/10">
                <p className="mb-4">As our client, you have the following rights regarding your personal data:</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Eye className="text-blue-300" size={16} />
                      <span className="text-sm"><strong>Access:</strong> Request copies of your personal data</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <FileText className="text-blue-300" size={16} />
                      <span className="text-sm"><strong>Correction:</strong> Update inaccurate information</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Shield className="text-blue-300" size={16} />
                      <span className="text-sm"><strong>Restriction:</strong> Limit processing in certain circumstances</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Users className="text-blue-300" size={16} />
                      <span className="text-sm"><strong>Portability:</strong> Receive data in portable format</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <AlertCircle className="text-blue-300" size={16} />
                      <span className="text-sm"><strong>Object:</strong> Object to certain types of processing</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Lock className="text-blue-300" size={16} />
                      <span className="text-sm"><strong>Consent:</strong> Withdraw consent where applicable</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-900/30 rounded-lg border border-blue-500/30">
                  <p className="text-blue-200 text-sm">
                    <strong>Important:</strong> Some data processing is necessary for us to fulfill our contractual and regulatory obligations. We will explain any limitations when you make a request.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-300 mb-4">Data Breach Response</h2>
              <div className="bg-red-900/30 rounded-xl p-6 border border-red-500/30">
                <p className="text-red-200 mb-4">
                  In the unlikely event of a data breach affecting your personal information, we will:
                </p>
                <ul className="space-y-2 text-sm list-disc list-inside text-red-200">
                  <li>Assess the risk and take immediate steps to contain the breach</li>
                  <li>Notify you within 72 hours if there is a high risk to your rights and freedoms</li>
                  <li>Provide clear information about what happened and what we're doing about it</li>
                  <li>Offer appropriate support and guidance to protect yourself</li>
                  <li>Report to relevant authorities as required by law</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-300 mb-4">Contact Us About Your Privacy</h2>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-white/10">
                <p className="mb-4">For any privacy-related questions or to exercise your rights:</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-blue-200 mb-2">Privacy Officer</h4>
                    <div className="space-y-2">
                      <p className="text-sm">Email: <a href="mailto:privacy@rudiarius.co.za" className="text-blue-300 hover:text-blue-200 transition-colors">privacy@rudiarius.co.za</a></p>
                      <p className="text-sm">Phone: +27 10 017 6996</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-blue-200 mb-2">General Inquiries</h4>
                    <div className="space-y-2">
                      <p className="text-sm">Email: <a href="mailto:fungai@rudiarius.co.za" className="text-blue-300 hover:text-blue-200 transition-colors">fungai@rudiarius.co.za</a></p>
                      <p className="text-sm">Address: Sandton, Johannesburg</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-white/10">
                  <p className="text-sm"><strong>Rudiarius Capital Management (Pty) Ltd</strong></p>
                  <p className="text-sm">FSP License: 45286 | Authorized Financial Services Provider</p>
                </div>
              </div>
            </section>

            <div className="bg-blue-900/30 rounded-xl p-6 border border-blue-500/30 mt-8">
              <p className="text-sm text-blue-200">
                <strong>Last Updated:</strong> September 2025
              </p>
              <p className="text-sm text-blue-200 mt-2">
                This Client Privacy Policy is reviewed regularly to ensure it reflects our current practices and meets evolving privacy requirements. We will notify clients of any material changes.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ClientPrivacyPolicy;