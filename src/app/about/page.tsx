
import { TfiRocket, TfiShield } from 'react-icons/tfi';
import { TiTick, TiCloudStorage, TiHeart, TiStar, TiUser, TiCode, TiGlobe } from 'react-icons/ti';

const AboutPage = () => {
  const features = [
    {
      icon: <TiCloudStorage className="text-5xl" />,
      title: 'Cloud Infrastructure',
      description: 'State-of-the-art cloud infrastructure ensuring 99.9% uptime for your applications',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <TfiShield className="text-5xl" />,
      title: 'Enterprise Security',
      description: 'Advanced security protocols and encryption to protect your valuable data',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <TfiRocket className="text-5xl" />,
      title: 'Lightning Fast',
      description: 'Optimized performance with SSD storage and global CDN integration',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: <TiHeart className="text-5xl" />,
      title: '24/7 Support',
      description: 'Dedicated expert support team available around the clock for you',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const stats = [
    { value: '99.9%', label: 'Uptime Guarantee', icon: <TiGlobe /> },
    { value: '50K+', label: 'Happy Customers', icon: <TiUser /> },
    { value: '24/7', label: 'Expert Support', icon: <TiStar /> },
    { value: '10+', label: 'Years Experience', icon: <TiCode /> }
  ];

  const teamMembers = [
    { name: 'John Doe', role: 'CEO & Founder', bio: 'Passionate about cloud technology and digital transformation' },
    { name: 'Jane Smith', role: 'CTO', bio: 'Leading innovation in hosting infrastructure and security' },
    { name: 'Mike Johnson', role: 'Head of Support', bio: 'Dedicated to delivering exceptional customer experiences' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-r from-brand/10 to-brand-accent/10 blur-3xl -z-10"></div>
        <div className="container mx-auto max-w-6xl">
          <div className="text-center animate-fade-in-up">
            <div className="inline-block mb-4 px-6 py-2 bg-brand/10 rounded-full text-brand font-semibold text-sm">
              About Cloud Hosting
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-slate-800 tracking-tight mb-6">
              Empowering Your <span className="text-transparent bg-clip-text bg-gradient-to-br from-brand to-brand-accent">Digital Journey</span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
              The best web hosting solution for your online success. We provide cutting-edge infrastructure 
              with unmatched reliability and performance.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100 group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-brand text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl font-black text-slate-800 mb-2">{stat.value}</div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-black text-slate-800 mb-4">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-br from-brand to-brand-accent">Us</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Experience hosting excellence with our comprehensive feature set
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100 group relative overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${feature.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                <div className="text-brand mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-brand/5 to-brand-accent/5">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-block mb-4 px-6 py-2 bg-brand/10 rounded-full text-brand font-semibold text-sm">
                Our Mission
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-slate-800 mb-6">
                Building the Future of <span className="text-transparent bg-clip-text bg-gradient-to-br from-brand to-brand-accent">Web Hosting</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                We believe everyone deserves access to reliable, fast, and secure hosting. 
                Our mission is to empower businesses, developers, and creators with the 
                infrastructure they need to succeed online.
              </p>
              <ul className="space-y-4">
                {[
                  'Industry-leading uptime guarantee',
                  'Advanced security protocols',
                  'Scalable solutions for all sizes',
                  'Expert support when you need it'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-slate-700 font-medium">
                    <span className="bg-brand text-white rounded-full p-1.5 flex-shrink-0">
                      <TiTick />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative animate-float">
              <div className="absolute -inset-4 bg-gradient-to-r from-brand to-brand-accent rounded-3xl opacity-20 blur-2xl"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Servers Worldwide', value: '15+' },
                    { label: 'Data Centers', value: '25+' },
                    { label: 'Countries', value: '40+' },
                    { label: 'Network Speed', value: '10Gbps' }
                  ].map((item, index) => (
                    <div key={index} className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 text-center border border-slate-100 hover:border-brand/30 transition-all duration-300">
                      <div className="text-3xl font-black text-brand mb-2">{item.value}</div>
                      <div className="text-sm text-slate-600 font-medium">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-block mb-4 px-6 py-2 bg-brand/10 rounded-full text-brand font-semibold text-sm">
              Our Team
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-800 mb-4">
              Meet the <span className="text-transparent bg-clip-text bg-gradient-to-br from-brand to-brand-accent">Experts</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Dedicated professionals working behind the scenes to deliver excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100 group text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-brand to-brand-accent rounded-full flex items-center justify-center text-white text-3xl font-bold group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">{member.name}</h3>
                <div className="text-brand font-semibold mb-4">{member.role}</div>
                <p className="text-slate-600 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-r from-brand to-brand-accent rounded-3xl p-12 text-center text-white shadow-2xl animate-fade-in-up relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -z-0"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -z-0"></div>
            <div className="relative z-10">
              <h2 className="text-4xl lg:text-5xl font-black mb-4">Ready to Get Started?</h2>
              <p className="text-xl mb-8 text-white/90">
                Join thousands of satisfied customers and experience hosting excellence
              </p>
              <button className="bg-white text-brand font-bold text-lg px-12 py-4 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/50">
                Start Your Journey Today
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;