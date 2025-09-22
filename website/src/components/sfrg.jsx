import React from 'react';
import { motion } from 'framer-motion';
import { FileText, TrendingUp, Shield, AlertCircle, Target, BarChart, Leaf, Users } from 'lucide-react';

const SFDR = () => {
  const articles = [
    {
      number: "Article 3",
      title: "Sustainability Risk Integration",
      description: "How we integrate sustainability risks into our investment decisions and advice processes.",
      icon: Shield
    },
    {
      number: "Article 4",
      title: "Principal Adverse Impact Statement",
      description: "Our consideration of the principal adverse impacts of investment decisions on sustainability factors.",
      icon: AlertCircle
    },
    {
      number: "Article 6",
      title: "Product-level Disclosures",
      description: "Sustainability risk disclosures for financial products that do not promote environmental or social characteristics.",
      icon: FileText
    },
    {
      number: "Article 8",
      title: "Environmental/Social Promotion",
      description: "Products that promote environmental or social characteristics but do not have sustainable investment as their objective.",
      icon: Leaf
    },
    {
      number: "Article 9",
      title: "Sustainable Investment Objective",
      description: "Products that have sustainable investment as their objective.",
      icon: Target
    }
  ];

  const sustainabilityRisks = [
    "Climate change and transition risks",
    "Resource scarcity and circular economy",
    "Social and employee matters",
    "Governance and business ethics",
    "Regulatory and policy changes",
    "Technology and innovation disruption"
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
          <h1 className="gellix-font text-4xl md:text-5xl font-bold text-white mb-8">SFDR Disclosures</h1>
          
          <div className="gellix-font text-gray-200 space-y-6 leading-relaxed">
            <div className="bg-green-900/30 rounded-xl p-6 border border-green-500/30 mb-8">
              <p className="text-green-200 text-lg">
                The Sustainable Finance Disclosure Regulation (SFDR) establishes disclosure obligations for financial market participants regarding the integration of sustainability risks and the consideration of adverse sustainability impacts in their processes.
              </p>
            </div>

            <section>
              <h2 className="text-2xl font-bold text-blue-300 mb-4">Our SFDR Approach</h2>
              <p>
                As a responsible investment manager, Rudiarius Capital Management is committed to transparent disclosure of how we integrate sustainability considerations into our investment processes. While SFDR is EU regulation, we apply similar principles to ensure comprehensive sustainability reporting for our clients and stakeholders.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-slate-800/30 rounded-xl p-6 border border-white/10">
                  <h3 className="font-semibold text-blue-200 mb-3">Transparency</h3>
                  <p className="text-sm">
                    We provide clear, accessible information about how sustainability factors are integrated into our investment decisions and risk management processes.
                  </p>
                </div>
                <div className="bg-slate-800/30 rounded-xl p-6 border border-white/10">
                  <h3 className="font-semibold text-blue-200 mb-3">Integration</h3>
                  <p className="text-sm">
                    Sustainability risks and opportunities are systematically considered throughout our investment lifecycle, from due diligence to exit.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-300 mb-6">SFDR Article Framework</h2>
              
              <div className="space-y-6">
                {articles.map((article, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-r from-slate-800/40 to-slate-700/40 rounded-xl p-6 border border-white/10 hover:border-green-400/30 transition-colors"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-green-500/20 rounded-full p-3 flex-shrink-0">
                        <article.icon size={24} className="text-green-300" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
                            {article.number}
                          </span>
                          <h3 className="font-semibold text-white">{article.title}</h3>
                        </div>
                        <p className="text-sm text-gray-300">{article.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-300 mb-4">Sustainability Risk Integration</h2>
              <p className="mb-4">
                We systematically integrate sustainability risks into our investment decision-making processes. Sustainability risks are environmental, social or governance events or conditions that, if they occur, could cause a negative material impact on the value of investments.
              </p>
              
              <div className="bg-slate-800/30 rounded-xl p-6 border border-white/10">
                <h3 className="font-semibold text-blue-200 mb-4">Key Sustainability Risk Categories</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {sustainabilityRisks.map((risk, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-slate-700/30 rounded-lg">
                      <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                      <span className="text-sm">{risk}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-300 mb-4">Principal Adverse Impact (PAI) Consideration</h2>
              <div className="bg-yellow-900/30 rounded-xl p-6 border border-yellow-500/30">
                <p className="mb-4">
                  We consider the principal adverse impacts of our investment decisions on sustainability factors. This includes impacts on:
                </p>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-yellow-800/30 rounded-lg">
                    <Leaf className="mx-auto mb-2 text-yellow-300" size={24} />
                    <div className="text-yellow-200 font-semibold text-sm mb-1">Environmental</div>
                    <p className="text-xs text-gray-300">Climate, pollution, biodiversity</p>
                  </div>
                  <div className="text-center p-4 bg-yellow-800/30 rounded-lg">
                    <Users className="mx-auto mb-2 text-yellow-300" size={24} />
                    <div className="text-yellow-200 font-semibold text-sm mb-1">Social</div>
                    <p className="text-xs text-gray-300">Human rights, labour conditions</p>
                  </div>
                  <div className="text-center p-4 bg-yellow-800/30 rounded-lg">
                    <Shield className="mx-auto mb-2 text-yellow-300" size={24} />
                    <div className="text-yellow-200 font-semibold text-sm mb-1">Governance</div>
                    <p className="text-xs text-gray-300">Board diversity, executive pay</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-300 mb-4">Due Diligence Process</h2>
              <div className="bg-slate-800/30 rounded-xl p-6 border border-white/10">
                <p className="mb-4">
                  Our due diligence process incorporates comprehensive sustainability risk assessment:
                </p>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-slate-700/30 rounded-lg">
                    <BarChart className="mx-auto mb-2 text-blue-300" size={24} />
                    <div className="text-blue-200 font-semibold text-sm mb-1">Assessment</div>
                    <p className="text-xs text-gray-300">ESG risk evaluation</p>
                  </div>
                  <div className="text-center p-4 bg-slate-700/30 rounded-lg">
                    <TrendingUp className="mx-auto mb-2 text-blue-300" size={24} />
                    <div className="text-blue-200 font-semibold text-sm mb-1">Integration</div>
                    <p className="text-xs text-gray-300">Risk pricing & structuring</p>
                  </div>
                  <div className="text-center p-4 bg-slate-700/30 rounded-lg">
                    <Target className="mx-auto mb-2 text-blue-300" size={24} />
                    <div className="text-blue-200 font-semibold text-sm mb-1">Monitoring</div>
                    <p className="text-xs text-gray-300">Ongoing oversight</p>
                  </div>
                  <div className="text-center p-4 bg-slate-700/30 rounded-lg">
                    <FileText className="mx-auto mb-2 text-blue-300" size={24} />
                    <div className="text-blue-200 font-semibold text-sm mb-1">Reporting</div>
                    <p className="text-xs text-gray-300">Stakeholder disclosure</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-300 mb-4">Product Classification</h2>
              <p className="mb-4">
                We classify our investment products according to their sustainability characteristics:
              </p>
              
              <div className="space-y-4">
                <div className="bg-slate-800/30 rounded-lg p-4 border border-white/10 flex items-start space-x-4">
                  <div className="bg-gray-500/20 rounded-full p-2 flex-shrink-0">
                    <FileText size={20} className="text-gray-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-200 mb-1">Article 6 Products</h3>
                    <p className="text-sm text-gray-300">Products that integrate sustainability risks but do not promote environmental or social characteristics.</p>
                  </div>
                </div>
                
                <div className="bg-slate-800/30 rounded-lg p-4 border border-white/10 flex items-start space-x-4">
                  <div className="bg-green-500/20 rounded-full p-2 flex-shrink-0">
                    <Leaf size={20} className="text-green-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-200 mb-1">Article 8 Products</h3>
                    <p className="text-sm text-gray-300">Products that promote environmental or social characteristics alongside other investment objectives.</p>
                  </div>
                </div>
                
                <div className="bg-slate-800/30 rounded-lg p-4 border border-white/10 flex items-start space-x-4">
                  <div className="bg-blue-500/20 rounded-full p-2 flex-shrink-0">
                    <Target size={20} className="text-blue-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-200 mb-1">Article 9 Products</h3>
                    <p className="text-sm text-gray-300">Products with sustainable investment as their primary objective.</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-300 mb-4">Periodic Reporting</h2>
              <div className="bg-blue-900/30 rounded-xl p-6 border border-blue-500/30">
                <p className="mb-4">
                  We provide regular reporting on sustainability-related aspects of our investments, including:
                </p>
                
                <ul className="space-y-2 text-sm list-disc list-inside">
                  <li>How environmental or social characteristics have been met</li>
                  <li>The extent to which sustainable investments have contributed to environmental or social objectives</li>
                  <li>Principal adverse impacts on sustainability factors and actions taken</li>
                  <li>Key performance indicators and metrics used to measure sustainability outcomes</li>
                  <li>Engagement activities and their outcomes</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-300 mb-4">Regulatory Compliance</h2>
              <p>
                While based in South Africa, we maintain awareness of international sustainability disclosure standards including SFDR, TCFD, and other relevant frameworks to ensure our clients receive comprehensive and comparable sustainability information regardless of their regulatory requirements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-300 mb-4">Contact Information</h2>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-white/10">
                <p>For more information about our SFDR disclosures and sustainable finance practices, please contact us:</p>
                <div className="mt-4 space-y-2">
                  <p><strong>Rudiarius Capital Management</strong></p>
                  <p>Sandton, Johannesburg, South Africa</p>
                  <p>Email: <a href="mailto:fungai@rudiarius.co.za" className="text-blue-300 hover:text-blue-200 transition-colors">fungai@rudiarius.co.za</a></p>
                  <p>Phone: +27 10 017 6996</p>
                  <p>FSP License: 45286</p>
                </div>
              </div>
            </section>

            <div className="bg-green-900/30 rounded-xl p-6 border border-green-500/30 mt-8">
              <p className="text-sm text-green-200">
                <strong>Last Updated:</strong> September 2025
              </p>
              <p className="text-sm text-green-200 mt-2">
                These SFDR-aligned disclosures are updated regularly to reflect our current practices and regulatory requirements.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SFDR;