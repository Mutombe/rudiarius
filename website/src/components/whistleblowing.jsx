import React from 'react';
import { motion } from 'framer-motion';
import { Shield, AlertCircle, Eye, Lock, FileText, Phone, Mail, UserCheck } from 'lucide-react';

const WhistleblowingPolicy = () => {
  const reportingChannels = [
    { title: "Department Head", description: "Report to relevant department head unless they are subject of concern", icon: UserCheck },
    { title: "Managing Director", description: "If senior management is subject of concern, report to CEO", icon: Shield },
    { title: "Anonymous Tip-off", description: "Anonymous reporting facility available on website", icon: Lock },
    { title: "Audit Committee", description: "Anonymous reports go directly to Chair of Audit and Risk Committee", icon: Eye }
  ];

  const protectedConcerns = [
    "Crime and criminal activity",
    "Failure to comply with legal duties",
    "Negligence and breach of contract",
    "Breach of administrative law",
    "Miscarriage of justice",
    "Danger to health and safety",
    "Damage to the environment",
    "Discrimination",
    "Deliberate cover-up of any of the above"
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
          <h1 className="gellix-font text-4xl md:text-5xl font-bold text-white mb-8">Whistleblowing Policy</h1>
          
          <div className="gellix-font text-gray-200 space-y-6 leading-relaxed">
            <div className="bg-green-900/30 rounded-xl p-6 border border-green-500/30 mb-8">
              <div className="flex items-center space-x-3 mb-3">
                <Shield className="text-green-300" size={24} />
                <h2 className="text-xl font-semibold text-green-200">Our Commitment</h2>
              </div>
              <p className="text-green-200">
                Rudiarius Capital Management is committed to the highest standards of transparency and accountability. We expect all employees, clients, and stakeholders who have serious concerns about our business practices to come forward and voice these concerns.
              </p>
            </div>

            <section>
              <h2 className="text-2xl font-bold text-blue-300 mb-4">Introduction and Purpose</h2>
              <p className="mb-4">
                This policy provides the internal rules applicable to those who wish to report any form of impropriety that may have occurred within Rudiarius Capital Management. The impropriety may include concerns about past, present, and future activities involving:
              </p>
              
              <div className="grid md:grid-cols-3 gap-4">
                {protectedConcerns.map((concern, index) => (
                  <div key={index} className="bg-slate-800/30 rounded-lg p-4 border border-white/10">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-2 h-2 bg-red-400 rounded-full flex-shrink-0"></div>
                      <p className="text-sm font-medium text-white">{concern}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-blue-900/30 rounded-xl p-6 border border-blue-500/30">
                <p className="text-blue-200 text-sm">
                  <strong>Legal Framework:</strong> The provisions of the Protected Disclosures Act No. 26 of 2000 remain authoritative in case of any conflict between the provisions of this policy and those contained in the Act.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-300 mb-4">Scope and Definitions</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-800/30 rounded-xl p-6 border border-white/10">
                  <h3 className="font-semibold text-blue-200 mb-3">Who is Covered</h3>
                  <p className="text-sm text-gray-300 mb-3">
                    This policy is applicable to all employees of Rudiarius Capital Management.
                  </p>
                  <div className="bg-slate-700/30 rounded-lg p-3">
                    <p className="text-xs text-gray-300">
                      <strong>Employee</strong> means full-time and part-time employees, whether temporary or permanent, and includes directors.
                    </p>
                  </div>
                </div>
                
                <div className="bg-slate-800/30 rounded-xl p-6 border border-white/10">
                  <h3 className="font-semibold text-blue-200 mb-3">Whistleblower Definition</h3>
                  <div className="bg-slate-700/30 rounded-lg p-3">
                    <p className="text-xs text-gray-300">
                      <strong>Whistleblower</strong> means a person who wishes to report any person or organisation suspected of engaging in an unlawful or immoral activity.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-300 mb-4">Standards and Protection</h2>
              
              <div className="space-y-4">
                <div className="bg-green-900/30 rounded-xl p-6 border border-green-500/30">
                  <div className="flex items-start space-x-3">
                    <Shield className="text-green-300 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h3 className="font-semibold text-green-200 mb-2">Protection from Retaliation</h3>
                      <p className="text-green-200 text-sm">
                        Rudiarius will not tolerate harassment or victimisation of any employee who blows the whistle and will take action to protect employees when they raise a concern in good faith.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-yellow-900/30 rounded-xl p-6 border border-yellow-500/30">
                  <div className="flex items-start space-x-3">
                    <Lock className="text-yellow-300 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h3 className="font-semibold text-yellow-200 mb-2">Confidentiality</h3>
                      <p className="text-yellow-200 text-sm">
                        We will take all necessary steps to protect an employee's identity when they raise a qualifying disclosure in good faith. However, the investigation process may reveal the source of the information and a statement by the employee may be required as part of the evidence.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-300 mb-6">Whistleblowing Procedure</h2>
              
              <div className="mb-8 bg-slate-800/30 rounded-xl p-6 border border-white/10">
                <h3 className="font-semibold text-blue-200 mb-3">Written Reporting Requirement</h3>
                <p className="text-sm text-gray-300">
                  All concerns must be raised in writing. Please provide background and history of the concern, including names, dates, and places where possible, as well as the reason(s) why you are particularly concerned about the situation. Detailed and comprehensive information is required, especially when making an anonymous tip-off.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {reportingChannels.map((channel, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-slate-800/40 to-slate-700/40 rounded-xl p-6 border border-white/10"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-500/20 rounded-full p-3 flex-shrink-0">
                        <channel.icon size={24} className="text-blue-300" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-2">{channel.title}</h3>
                        <p className="text-sm text-gray-300">{channel.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 bg-blue-900/30 rounded-xl p-6 border border-blue-500/30">
                <h3 className="font-semibold text-blue-200 mb-3">Important Notes:</h3>
                <ul className="space-y-2 text-sm list-disc list-inside text-gray-300">
                  <li>The whistleblowing procedure is in addition to Rudiarius's Grievance policy</li>
                  <li>Should not be used to report personal grievances or minor issues</li>
                  <li>If a member of senior management is the subject of concern, or you believe it prudent to circumvent senior management, concerns may be submitted to the Chief Executive Officer</li>
                  <li>Anonymous reporting facility available on the Rudiarius website for employees and external stakeholders</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-300 mb-4">Investigation Process</h2>
              
              <div className="space-y-4">
                <div className="bg-slate-800/20 rounded-lg p-4 border border-white/5">
                  <div className="flex items-start space-x-3">
                    <div className="bg-purple-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">1</div>
                    <div>
                      <h4 className="font-semibold text-white text-sm mb-1">Initial Assessment</h4>
                      <p className="text-sm text-gray-300">The Audit and Risk Committee will make initial enquiries to decide whether an investigation is appropriate and what form it should take</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-800/20 rounded-lg p-4 border border-white/5">
                  <div className="flex items-start space-x-3">
                    <div className="bg-purple-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">2</div>
                    <div>
                      <h4 className="font-semibold text-white text-sm mb-1">Acknowledgment</h4>
                      <p className="text-sm text-gray-300">The Chair of the Audit and Risk Committee will confirm receipt of the concern in writing (if identity is known), indicating how it will be dealt with and providing time estimates</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-800/20 rounded-lg p-4 border border-white/5">
                  <div className="flex items-start space-x-3">
                    <div className="bg-purple-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">3</div>
                    <div>
                      <h4 className="font-semibold text-white text-sm mb-1">Confidential Investigation</h4>
                      <p className="text-sm text-gray-300">Investigations must be handled confidentially and not disclosed to anyone other than those with legitimate right to such information</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-800/20 rounded-lg p-4 border border-white/5">
                  <div className="flex items-start space-x-3">
                    <div className="bg-purple-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">4</div>
                    <div>
                      <h4 className="font-semibold text-white text-sm mb-1">Outcome Communication</h4>
                      <p className="text-sm text-gray-300">The whistleblower has a right to be informed of the investigation outcome (if identity is known). If a crime is discovered, results must be reported to the South African Police Service</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-300 mb-4">Non-Adherence</h2>
              <div className="bg-red-900/30 rounded-xl p-6 border border-red-500/30">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="text-red-300 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-red-200 mb-2">False or Malicious Allegations</h3>
                    <p className="text-red-200 text-sm">
                      Employees and other stakeholders should not make allegations which are false or made with malicious intent. Where such false or malicious allegations are discovered, the employee who made the allegations will be subjected to disciplinary action, or other appropriate action in the case of external stakeholders or third parties.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-300 mb-4">Implementation and Governance</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-800/30 rounded-xl p-6 border border-white/10">
                  <h3 className="font-semibold text-blue-200 mb-3">Responsibility</h3>
                  <ul className="space-y-2 text-sm list-disc list-inside text-gray-300">
                    <li>The Rudiarius Audit and Risk Committee has overall responsibility for this policy</li>
                    <li>Chair oversees that all disclosures are treated with utmost confidentiality</li>
                    <li>Compliance ensures policy is published and awareness is created</li>
                  </ul>
                </div>
                
                <div className="bg-slate-800/30 rounded-xl p-6 border border-white/10">
                  <h3 className="font-semibold text-blue-200 mb-3">Training</h3>
                  <ul className="space-y-2 text-sm list-disc list-inside text-gray-300">
                    <li>Whistleblowing awareness forms part of employee induction training</li>
                    <li>Regular briefings provided to all employees</li>
                    <li>Policy reviewed annually by Chief Compliance Officer</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-300 mb-4">Guidance and Support</h2>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-white/10">
                <p className="mb-4">
                  Employees may seek advice and guidance on how matters of concern may be pursued from the Group Chief Compliance Officer, who has a duty to keep confidential any correspondence or discussions in this regard.
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <Mail className="text-blue-300" size={16} />
                    <span>Email: <a href="mailto:fungai@rudiarius.co.za" className="text-blue-300 hover:text-blue-200 transition-colors">fungai@rudiarius.co.za</a></span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="text-blue-300" size={16} />
                    <span>Phone: +27 10 017 6996</span>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-white/10">
                  <p className="text-sm"><strong>Rudiarius Capital Management (Pty) Ltd</strong></p>
                  <p className="text-sm">FSP License: 45286</p>
                  <p className="text-sm">Sandton, Johannesburg, South Africa</p>
                </div>
              </div>
            </section>

            <div className="bg-green-900/30 rounded-xl p-6 border border-green-500/30 mt-8">
              <p className="text-sm text-green-200">
                <strong>Last Updated:</strong> September 2025
              </p>
              <p className="text-sm text-green-200 mt-2">
                This policy is reviewed annually and updated as necessary. Any changes are submitted to the Management Board and Audit and Risk Committee for consideration and approval.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhistleblowingPolicy;