const skills = [
  {
    category: 'SECURITY_OPERATIONS',
    items: [
      { name: 'Penetration Testing', level: 95 },
      { name: 'Vulnerability Assessment', level: 92 },
      { name: 'Incident Response', level: 88 },
      { name: 'Threat Intelligence', level: 90 },
    ],
  },
  {
    category: 'APPLICATION_SECURITY',
    items: [
      { name: 'Web App Security', level: 93 },
      { name: 'Mobile Security (SAST/DAST)', level: 90 },
      { name: 'OWASP Top 10', level: 95 },
      { name: 'Secure Coding', level: 88 },
    ],
  },
  {
    category: 'CLOUD_&_INFRASTRUCTURE',
    items: [
      { name: 'Azure Security', level: 90 },
      { name: 'AWS Security', level: 85 },
      { name: 'Kubernetes/Docker', level: 88 },
      { name: 'Network Security', level: 87 },
    ],
  },
  {
    category: 'PROGRAMMING_&_TOOLS',
    items: [
      { name: 'Python', level: 95 },
      { name: 'Bash/PowerShell', level: 90 },
      { name: 'Burp Suite', level: 93 },
      { name: 'Metasploit', level: 88 },
    ],
  },
  {
    category: 'GRC_&_COMPLIANCE',
    items: [
      { name: 'ISO/IEC 27001', level: 90 },
      { name: 'Risk Assessment', level: 88 },
      { name: 'Security Auditing', level: 85 },
      { name: 'Policy Validation', level: 87 },
    ],
  },
  {
    category: 'AI/ML_SECURITY',
    items: [
      { name: 'Deep Learning (TensorFlow)', level: 87 },
      { name: 'Malware Analysis', level: 90 },
      { name: 'Threat Detection Models', level: 85 },
      { name: 'Data Security', level: 88 },
    ],
  },
];

export function Skills() {
  return (
    <section 
      id="skills" 
      className="py-12 sm:py-16 md:py-20 border-t border-blue-500/20"
      aria-labelledby="skills-heading"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 id="skills-heading" className="text-3xl sm:text-4xl md:text-5xl text-center mb-4 text-blue-400 font-mono glitch-effect">
            {'> SKILL_SET'}
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-center text-blue-200 mb-8 sm:mb-12 md:mb-16 max-w-2xl mx-auto font-mono text-sm sm:text-base px-4">
            {'>> Comprehensive arsenal of security tools, methodologies, and technical expertise across multiple domains.'}
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="bg-slate-900/70 backdrop-blur-md border border-blue-500/30 p-4 sm:p-5 md:p-6 shadow-lg shadow-blue-500/10">
                <h3 className="text-base sm:text-lg mb-4 sm:mb-6 text-blue-400 font-mono">
                  {'> '}{skillGroup.category}
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  {skillGroup.items.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-blue-200 font-mono text-xs sm:text-sm">{skill.name}</span>
                        <span className="text-blue-400 font-mono text-xs sm:text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-950/50 border border-blue-500/30 h-2 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-1000 shadow-lg shadow-blue-500/50"
                          style={{ width: `${skill.level}%` }}
                          role="progressbar"
                          aria-valuenow={skill.level}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          aria-label={`${skill.name} skill level: ${skill.level}%`}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-slate-900/70 backdrop-blur-md border border-blue-500/30 p-6 sm:p-8 shadow-lg shadow-blue-500/10">
            <h3 className="text-xl sm:text-2xl mb-6 sm:mb-8 text-blue-400 font-mono text-center">
              {'> CERTIFICATIONS'}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
              {[
                { name: 'HTB CWES', org: 'Hack The Box' },
                { name: 'CRTA', org: 'Certified Red Team Analyst' },
                { name: 'ISO 27001', org: 'Lead Auditor' },
                { name: 'eJPT', org: 'eLearnSecurity' },
                { name: 'FLTI', org: 'Threat Intelligence' },
              ].map((cert, idx) => (
                <div key={idx} className="border border-blue-500/30 p-3 sm:p-4 bg-slate-900/50 backdrop-blur-sm hover:border-blue-400 active:border-blue-400 transition-all text-center touch-manipulation min-h-[80px] flex flex-col items-center justify-center">
                  <div className="text-blue-400 font-mono mb-1 sm:mb-2 text-xs sm:text-sm">{cert.name}</div>
                  <div className="text-blue-200 font-mono text-xs">{cert.org}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 sm:mt-8 bg-slate-900/70 backdrop-blur-md border border-blue-500/30 p-6 sm:p-8 shadow-lg shadow-blue-500/10">
            <h3 className="text-lg sm:text-xl mb-4 sm:mb-6 text-blue-400 font-mono text-center">
              {'> PROFESSIONAL_EXPERIENCE'}
            </h3>
            <div className="space-y-3 sm:space-y-4 text-blue-200 font-mono text-sm sm:text-base max-w-4xl mx-auto">
              <div className="text-center text-blue-400 text-sm sm:text-base">
                {'>> Building expertise in cybersecurity through continuous learning and practical projects'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

