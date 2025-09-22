import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Users, Shield, TrendingUp, Globe, Heart } from 'lucide-react';

const ESGPolicy = () => {
  const pillars = [
    { icon: Leaf, title: 'Climate', description: 'Environmental impact and climate action' },
    { icon: Globe, title: 'One Planet', description: 'Sustainable resource management' },
    { icon: TrendingUp, title: 'Supply Chain', description: 'Responsible sourcing and operations' },
    { icon: Users, title: 'People', description: 'Employee welfare and development' },
    { icon: Heart, title: 'Community', description: 'Social impact and community engagement' },
    { icon: Shield, title: 'Leadership', description: 'Governance and ethical leadership' }
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
          <h1 className="gellix-font text-4xl md:text-5xl font-bold text-white mb-8">ESG Policy</h1>
          
          <div className="gellix-font text-gray-200 space-y-6 leading-relaxed">
            <div className="bg-green-900/30 rounded-xl p-6 border border-green-500/30 mb-8">
              <p className="text-green-200 text-lg">
                Rudiarius Capital Management is committed to the integration of sustainability practices throughout our business culture and operations while we seek to make the best returns possible on our investments; as well as creating positive, sustainable outcomes, believing this is the right and optimal way to build and protect value in everything we do.
              </p>
            </div>

            <section>
              <h2 className="text-2xl font-bold text-blue-300 mb-4">The Basis of Our Approach</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-800/30 rounded-xl p-6 border border-white/10">
                  <h3 className="font-semibold text-blue-200 mb-3">Impact Focus</h3>
                  <p className="text-sm">
                    To avoid adverse impacts (where this is unavoidable to take steps to mitigate) and maximise positive impacts on individuals, wider society, the environment and the economy through our investments and other business undertakings.
                  </p>
                </div>
                <div className="bg-slate-800/30 rounded-xl p-6 border border-white/10">
                  <h3 className="font-semibold text-blue-200 mb-3">Compliance Plus</h3>
                  <p className="text-sm">
                    Proactively comply with all laws that apply directly to Rudiarius, and go beyond compliance to meet our objectives more effectively. This includes steering our portfolio companies to complete and effective compliance, and beyond.
                  </p>
                </div>
                <div className="bg-slate-800/30 rounded-xl p-6 border border-white/10">
                  <h3 className="font-semibold text-blue-200 mb-3">Value Creation</h3>
                  <p className="text-sm">
                    To work with the companies we invest in to help them recognise, monitor and manage the opportunities and risks associated with ESG factors, aiming to create and protect value and build them into more successful and sustainable businesses.
                  </p>
                </div>
                <div className="bg-slate-800/30 rounded-xl p-6 border border-white/10">
                  <h3 className="font-semibold text-blue-200 mb-3">Leadership</h3>
                  <p className="text-sm">
                    To demonstrate leadership in sustainable investment and management practices in our business relations and in the communities in which we work.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-300 mb-4">Climate Action and Sustainable Development Goals</h2>
              <p>
                We recognise that not only could the impacts of climate change be financially material to our portfolio but that as an organisation influencing the growth of companies we have a moral obligation to help address this global issue and proactively support sustainable development principles. In response we will consider climate related matters in our investment strategy and support our portfolio companies to actively monitor and manage their climate change risks and impacts.
              </p>
              
              <p className="mt-4">
                Rudiarius supports sustainable development principles and we relate our work, and that of our portfolio, to them where there are strong contributions and outcomes aligned to these goals. We believe this will bring sustainable practices to the attention of new business audiences.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-300 mb-4">Working Principles for ESG Integration</h2>
              <p className="mb-6">We work to the following principles within our investment and management processes to ensure we consistently integrate ESG considerations throughout the investment lifecycle:</p>
              
              <div className="space-y-4">
                {[
                  "We follow this Sustainable Investment Policy to integrate ESG matters into our deal making, stewardship and other undertakings in all deals including where we co-invest with other parties.",
                  "We use clearly defined processes to integrate ESG considerations into our investment decision making.",
                  "Our processes, and the tools that support them, are consistently organised around our ESG framework.",
                  "Our team understands the reasons, issues and opportunities behind the ESG agenda, and receive regular briefings.",
                  "We take our governance role for ESG matters seriously and keep it high on the agenda within our portfolio.",
                  "We actively engage with the management teams in our portfolio to promote and attain better ESG performance.",
                  "We conduct rigorous, regular monitoring and reporting of ESG risks, opportunities and outcomes in our portfolio.",
                  "We seek to conduct our activities in line with responsible investment principles at all times, including promoting sustainable investment practices to the wider investment community."
                ].map((principle, index) => (
                  <div key={index} className="bg-slate-800/20 rounded-lg p-4 border border-white/5">
                    <div className="flex items-start space-x-3">
                      <div className="bg-blue-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                        {index + 1}
                      </div>
                      <p className="text-sm">{principle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-300 mb-6">The Rudiarius ESG Framework</h2>
              <p className="mb-6">
                We use our bespoke ESG framework to guide analysis, decision making, and reporting across a consistent set of themes designed to highlight the material matters that are most relevant in each investment:
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pillars.map((pillar, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-slate-800/40 to-slate-700/40 rounded-xl p-6 border border-white/10 hover:border-blue-400/30 transition-colors"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="bg-blue-500/20 rounded-full p-4 mb-4">
                        <pillar.icon size={32} className="text-blue-300" />
                      </div>
                      <h3 className="font-semibold text-white mb-2">{pillar.title}</h3>
                      <p className="text-sm text-gray-300">{pillar.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-300 mb-4">Reporting</h2>
              <p>
                We report comprehensively on ESG performance at company and portfolio level to our investors annually, and provide Exit Reports that evaluate and show change in ESG performance over the lifetime of each investment.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-300 mb-4">Management Commitment</h2>
              <div className="bg-blue-900/30 rounded-xl p-6 border border-blue-500/30">
                <p>
                  We are committed to providing the resources and support for our team to fully implement this Policy, and to demonstrate leadership in sustainable investment practices, collaborating with others to share learnings and best practice. We review our approach and performance regularly to ensure we are meeting our commitments and achieving the best outcomes we can.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-300 mb-4">Contact Information</h2>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-white/10">
                <p>For more information about our ESG policy and practices, please contact us:</p>
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
                This ESG Policy is reviewed and updated regularly to ensure it reflects our current practices and commitments.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ESGPolicy;