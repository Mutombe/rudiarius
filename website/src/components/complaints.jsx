import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Clock, FileText, Mail, Phone, CheckCircle, Users, Shield } from 'lucide-react';

const ComplaintsPolicy = () => {
  const complaintProcess = [
    { step: 1, title: "Submit Complaint", description: "Send written complaint to complaints@rudiarius.co.za", icon: Mail },
    { step: 2, title: "Acknowledgment", description: "Receipt confirmed within 5 business days", icon: CheckCircle },
    { step: 3, title: "Investigation", description: "Thorough investigation and assessment", icon: FileText },
    { step: 4, title: "Resolution", description: "Final response and resolution provided", icon: Shield }
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
          <h1 className="gellix-font text-4xl md:text-5xl font-bold text-white mb-8">Complaints Policy</h1>
          
          <div className="gellix-font text-gray-200 space-y-6 leading-relaxed">
            <div className="bg-orange-900/30 rounded-xl p-6 border border-orange-500/30 mb-8">
              <div className="flex items-center space-x-3 mb-3">
                <AlertCircle className="text-orange-300" size={24} />
                <h2 className="text-xl font-semibold text-orange-200">Important Notice</h2>
              </div>
              <p className="text-orange-200">
                Rudiarius Capital Management is committed to providing exceptional service. If you have a complaint about our financial services, we have established formal procedures to ensure your concerns are addressed professionally and efficiently.
              </p>
            </div>

            <section>
              <h2 className="text-2xl font-bold text-blue-300 mb-4">Scope</h2>
              <p>
                This policy applies to all complaints lodged against Rudiarius Capital Management (FSP 45286) and our employees relating to financial services provided to clients.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-300 mb-4">Purpose</h2>
              <p className="mb-4">
                The Financial Advisory & Intermediary Services Act 2002 (FAIS) requires all licensed financial service providers to have systems in place for efficient resolution of complaints within specified timeframes.
              </p>
              
              <div className="bg-slate-800/30 rounded-xl p-6 border border-white/10">
                <h3 className="font-semibold text-blue-200 mb-3">Our Complaints Procedure Aims To:</h3>
                <ul className="space-y-2 text-sm list-disc list-inside">
                  <li>Facilitate professional and formal handling of complaints at the appropriate level</li>
                  <li>Allow for speedy handling of all complaints</li>
                  <li>Ensure a full and fair investigation into complaints</li>
                  <li>Provide effective response and appropriate redress</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-300 mb-4">Definition of Complaint</h2>
              <p className="mb-4">
                A complaint refers to a specific complaint relating to a financial service rendered to the client on or after the commencement of FAIS, alleging that a representative of the FSP:
              </p>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-slate-800/30 rounded-lg p-4 border border-white/10">
                  <div className="text-red-300 font-semibold text-sm mb-2">FAIS Contravention</div>
                  <p className="text-xs text-gray-300">Contravened or failed to comply with FAIS provisions, causing financial prejudice or damage</p>
                </div>
                <div className="bg-slate-800/30 rounded-lg p-4 border border-white/10">
                  <div className="text-red-300 font-semibold text-sm mb-2">Negligent Service</div>
                  <p className="text-xs text-gray-300">Knowingly or negligently rendered financial services causing or likely to cause prejudice</p>
                </div>
                <div className="bg-slate-800/30 rounded-lg p-4 border border-white/10">
                  <div className="text-red-300 font-semibold text-sm mb-2">Unfair Treatment</div>
                  <p className="text-xs text-gray-300">Treated the client unfairly in the provision of financial services</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-300 mb-6">Complaints Process</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {complaintProcess.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-slate-800/40 to-slate-700/40 rounded-xl p-6 border border-white/10 text-center"
                  >
                    <div className="bg-blue-500/20 rounded-full p-3 mx-auto mb-4 w-fit">
                      <item.icon size={24} className="text-blue-300" />
                    </div>
                    <div className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded mb-2">
                      Step {item.step}
                    </div>
                    <h3 className="font-semibold text-white mb-2 text-sm">{item.title}</h3>
                    <p className="text-xs text-gray-300">{item.description}</p>
                  </motion.div>
                ))}
              </div>

              <div className="bg-slate-800/30 rounded-xl p-6 border border-white/10">
                <h3 className="font-semibold text-blue-200 mb-4">Detailed Process:</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">a</div>
                    <p>Submit complaint details via email to <a href="mailto:complaints@rudiarius.co.za" className="text-blue-300 hover:text-blue-200 transition-colors">complaints@rudiarius.co.za</a></p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">b</div>
                    <p>Complaint logged in our Complaints Register with date and content details</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">c</div>
                    <p>Written complaints required - compliance manager will request written format if submitted verbally</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">d</div>
                    <p>Receipt acknowledged within 5 days, including contact details of responsible staff</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">e</div>
                    <p>Investigation conducted to determine immediate resolution possibility</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-300 mb-4">Resolution Timeframes</h2>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-green-900/30 rounded-xl p-6 border border-green-500/30 text-center">
                  <Clock className="mx-auto mb-3 text-green-300" size={32} />
                  <div className="text-green-200 font-semibold mb-2">Immediate</div>
                  <p className="text-sm text-gray-300">Complaint resolved immediately if possible</p>
                </div>
                
                <div className="bg-yellow-900/30 rounded-xl p-6 border border-yellow-500/30 text-center">
                  <Clock className="mx-auto mb-3 text-yellow-300" size={32} />
                  <div className="text-yellow-200 font-semibold mb-2">3 Weeks</div>
                  <p className="text-sm text-gray-300">Written acknowledgment if not resolved within 3 weeks</p>
                </div>
                
                <div className="bg-red-900/30 rounded-xl p-6 border border-red-500/30 text-center">
                  <Clock className="mx-auto mb-3 text-red-300" size={32} />
                  <div className="text-red-200 font-semibold mb-2">6 Weeks</div>
                  <p className="text-sm text-gray-300">Final resolution or referral to Financial Ombud</p>
                </div>
              </div>

              <div className="mt-6 bg-blue-900/30 rounded-xl p-6 border border-blue-500/30">
                <h3 className="font-semibold text-blue-200 mb-3">Ombud Referral Rights</h3>
                <p className="text-sm">
                  If we cannot resolve your complaint within 6 weeks, you have the right to refer the matter to the Financial Ombud. You have 6 months from our final notification to exercise this right. We will provide the Ombud's contact details in our communication.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-300 mb-4">Complaints Register</h2>
              <p className="mb-4">
                We maintain a comprehensive complaints register that includes:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-800/30 rounded-lg p-4 border border-white/10">
                  <h4 className="font-semibold text-blue-200 mb-2">Administrative Details</h4>
                  <ul className="text-sm space-y-1 text-gray-300 list-disc list-inside">
                    <li>Date received and captured</li>
                    <li>Complainant information</li>
                    <li>Complaint reference number</li>
                    <li>Responsible person assigned</li>
                  </ul>
                </div>
                
                <div className="bg-slate-800/30 rounded-lg p-4 border border-white/10">
                  <h4 className="font-semibold text-blue-200 mb-2">Resolution Tracking</h4>
                  <ul className="text-sm space-y-1 text-gray-300 list-disc list-inside">
                    <li>Activity updates and movements</li>
                    <li>Outcome of complaint</li>
                    <li>Final communication date</li>
                    <li>Lessons learned</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-300 mb-4">Responsibility</h2>
              <div className="bg-slate-800/30 rounded-xl p-6 border border-white/10">
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start space-x-3">
                    <Users className="text-blue-300 flex-shrink-0 mt-1" size={16} />
                    <span>Complaints are handled by our Key Individuals</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Shield className="text-blue-300 flex-shrink-0 mt-1" size={16} />
                    <span>Compliance manager monitors all complaints for FAIS Act compliance</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <FileText className="text-blue-300 flex-shrink-0 mt-1" size={16} />
                    <span>Compliance manager maintains complaints register for compliance audits</span>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-300 mb-4">Contact Information</h2>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-white/10">
                <p className="mb-4"><strong>To lodge a complaint:</strong></p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <Mail className="text-blue-300" size={16} />
                    <span>Email: <a href="mailto:complaints@rudiarius.co.za" className="text-blue-300 hover:text-blue-200 transition-colors">complaints@rudiarius.co.za</a></span>
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

            <div className="bg-orange-900/30 rounded-xl p-6 border border-orange-500/30 mt-8">
              <p className="text-sm text-orange-200">
                <strong>Last Updated:</strong> September 2025
              </p>
              <p className="text-sm text-orange-200 mt-2">
                This Complaints Policy is reviewed regularly to ensure compliance with FAIS requirements and effective resolution procedures.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ComplaintsPolicy;