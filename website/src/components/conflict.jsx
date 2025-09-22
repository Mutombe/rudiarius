import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, DollarSign, Eye, FileText, Shield, Users, Scale, Gift } from 'lucide-react';

const ConflictOfInterestPolicy = () => {
  const conflictTypes = [
    { title: "Financial Interest", description: "Any actual or potential financial benefit", icon: DollarSign },
    { title: "Personal Relationships", description: "Family or personal connections affecting decisions", icon: Users },
    { title: "Business Interests", description: "Outside business activities or investments", icon: FileText },
    { title: "Third Party Benefits", description: "Gifts, entertainment, or other valuable consideration", icon: Gift }
  ];

  const thresholds = [
    { amount: "Under R1,000", status: "Immaterial Financial Interest", color: "green", description: "Must be recorded in Gifts Register" },
    { amount: "R1,000 - R10,000", status: "Requires MD Approval", color: "yellow", description: "Written consent from Managing Director required" },
    { amount: "Over R10,000", status: "Material Conflict", color: "red", description: "Decision by MD in consultation with CEO" }
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
          <h1 className="gellix-font text-4xl md:text-5xl font-bold text-white mb-8">Conflict of Interest Policy</h1>
          
          <div className="gellix-font text-gray-200 space-y-6 leading-relaxed">
            <div className="bg-red-900/30 rounded-xl p-6 border border-red-500/30 mb-8">
              <div className="flex items-center space-x-3 mb-3">
                <Scale className="text-red-300" size={24} />
                <h2 className="text-xl font-semibold text-red-200">Policy Statement</h2>
              </div>
              <p className="text-red-200">
                Rudiarius Capital Management is committed to avoiding, and where this is not possible, mitigating any conflict of interest that may arise between the Company and its clients when rendering financial services. We must disclose any personal interest and take reasonable steps to ensure fair treatment of clients.
              </p>
            </div>

            <section>
              <h2 className="text-2xl font-bold text-blue-300 mb-4">Scope and Purpose</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-800/30 rounded-xl p-6 border border-white/10">
                  <h3 className="font-semibold text-blue-200 mb-3">Who is Covered</h3>
                  <p className="text-sm text-gray-300">
                    This policy applies to Rudiarius Capital Management, all employees (including analysts), and individuals authorized to render advice and/or intermediary services as defined under FAIS.
                  </p>
                </div>
                <div className="bg-slate-800/30 rounded-xl p-6 border border-white/10">
                  <h3 className="font-semibold text-blue-200 mb-3">Legal Framework</h3>
                  <p className="text-sm text-gray-300">
                    Required under the General Code of Conduct for Authorized Financial Services Providers and Representatives issued under FAIS Act No. 37 of 2002.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-300 mb-4">What is a Conflict of Interest?</h2>
              <p className="mb-4">
                A conflict of interest is any situation in which a provider or representative has an actual or potential interest that may:
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-slate-800/30 rounded-lg p-4 border border-white/10 text-center">
                  <AlertTriangle className="mx-auto mb-2 text-yellow-300" size={24} />
                  <div className="text-yellow-200 font-semibold text-sm mb-1">Influence Objectivity</div>
                  <p className="text-xs text-gray-300">Affect objective fulfillment of client obligations</p>
                </div>
                <div className="bg-slate-800/30 rounded-lg p-4 border border-white/10 text-center">
                  <Eye className="mx-auto mb-2 text-yellow-300" size={24} />
                  <div className="text-yellow-200 font-semibold text-sm mb-1">Bias Advice</div>
                  <p className="text-xs text-gray-300">Influence offering of unbiased and fair advice</p>
                </div>
                <div className="bg-slate-800/30 rounded-lg p-4 border border-white/10 text-center">
                  <Shield className="mx-auto mb-2 text-yellow-300" size={24} />
                  <div className="text-yellow-200 font-semibold text-sm mb-1">Best Interests</div>
                  <p className="text-xs text-gray-300">Prevent acting in client's best interests</p>
                </div>
              </div>

              <div className="bg-slate-800/30 rounded-xl p-6 border border-white/10">
                <h3 className="font-semibold text-blue-200 mb-3">Common Conflict Examples:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {conflictTypes.map((type, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-slate-700/30 rounded-lg">
                      <type.icon className="text-blue-300 flex-shrink-0 mt-1" size={16} />
                      <div>
                        <div className="font-semibold text-white text-sm">{type.title}</div>
                        <p className="text-xs text-gray-300">{type.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-300 mb-4">Financial Interest Thresholds</h2>
              
              <div className="space-y-4">
                {thresholds.map((threshold, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`bg-${threshold.color}-900/30 rounded-xl p-6 border border-${threshold.color}-500/30`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className={`text-${threshold.color}-200 font-semibold text-lg`}>{threshold.amount}</div>
                      <div className={`bg-${threshold.color}-600 text-white text-xs font-bold px-3 py-1 rounded-full`}>
                        {threshold.status}
                      </div>
                    </div>
                    <p className={`text-${threshold.color}-200 text-sm`}>{threshold.description}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-300 mb-4">Identification Mechanisms</h2>
              <div className="bg-slate-800/30 rounded-xl p-6 border border-white/10">
                <h3 className="font-semibold text-blue-200 mb-4">"Treating Clients Fairly" Principle</h3>
                <p className="mb-4 text-sm">Representatives should consider the following questions when evaluating potential conflicts:</p>
                
                <div className="space-y-3">
                  <div className="flex items-start space-x-3 p-3 bg-slate-700/30 rounded-lg">
                    <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0 mt-2"></div>
                    <p className="text-sm">Are we providing financial services in a manner that unfairly puts our interests ahead of clients?</p>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-slate-700/30 rounded-lg">
                    <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0 mt-2"></div>
                    <p className="text-sm">Are we unfairly putting the interests of one client ahead of other clients?</p>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-slate-700/30 rounded-lg">
                    <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0 mt-2"></div>
                    <p className="text-sm">Are we using client knowledge to advance our own interests without sufficient disclosure?</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-300 mb-4">Management and Reporting</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-800/30 rounded-xl p-6 border border-white/10">
                  <h3 className="font-semibold text-blue-200 mb-3">Reporting Requirements</h3>
                  <ul className="space-y-2 text-sm list-disc list-inside text-gray-300">
                    <li>Report all financial interests to <a href="mailto:gifts@efgroup.co.za" className="text-blue-300 hover:text-blue-200 transition-colors">gifts@efgroup.co.za</a></li>
                    <li>Submit within one week of occurrence</li>
                    <li>Include supporting documentation</li>
                    <li>Record in appropriate register</li>
                  </ul>
                </div>
                
                <div className="bg-slate-800/30 rounded-xl p-6 border border-white/10">
                  <h3 className="font-semibold text-blue-200 mb-3">Register Maintenance</h3>
                  <ul className="space-y-2 text-sm list-disc list-inside text-gray-300">
                    <li>Conflict of interest register maintained</li>
                    <li>Accessible by key employees</li>
                    <li>Audited by external Compliance Officer</li>
                    <li>Quarterly reporting to Audit Committee</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-300 mb-4">Avoidance and Mitigation Measures</h2>
              
              <div className="space-y-4">
                <div className="bg-slate-800/20 rounded-lg p-4 border border-white/5">
                  <div className="flex items-start space-x-3">
                    <div className="bg-green-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">1</div>
                    <div>
                      <h4 className="font-semibold text-white text-sm mb-1">Avoidance</h4>
                      <p className="text-sm text-gray-300">If possible, avoid situations that create conflicts (e.g., allocate different representative)</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-800/20 rounded-lg p-4 border border-white/5">
                  <div className="flex items-start space-x-3">
                    <div className="bg-yellow-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">2</div>
                    <div>
                      <h4 className="font-semibold text-white text-sm mb-1">Disclosure</h4>
                      <p className="text-sm text-gray-300">If unavoidable, disclose conflict to affected clients as prescribed by MD/CEO</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-800/20 rounded-lg p-4 border border-white/5">
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">3</div>
                    <div>
                      <h4 className="font-semibold text-white text-sm mb-1">Documentation</h4>
                      <p className="text-sm text-gray-300">Written communication of decisions within 3 business days to representatives</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-300 mb-4">Associates and Related Entities</h2>
              <div className="bg-purple-900/30 rounded-xl p-6 border border-purple-500/30">
                <p className="mb-4">
                  Conducting business with associates may inherently create conflicts of interest. Efficient Group has a 30% shareholding in Rudiarius, making them an associate entity under Board Notice 58 of 2010.
                </p>
                <p className="text-sm text-purple-200">
                  A list of associates is made available to interested parties together with this policy to ensure transparency in our business relationships.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-300 mb-4">Training and Awareness</h2>
              <div className="bg-slate-800/30 rounded-xl p-6 border border-white/10">
                <ul className="space-y-2 text-sm list-disc list-inside">
                  <li>All staff receive training on this policy</li>
                  <li>Policy copy provided to each staff member and representative</li>
                  <li>Updated versions circulated when changes occur</li>
                  <li>Existing and future clients made aware of policy existence</li>
                  <li>Annual feedback required from representatives and Key Individuals</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-300 mb-4">Consequences</h2>
              <div className="bg-red-900/30 rounded-xl p-6 border border-red-500/30">
                <p>
                  Violation of this Policy by an employee or representative may result in disciplinary action in accordance with the Company's Disciplinary Code as amended from time to time.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-300 mb-4">Contact Information</h2>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-white/10">
                <p className="mb-4">For conflict of interest reporting and inquiries:</p>
                <div className="space-y-2">
                  <p>Email: <a href="mailto:gifts@efgroup.co.za" className="text-blue-300 hover:text-blue-200 transition-colors">gifts@efgroup.co.za</a></p>
                  <p>Phone: +27 10 017 6996</p>
                </div>
                
                <div className="mt-6 pt-4 border-t border-white/10">
                  <p className="text-sm"><strong>Rudiarius Capital Management (Pty) Ltd</strong></p>
                  <p className="text-sm">FSP License: 45286</p>
                  <p className="text-sm">Sandton, Johannesburg, South Africa</p>
                </div>
              </div>
            </section>

            <div className="bg-red-900/30 rounded-xl p-6 border border-red-500/30 mt-8">
              <p className="text-sm text-red-200">
                <strong>Last Updated:</strong> September 2025
              </p>
              <p className="text-sm text-red-200 mt-2">
                This policy is reviewed annually and updated as necessary to ensure compliance with FAIS requirements.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ConflictOfInterestPolicy;