import { Target, Eye, ShieldCheck, CheckCircle, ArrowRight, Award, GraduationCap } from 'lucide-react';
import { motion } from 'motion/react';

const BRAND = '#6269C9';

const pillars = [
  'Combined 70+ Years IAS Experience',
  '500+ Civil Service Selections',
  'Direct Mentorship by Retired Officers',
  'Precision-Targeted Study Modules',
  'Strategic TNPSC & UPSC Integration',
  'Ethics & Leadership Focused Training',
];

const founders = [
  {
    name: "Dr. P. Annamalai, IAS (R)",
    role: "Co-Founder",
    desc: "A veteran administrator with 35+ years of service, bringing deep academic rigor and policy expertise to coaching."
  },
  {
    name: "Mr. C. Kamaraj, IAS (R)",
    role: "Co-Founder",
    desc: "Distinguished for his strategic governance, he focuses on transforming aspirants into practical, field-ready officers."
  }
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="text-sm font-bold uppercase tracking-widest text-indigo-600">Established Excellence</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-slate-900"
          >
            Guided by <span className="text-indigo-600">Bureaucratic Visionaries.</span>
          </motion.h2>
        </div>

        {/* Founders Spotlight Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {founders.map((founder, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:border-indigo-200 transition-all hover:bg-white hover:shadow-xl"
            >
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Award className="text-indigo-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">{founder.name}</h3>
              <p className="text-indigo-600 font-bold text-xs uppercase tracking-tighter mb-4">{founder.role}</p>
              <p className="text-slate-600 text-sm leading-relaxed">{founder.desc}</p>
            </motion.div>
          ))}

          {/* Statistics/Legacy Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="p-8 rounded-[2rem] bg-indigo-600 text-white flex flex-col justify-center"
          >
            <div className="text-4xl font-black mb-2">23+ Years</div>
            <p className="text-indigo-100 text-sm mb-6">Of unwavering commitment to shaping India's future administrators.</p>
            <div className="space-y-3">
              {['UPSC Excellence', 'TNPSC Mastery', 'Interview Guidance'].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-bold">
                  <CheckCircle size={14} className="text-indigo-300" /> {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Content & Pillars Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-slate-900 mb-6">
              The Gold Standard in <br />Civil Services Preparation
            </h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Dr. P. Annamalai IAS Academy was born from the collective vision of two of the most respected retired civil servants. We bridge the gap between textbook knowledge and the practical analytical skills required by the Commission today.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {pillars.map((p, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors">
                  <div className="mt-1 w-5 h-5 rounded-md bg-indigo-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={12} className="text-indigo-600" />
                  </div>
                  <span className="text-sm font-bold text-slate-700 leading-tight">{p}</span>
                </div>
              ))}
            </div>

            <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-indigo-600 transition-all shadow-lg">
              Start Your Journey <ArrowRight size={18} />
            </a>
          </motion.div>

          {/* Vision/Mission Glass Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="p-8 rounded-[2rem] bg-white border border-slate-100 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full -mr-16 -mt-16 opacity-50" />
              <div className="flex items-center gap-4 mb-4 relative z-10">
                <Target className="text-indigo-600" />
                <h4 className="font-bold text-xl">Our Mission</h4>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed relative z-10">
                To democratize high-quality civil services coaching, ensuring that every hardworking aspirant, regardless of their background, has access to the same strategic guidance used by top rankers.
              </p>
            </div>

            <div className="p-8 rounded-[2rem] bg-white border border-slate-100 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-violet-50 rounded-full -mr-16 -mt-16 opacity-50" />
              <div className="flex items-center gap-4 mb-4 relative z-10">
                <Eye className="text-violet-600" />
                <h4 className="font-bold text-xl">Our Vision</h4>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed relative z-10">
                To be the most ethical and result-oriented institution in India, producing officers who lead with integrity, competence, and a deep sense of public service.
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}