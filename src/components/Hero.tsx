import { useEffect, useState, useRef } from "react";
import { ArrowDown, Github, Linkedin, Mail } from "./Icons";

/* ===============================
   Typewriter Hook
================================ */
function useTypewriter(text: string, speed = 20, start = true) {
  const [output, setOutput] = useState("");
  const [done, setDone] = useState(false);
  const hasCompletedRef = useRef(false);
  const textRef = useRef(text);

  // Update text ref when text changes
  useEffect(() => {
    textRef.current = text;
  }, [text]);

  useEffect(() => {
    // If already completed, set output to full text and return
    if (hasCompletedRef.current) {
      if (output !== textRef.current) {
        setOutput(textRef.current);
        setDone(true);
      }
      return;
    }

    // Don't start if start is false
    if (!start) return;

    let i = 0;
    const interval = setInterval(() => {
      if (i < textRef.current.length) {
        setOutput((prev) => prev + textRef.current.charAt(i));
        i++;
      } else {
        clearInterval(interval);
        setDone(true);
        hasCompletedRef.current = true;
      }
    }, speed);

    return () => clearInterval(interval);
  }, [speed, start]);

  return { output, done };
}

/* ===============================
   Hero Component
================================ */
export function Hero() {
  const terminalRef = useRef<HTMLDivElement>(null);

  const { output: whoamiText, done: whoamiDone } = useTypewriter(
    `Passionate and results-driven Cyber Security professional with practical experience in security operations,
application testing, and risk management within the financial sector.
Skilled in vulnerability assessment, incident response, and security architecture validation.`,
    18,
    true
  );

  const { output: roleText } = useTypewriter(
    `Aspiring Cyber Security professional focused on security operations,
application testing, and risk management.
Actively developing skills in vulnerability assessment, incident response,
and security architecture.`,
    18,
    whoamiDone
  );

  /* Auto-scroll like a real terminal */
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [whoamiText, roleText]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24">
        <div className="max-w-7xl mx-auto">

          {/* MAIN LAYOUT */}
          <div className="flex flex-col lg:flex-row items-start gap-8 sm:gap-10 lg:gap-16">

            {/* LEFT SIDE */}
            <div className="flex-1 text-center lg:text-left w-full lg:w-auto">
              <div className="mb-6 sm:mb-8">
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 mx-auto lg:mx-0 mb-4 sm:mb-6 border-2 border-blue-400 flex items-center justify-center text-blue-400 text-3xl sm:text-4xl md:text-5xl font-mono bg-slate-900/50">
                  {'>'}_
                </div>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[12rem] text-blue-400 font-mono leading-tight sm:leading-none break-words mb-8 lg:mb-0">
                {'> '}
                <span className="text-cyan-300 block sm:inline">
                  GANGUL WEERASINGHE
                </span>
              </h1>
            </div>

            {/* RIGHT SIDE — TERMINAL (LARGER SIZE) */}
            <div className="self-start shrink-0 w-full lg:w-auto mx-auto lg:mx-0 mt-0 lg:mt-0">
              <div
                ref={terminalRef}
                className="
                  bg-slate-900/70
                  border border-blue-500/30
                  p-6 sm:p-7 md:p-8 rounded-lg
                  font-mono text-sm sm:text-base md:text-lg text-left
                  shadow-lg shadow-blue-500/10

                  h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px]
                  w-full
                  lg:w-[650px] xl:w-[700px]
                  overflow-y-auto
                  overflow-x-hidden
                  box-border
                "
              >
                <div className="text-blue-400 mb-2 text-base sm:text-lg md:text-xl">
                  <span className="text-cyan-300">{'>'}</span> whoami
                </div>

                <div className="text-blue-200 mb-4 whitespace-pre-line break-words overflow-wrap-anywhere text-sm sm:text-base md:text-lg leading-relaxed">
                  {whoamiText}
                  {!whoamiDone && <span className="animate-pulse">▌</span>}
                </div>

                {whoamiDone && (
                  <>
                    <div className="text-blue-400 mb-2 text-base sm:text-lg md:text-xl">
                      <span className="text-cyan-300">{'>'}</span> cat current_role.txt
                    </div>

                    <div className="text-blue-200 mb-4 whitespace-pre-line break-words overflow-wrap-anywhere text-sm sm:text-base md:text-lg leading-relaxed">
                      {roleText}
                      <span className="animate-pulse">▌</span>
                    </div>
                  </>
                )}

                <div className="text-blue-400 text-base sm:text-lg md:text-xl">
                  <span className="text-cyan-300">{'>'}</span>{" "}
                  <span className="animate-pulse">_</span>
                </div>
              </div>
            </div>
          </div>

          {/* SOCIALS */}
          <div className="flex justify-center gap-6 sm:gap-8 mt-10 sm:mt-12 md:mt-16">
            <a href="https://github.com/ganguls" className="text-blue-400 hover:text-cyan-300 transition-colors" aria-label="GitHub Profile">
              <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
                <Github size={28} />
              </div>
            </a>
            <a href="https://linkedin.com" className="text-blue-400 hover:text-cyan-300 transition-colors" aria-label="LinkedIn Profile">
              <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
                <Linkedin size={28} />
              </div>
            </a>
            <a href="mailto:gangulsw@gmail.com" className="text-blue-400 hover:text-cyan-300 transition-colors" aria-label="Email Contact">
              <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
                <Mail size={28} />
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <a
        href="#about"
        className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 text-blue-400 animate-bounce"
      >
        <div className="w-6 h-6 sm:w-8 sm:h-8">
          <ArrowDown size={24} />
        </div>
      </a>
    </section>
  );
}
