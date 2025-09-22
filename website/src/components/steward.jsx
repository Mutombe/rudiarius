import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Users, FileText, TrendingUp, Eye, MessageCircle, BarChart } from 'lucide-react';

const StewardshipCode = () => {
  const principles = [
    {
      icon: Target,
      title: "Purpose and Governance",
      description: "We maintain clear purpose and governance structures that enable effective stewardship and create long-term value for clients and beneficiaries."
    },
    {
      icon: Shield,
      title: "Governance and Resources",
      description: "We have robust governance, resources and incentive structures to support our stewardship activities."
    },
    {
      icon: Eye,
      title: "Managing Conflicts",
      description: "We manage conflicts of interest effectively and put the best interests of clients and beneficiaries first."
    },
    {
      icon: MessageCircle,
      title: "Market-wide Issues",
      description: "We identify and respond to market-wide and systemic risks to promote a well-functioning financial system."
    },
    {
      icon: FileText,
      title: "Review and Assurance",
      description: "We regularly review our policies, assure our processes and assess the effectiveness of our stewardship activities."
    },
    {
      icon: Users,
      title: "Client Reporting",
      description: "We report on our stewardship activities to clients, clearly communicating how we have acted in their interests."
    },
    {
      icon: TrendingUp,
      title: "Investment Approach",
      description: "We systematically integrate stewardship and investment to reflect our conviction that responsible stewardship creates long-term value."
    },
    {
      icon: BarChart,
      title: "Monitoring and Engagement",
      description: "We monitor our investee companies and, when necessary, engage with management teams to protect and enhance value."
    }
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
          <h1 className="gellix-font text-4xl md:text-5xl font-bold text-white mb-8">Stewardship Code</h1>
          
          <div className="gellix-font text-gray-200 space-y-6 leading-relaxed">
            <div className="bg-purple-900/30 rounded-xl p-6 border border-purple-500/30 mb-8">
              <p className="text-purple-200 text-lg">
                As responsible stewards of our clients' capital, Rudiarius Capital Management is committed to effective stewardship that promotes the long-term success of companies, contributing to the delivery of sustainable benefits for the economy, the environment and society.
              </p>
            </div>

            <section>
              <h2 className="text-2xl font-bold text-blue-300 mb-4">Our Stewardship Approach</h2>
              <p>
                Stewardship is the responsible allocation, management and oversight of capital to create long-term value for clients and beneficiaries leading to sustainable benefits for the economy, the environment and society. We believe that effective stewardship is fundamental to delivering superior risk-adjusted returns for our clients over the long term.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-slate-800/30 rounded-xl p-6 border border-white/10">
                  <h3 className="font-semibold text-blue-200 mb-3">Active Ownership</h3>
                  <p className="text-sm">
                    We exercise our rights and responsibilities as owners to influence the companies in which we invest, promoting good governance, sustainable business practices, and long-term value creation.
                  </p>
                </div>
                <div className="bg-slate-800/30 rounded-xl p-6 border border-white/10">
                  <h3 className="font-semibold text-blue-200 mb-3">Long-term Focus</h3>
                  <p className="text-sm">
                    Our investment decisions are guided by long-term considerations, recognising that sustainable business practices and good governance contribute to enduring value creation.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-300 mb-6">Our Stewardship Principles</h2>
              
              <div className="space-y-6">
                {principles.map((principle, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-r from-slate-800/40 to-slate-700/40 rounded-xl p-6 border border-white/10 hover:border-purple-400/30 transition-colors"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-purple-500/20 rounded-full p-3 flex-shrink-0">
                        <principle.icon size={24} className="text-purple-300" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-2">{principle.title}</h3>
                        <p className="text-sm text-gray-300">{principle.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-300 mb-4">Investment Integration</h2>
              <div className="bg-slate-800/30 rounded-xl p-6 border border-white/10">
                <p className="mb-4">
                  We systematically integrate stewardship and investment considerations throughout our investment process:
                </p>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-slate-700/30 rounded-lg">
                    <div className="text-blue-300 font-semibold mb-2">Pre-Investment</div>
                    <p className="text-xs text-gray-300">Due diligence includes ESG factors and governance assessment</p>
                  </div>
                  <div className="text-center p-4 bg-slate-700/30 rounded-lg">
                    <div className="text-blue-300 font-semibold mb-2">Ownership</div>
                    <p className="text-xs text-gray-300">Active engagement with management teams and board oversight</p>
                  </div>
                  <div className="text-center p-4 bg-slate-700/30 rounded-lg">
                    <div className="text-blue-300 font-semibold mb-2">Exit</div>
                    <p className="text-xs text-gray-300">Responsible exit planning with sustainable value creation focus</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-300 mb-4">Engagement Activities</h2>
              <p className="mb-4">
                We engage with our portfolio companies on a range of matters that we believe will protect and enhance long-term value:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-800/30 rounded-lg p-4 border border-white/10">
                  <h4 className="font-semibold text-blue-200 mb-2">Strategic Matters</h4>
                  <ul className="text-sm space-y-1 text-gray-300 list-disc list-inside">
                    <li>Business strategy and capital allocation</li>
                    <li>Risk management and internal controls</li>
                    <li>Operational performance and efficiency</li>
                    <li>Market positioning and competitive advantage</li>
                  </ul>
                </div>
                
                <div className="bg-slate-800/30 rounded-lg p-4 border border-white/10">
                  <h4 className="font-semibold text-blue-200 mb-2">ESG Matters</h4>
                  <ul className="text-sm space-y-1 text-gray-300 list-disc list-inside">
                    <li>Environmental impact and climate strategy</li>
                    <li>Employee welfare and diversity</li>
                    <li>Health and safety practices</li>
                    <li>Community relations and social impact</li>
                  </ul>
                </div>
                
                <div className="bg-slate-800/30 rounded-lg p-4 border border-white/10">
                  <h4 className="font-semibold text-blue-200 mb-2">Governance</h4>
                  <ul className="text-sm space-y-1 text-gray-300 list-disc list-inside">
                    <li>Board composition and effectiveness</li>
                    <li>Executive compensation alignment</li>
                    <li>Transparency and disclosure practices</li>
                    <li>Shareholder rights protection</li>
                  </ul>
                </div>
                
                <div className="bg-slate-800/30 rounded-lg p-4 border border-white/10">
                  <h4 className="font-semibold text-blue-200 mb-2">Financial</h4>
                  <ul className="text-sm space-y-1 text-gray-300 list-disc list-inside">
                    <li>Financial reporting quality</li>
                    <li>Dividend and capital return policies</li>
                    <li>Debt management and capital structure</li>
                    <li>Audit quality and independence</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-300 mb-4">Monitoring and Reporting</h2>
              <div className="bg-blue-900/30 rounded-xl p-6 border border-blue-500/30">
                <p className="mb-4">
                  We monitor our stewardship activities and their outcomes, providing regular reporting to our clients on:
                </p>
                
                <ul className="space-y-2 text-sm list-disc list-inside">
                  <li>Our stewardship objectives and how we aim to meet them</li>
                  <li>The stewardship activities we have undertaken</li>
                  <li>The outcomes of our stewardship activities, including their impact on risk and returns</li>
                  <li>How we have addressed significant votes and engagement activities</li>
                  <li>Areas where we have escalated our stewardship activities and the rationale for doing so</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-300 mb-4">Collaborative Engagement</h2>
              <p>
                Where appropriate, we participate in collaborative engagement initiatives with other investors to address market-wide and systemic issues. This collective approach can be more effective in driving positive change while sharing costs and resources.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-300 mb-4">Escalation</h2>
              <div className="bg-yellow-900/30 rounded-xl p-6 border border-yellow-500/30">
                <p className="mb-4">
                  When initial engagement does not lead to satisfactory outcomes, we have a structured escalation process:
                </p>
                
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
                  <div className="text-center p-3 bg-yellow-800/30 rounded-lg flex-1">
                    <div className="text-yellow-200 font-semibold text-sm">Step 1</div>
                    <p className="text-xs text-gray-300 mt-1">Direct engagement with senior management</p>
                  </div>
                  <div className="text-center p-3 bg-yellow-800/30 rounded-lg flex-1">
                    <div className="text-yellow-200 font-semibold text-sm">Step 2</div>
                    <p className="text-xs text-gray-300 mt-1">Board-level discussions and oversight</p>
                  </div>
                  <div className="text-center p-3 bg-yellow-800/30 rounded-lg flex-1">
                    <div className="text-yellow-200 font-semibold text-sm">Step 3</div>
                    <p className="text-xs text-gray-300 mt-1">Public statements or collective action</p>
                  </div>
                  <div className="text-center p-3 bg-yellow-800/30 rounded-lg flex-1">
                    <div className="text-yellow-200 font-semibold text-sm">Step 4</div>
                    <p className="text-xs text-gray-300 mt-1">Divestment as last resort</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-300 mb-4">Contact Information</h2>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-white/10">
                <p>For more information about our stewardship activities, please contact us:</p>
                <div className="mt-4 space-y-2">
                  <p><strong>Rudiarius Capital Management</strong></p>
                  <p>Sandton, Johannesburg, South Africa</p>
                  <p>Email: <a href="mailto:fungai@rudiarius.co.za" className="text-blue-300 hover:text-blue-200 transition-colors">fungai@rudiarius.co.za</a></p>
                  <p>Phone: +27 10 017 6996</p>
                  <p>FSP License: 45286</p>
                </div>
              </div>
            </section>

            <div className="bg-purple-900/30 rounded-xl p-6 border border-purple-500/30 mt-8">
              <p className="text-sm text-purple-200">
                <strong>Last Updated:</strong> September 2025
              </p>
              <p className="text-sm text-purple-200 mt-2">
                This Stewardship Code is reviewed annually to ensure it remains current and effective.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default StewardshipCode;