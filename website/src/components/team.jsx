import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Linkedin,
  Building2,
  MapPin,
  Award,
  TrendingUp,
  Globe,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { IoPeopleCircleOutline } from "react-icons/io5";
import { GiWorld } from "react-icons/gi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

const GlassCard = ({ children, className = "", ...props }) => (
  <motion.div
    whileHover={{ y: -5, scale: 1.02 }}
    transition={{ duration: 0.3 }}
    className={`bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 ${className}`}
    {...props}
  >
    {children}
  </motion.div>
);

const teamMembers = [
  {
    name: "Senziwani Sikhosana",
    role: "Chief Executive Officer",
    image: "/sikhosana-683x1024.jpg",
    color: "from-blue-600 to-indigo-700",
    accentColor: "text-blue-600",
    bgAccent: "from-blue-50 to-indigo-50",
    borderAccent: "border-blue-200",
    description:
      "Provides strategic leadership and vision for the firm, driving growth across African investment markets with an unwavering commitment to client value creation.",
    location: "South Africa",
    focus: "Strategic Leadership",
  },
  {
    name: "Tatenda Hungwe",
    role: "Executive Director",
    image: "/tatenda-683x1024.jpg",
    color: "from-emerald-600 to-teal-700",
    accentColor: "text-emerald-600",
    bgAccent: "from-emerald-50 to-teal-50",
    borderAccent: "border-emerald-200",
    description:
      "Drives investment strategy and portfolio management, leveraging deep expertise in African equity markets and fundamental analysis to identify high-conviction opportunities.",
    location: "South Africa",
    focus: "Investment Strategy",
  },
  {
    name: "Lucia Chingwaru-Mutsunge",
    role: "Executive Director",
    image: "/lucia1-683x1024.jpg",
    color: "from-purple-600 to-violet-700",
    accentColor: "text-purple-600",
    bgAccent: "from-purple-50 to-violet-50",
    borderAccent: "border-purple-200",
    description:
      "Oversees operational excellence and client relations, bringing a rigorous analytical approach to risk management and portfolio construction across multiple African markets.",
    location: "South Africa",
    focus: "Operations & Risk",
  },
];

