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
    <section id="skills" className="py-20 border-t border-blue-500/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl text-center mb-4 text-blue-400 font-mono glitch-effect">
            {'> SKILL_SET'}
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-center text-blue-200 mb-16 max-w-2xl mx-auto font-mono text-sm">
            {'>> Comprehensive arsenal of security tools, methodologies, and technical expertise across multiple domains.'}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="bg-slate-900/70 backdrop-blur-md border border-blue-500/30 p-6 shadow-lg shadow-blue-500/10">
                <h3 className="text-lg mb-6 text-blue-400 font-mono">
                  {'> '}{skillGroup.category}
                </h3>
                <div className="space-y-4">
                  {skillGroup.items.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-blue-200 font-mono text-xs">{skill.name}</span>
                        <span className="text-blue-400 font-mono text-xs">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-950/50 border border-blue-500/30 h-2 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-1000 shadow-lg shadow-blue-500/50"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-slate-900/70 backdrop-blur-md border border-blue-500/30 p-8 shadow-lg shadow-blue-500/10">
            <h3 className="text-2xl mb-8 text-blue-400 font-mono text-center">
              {'> CERTIFICATIONS'}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="border border-blue-500/30 p-4 bg-slate-900/50 backdrop-blur-sm hover:border-blue-400 transition-all text-center">
                <div className="text-blue-400 font-mono mb-2 text-sm">HTB CWES</div>
                <div className="text-blue-200 font-mono text-xs">Hack The Box</div>
              </div>
              <div className="border border-blue-500/30 p-4 bg-slate-900/50 backdrop-blur-sm hover:border-blue-400 transition-all text-center">
                <div className="text-blue-400 font-mono mb-2 text-sm">CRTA</div>
                <div className="text-blue-200 font-mono text-xs">Certified Red Team Analyst</div>
              </div>
              <div className="border border-blue-500/30 p-4 bg-slate-900/50 backdrop-blur-sm hover:border-blue-400 transition-all text-center">
                <div className="text-blue-400 font-mono mb-2 text-sm">ISO 27001</div>
                <div className="text-blue-200 font-mono text-xs">Lead Auditor</div>
              </div>
              <div className="border border-blue-500/30 p-4 bg-slate-900/50 backdrop-blur-sm hover:border-blue-400 transition-all text-center">
                <div className="text-blue-400 font-mono mb-2 text-sm">eJPT</div>
                <div className="text-blue-200 font-mono text-xs">eLearnSecurity</div>
              </div>
              <div className="border border-blue-500/30 p-4 bg-slate-900/50 backdrop-blur-sm hover:border-blue-400 transition-all text-center">
                <div className="text-blue-400 font-mono mb-2 text-sm">FLTI</div>
                <div className="text-blue-200 font-mono text-xs">Threat Intelligence</div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-slate-900/70 backdrop-blur-md border border-blue-500/30 p-8 shadow-lg shadow-blue-500/10">
            <h3 className="text-xl mb-6 text-blue-400 font-mono text-center">
              {'> PROFESSIONAL_EXPERIENCE'}
            </h3>
            <div className="space-y-4 text-blue-200 font-mono text-sm max-w-4xl mx-auto">
              <div>
                <div className="text-blue-400 mb-2">{'>> Hatton National Bank (HNB) - Undergraduate Trainee | Sep 2024 - Present'}</div>
                <ul className="space-y-1 text-xs pl-4">
                  <li>{'• Lead daily security operations including threat intelligence monitoring and incident response'}</li>
                  <li>{'• Execute comprehensive application security assessments (mobile & web penetration testing)'}</li>
                  <li>{'• Delivered RASP solution security clearance and SASE implementation revalidation'}</li>
                  <li>{'• Participate in advanced adversary simulation exercises and red teaming operations'}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
