import { ImageWithFallback } from './figma/ImageWithFallback';
import { Shield, Lock, Terminal } from './Icons';

export function About() {
  return (
    <section 
      id="about" 
      className="py-16 sm:py-20 md:py-24 border-t border-blue-500/20"
      aria-labelledby="about-heading"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 id="about-heading" className="text-4xl sm:text-5xl md:text-6xl text-center mb-6 text-blue-400 font-mono glitch-effect">
            {'> ABOUT_ME'}
          </h2>
          <div className="w-24 h-1.5 bg-blue-500 mx-auto mb-12 sm:mb-16 md:mb-20"></div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center mb-10 sm:mb-12 md:mb-16">
            <div className="relative">
              <div className="aspect-square overflow-hidden border-2 border-blue-500/50 bg-slate-900/50 backdrop-blur-sm">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1698086032723-77b19d2ce2f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWNrZXIlMjBjeWJlcnNlY3VyaXR5fGVufDF8fHx8MTc2NTM0NTAwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Security Operations"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-blue-500/10"></div>
              </div>
            </div>

            <div className="bg-slate-900/70 backdrop-blur-md border border-blue-500/30 p-6 sm:p-7 md:p-8 shadow-lg shadow-blue-500/10 rounded-lg">
              <h3 className="text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-7 md:mb-8 text-blue-400 font-mono">
                {'> PROFILE.exe'}
              </h3>
              <div className="space-y-3 sm:space-y-4 text-blue-200 font-mono text-base sm:text-lg leading-relaxed">
                <p>
                  <span className="text-cyan-300">{'>> '}</span>
                  Passionate Cyber Security professional focused on security operations, threat intelligence monitoring, 
                  and comprehensive application security assessments. Committed to developing expertise in vulnerability 
                  assessment, incident response, and security architecture validation.
                </p>
                <p>
                  <span className="text-cyan-300">{'>> '}</span>
                  Pursuing BSc (Hons) in Information Technology (Cyber Security) at SLIIT and Bachelor of Information 
                  Technology (External) at UCSC. Specialized in mobile application security reviews (static and dynamic 
                  analysis) and full-spectrum web application penetration testing aligned with industry best practices.
                </p>
                <p>
                  <span className="text-cyan-300">{'>> '}</span>
                  Active contributor to security operations including endpoint security evaluations, governance risk 
                  compliance programs, and advanced adversary simulation exercises. Passionate about applying innovative 
                  security solutions to protect organizational assets and support strategic objectives.
                </p>
              </div>

              <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-blue-500/30">
                <h4 className="text-xl mb-3 sm:mb-4 text-blue-400 font-mono">{'> EDUCATION'}</h4>
                <div className="space-y-2 sm:space-y-2.5 text-blue-200 font-mono text-sm sm:text-base">
                  <p>{'• BSc (Hons) IT (Cyber Security) - SLIIT (2022-Present)'}</p>
                  <p>{'• Bachelor of IT (External) - UCSC (2023-Present)'}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 md:gap-7">
            <div className="p-5 sm:p-6 md:p-7 bg-slate-900/70 backdrop-blur-md border border-blue-500/30 hover:border-blue-400 active:border-blue-400 transition-all group shadow-lg shadow-blue-500/10 touch-manipulation rounded-lg">
              <div className="w-12 h-12 sm:w-14 sm:h-14 border border-blue-500 flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-blue-500/20 transition-all">
                <Terminal className="text-blue-400" size={28} />
              </div>
              <h4 className="text-lg sm:text-xl mb-3 sm:mb-4 text-blue-400 font-mono">{'> PENTESTING'}</h4>
              <p className="text-blue-200 font-mono text-sm sm:text-base leading-relaxed">
                Comprehensive penetration testing across web, mobile, and network layers. Expertise in vulnerability 
                assessment and security architecture validation.
              </p>
            </div>

            <div className="p-5 sm:p-6 md:p-7 bg-slate-900/70 backdrop-blur-md border border-blue-500/30 hover:border-blue-400 active:border-blue-400 transition-all group shadow-lg shadow-blue-500/10 rounded-lg">
              <div className="w-12 h-12 sm:w-14 sm:h-14 border border-blue-500 flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-blue-500/20 transition-all">
                <Shield className="text-blue-400" size={28} />
              </div>
              <h4 className="text-lg sm:text-xl mb-3 sm:mb-4 text-blue-400 font-mono">{'> THREAT_INTEL'}</h4>
              <p className="text-blue-200 font-mono text-sm sm:text-base leading-relaxed">
                Threat intelligence monitoring and incident response. Security event dashboard analysis and SOC operations 
                in financial sector environments.
              </p>
            </div>

            <div className="p-5 sm:p-6 md:p-7 bg-slate-900/70 backdrop-blur-md border border-blue-500/30 hover:border-blue-400 active:border-blue-400 transition-all group shadow-lg shadow-blue-500/10 rounded-lg">
              <div className="w-12 h-12 sm:w-14 sm:h-14 border border-blue-500 flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-blue-500/20 transition-all">
                <Lock className="text-blue-400" size={28} />
              </div>
              <h4 className="text-lg sm:text-xl mb-3 sm:mb-4 text-blue-400 font-mono">{'> CLOUD_SECURITY'}</h4>
              <p className="text-blue-200 font-mono text-sm sm:text-base leading-relaxed">
                Azure and AWS security controls, system hardening, and monitoring. Experience with SASE implementation 
                and RASP solution security clearance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