const TeamPage = () => {
  const navigate = useNavigate();
  return (
    <div className="px-4 sm:px-6 py-12 sm:py-20 bg-gradient-to-b from-slate-900 via-blue-900/20 to-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-20"
        >
          <span className="text-blue-400 text-sm tracking-wider uppercase font-semibold mb-4 block">
            LEADERSHIP
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Meet our{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Team
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experienced in investing in multiple markets & in running investment
            management businesses. Our dedicated professionals bring decades of
            expertise to every investment decision.
          </p>
        </motion.div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 md:mb-20"
        >
          <GlassCard className="text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <IoPeopleCircleOutline size={28} className="text-white" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">24+</div>
            <div className="text-gray-400 text-xs sm:text-sm">
              Years Combined Experience
            </div>
          </GlassCard>

          <GlassCard className="text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <GiWorld size={28} className="text-white" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">15+</div>
            <div className="text-gray-400 text-xs sm:text-sm">Markets Covered</div>
          </GlassCard>

          <GlassCard className="text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <HiOutlineBuildingOffice2 size={28} className="text-white" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">500+</div>
            <div className="text-gray-400 text-xs sm:text-sm">Company Site Visits</div>
          </GlassCard>

          <GlassCard className="text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Award size={28} className="text-white" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">10+</div>
            <div className="text-gray-400 text-xs sm:text-sm">Years Track Record</div>
          </GlassCard>
        </motion.div>

        {/* Leadership Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12 md:mb-16"
        >
          <div className="text-center mb-10 sm:mb-12">
            <span className="text-blue-400 text-sm tracking-wider uppercase font-semibold mb-4 block">
              OUR LEADERSHIP
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
              Dedicated professionals with decades of combined experience in
              African investment markets.
            </p>
          </div>

          {/* Team Members Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.15 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg"
              >
                {/* Photo */}
                <div className="relative">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top"
                      loading="eager"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                    <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                      {member.name}
                    </h3>
                    <p className={`text-sm sm:text-base font-semibold mt-1 text-blue-300`}>
                      {member.role}
                    </p>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4 sm:p-5">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {member.description}
                  </p>

                  <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500 pt-3 border-t border-gray-100">
                    <div className="flex items-center space-x-1.5">
                      <MapPin size={14} className={member.accentColor} />
                      <span>{member.location}</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <Building2 size={14} className={member.accentColor} />
                      <span>{member.focus}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Values */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-12 md:mb-20"
        >
          <div className="text-center mb-10 sm:mb-12">
            <span className="text-blue-400 text-sm tracking-wider uppercase font-semibold mb-4 block">
              OUR VALUES
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              What Drives Our Team
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
              Our team operates on core principles that guide every decision and
              interaction with clients and stakeholders.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            <GlassCard className="text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <img
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=2374&q=80"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <IoPeopleCircleOutline size={32} className="text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">
                  Independence
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  As an independent firm, we maintain complete freedom to act in
                  our clients' best interests without external conflicts or
                  pressures.
                </p>
              </div>
            </GlassCard>

            <GlassCard className="text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2415&q=80"
                  alt="Data analysis"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <TrendingUp size={32} className="text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">
                  Excellence
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  We apply world-class investment techniques and rigorous
                  analysis to deliver superior risk-adjusted returns for our
                  clients.
                </p>
              </div>
            </GlassCard>

            <GlassCard className="text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <img
                  src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2338&q=80"
                  alt="Global connectivity"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <GiWorld size={32} className="text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">
                  Local Expertise
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  Deep understanding of African markets through extensive
                  on-ground research and direct engagement with management
                  teams.
                </p>
              </div>
            </GlassCard>
          </div>
        </motion.div>

        {/* Team Approach */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-12 md:mb-20"
        >
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <span className="text-blue-400 text-sm tracking-wider uppercase font-semibold mb-4 block">
                OUR APPROACH
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
                Collaborative Excellence
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6 text-sm sm:text-base">
                Our multidisciplinary team combines diverse expertise in
                investment analysis, risk management, and African market
                dynamics to deliver comprehensive solutions.
              </p>
              <p className="text-gray-300 leading-relaxed mb-8 text-sm sm:text-base">
                Through extensive travel and direct engagement with companies
                across our target markets, we maintain an unparalleled
                understanding of the opportunities and challenges in African
                investments.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                  <span className="text-gray-300 text-sm sm:text-base">
                    Direct management engagement through site visits
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <span className="text-gray-300 text-sm sm:text-base">
                    Rigorous fundamental analysis and due diligence
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 rounded-full bg-purple-400"></div>
                  <span className="text-gray-300 text-sm sm:text-base">
                    Comprehensive risk assessment frameworks
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 rounded-full bg-orange-400"></div>
                  <span className="text-gray-300 text-sm sm:text-base">
                    ESG integration in all investment decisions
                  </span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden h-64 md:h-96">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
                  alt="Team meeting and strategy discussion"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent"></div>

                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                  <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-3 sm:p-4">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-xl sm:text-2xl font-bold text-white">24</div>
                        <div className="text-xs sm:text-sm text-gray-300">
                          Countries Analyzed
                        </div>
                      </div>
                      <div>
                        <div className="text-xl sm:text-2xl font-bold text-blue-400">
                          World-Class
                        </div>
                        <div className="text-xs sm:text-sm text-gray-300">Standards</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <GlassCard className="text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <img
                src="/23.jpg"
                alt="Professional handshake"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Ready to work with our team?
              </h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-sm sm:text-base">
                Connect with our experienced professionals to explore how our
                expertise and proven track record can help achieve your
                investment objectives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  className="px-6 py-3 sm:px-8 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105"
                  onClick={() => navigate("/contact")}
                >
                  Schedule a Meeting
                </button>
                <button
                  className="px-6 py-3 sm:px-8 sm:py-4 bg-white/10 border border-white/20 text-white hover:bg-white/20 rounded-2xl font-semibold transition-all duration-300"
                  onClick={() => navigate("/approach")}
                >
                  Learn About Our Approach
                </button>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
};

export default TeamPage;
