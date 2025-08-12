import { ArrowRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import {
  CodeBracketIcon,
  RocketLaunchIcon,
  LightBulbIcon,
  UserCircleIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { lusitana } from "@/app/ui/fonts";
import Image from "next/image";

export default function Page() {
  return (
    <main className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Portfolio
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-blue-400 transition-colors">
                Home
              </a>
              <a
                href="#about"
                className="hover:text-blue-400 transition-colors"
              >
                About
              </a>
              <a
                href="#skills"
                className="hover:text-blue-400 transition-colors"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="hover:text-blue-400 transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="hover:text-blue-400 transition-colors"
              >
                Contact
              </a>
            </div>
            <Link
              href="/login"
              className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all"
            >
              Dashboard
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-6 pt-20"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1
                className={`${lusitana.className} text-5xl md:text-7xl font-bold leading-tight`}
              >
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Aljaffarsyah
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-300">
                Full Stack Developer & UI/UX Designer
              </p>
              <p className="text-lg text-slate-400 max-w-lg">
                I create exceptional digital experiences that combine beautiful
                design with powerful functionality. Passionate about turning
                ideas into reality through code.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#projects"
                className="flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105"
              >
                <span>View My Work</span>
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link
                href="#contact"
                className="flex items-center justify-center gap-3 border-2 border-slate-600 px-8 py-4 rounded-lg font-semibold hover:border-blue-400 hover:text-blue-400 transition-all"
              >
                <span>Get In Touch</span>
                <EnvelopeIcon className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-gradient-to-r from-blue-500/20 to-purple-600/20 p-8 rounded-2xl backdrop-blur-sm border border-slate-700/50">
              <div className="w-full h-80 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl flex items-center justify-center">
                <UserCircleIcon className="w-32 h-32 text-slate-600" />
              </div>
            </div>
            <div className="absolute top-4 right-4 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-4 left-4 w-48 h-48 bg-gradient-to-r from-pink-500/10 to-orange-500/10 rounded-full blur-2xl"></div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDownIcon className="w-8 h-8 text-slate-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className={`${lusitana.className} text-4xl md:text-5xl font-bold mb-6`}
            >
              About <span className="text-blue-400">Me</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              A passionate developer with expertise in modern web technologies,
              dedicated to creating innovative solutions and exceptional user
              experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all">
              <CodeBracketIcon className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Development</h3>
              <p className="text-slate-300">
                Expert in React, Next.js, Node.js, and modern web technologies.
                Building scalable applications with clean, maintainable code.
              </p>
            </div>

            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50 hover:border-purple-500/50 transition-all">
              <LightBulbIcon className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Design</h3>
              <p className="text-slate-300">
                Creating intuitive user interfaces with focus on user
                experience, accessibility, and modern design principles.
              </p>
            </div>

            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50 hover:border-pink-500/50 transition-all">
              <RocketLaunchIcon className="w-12 h-12 text-pink-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-slate-300">
                Always exploring new technologies and methodologies to deliver
                cutting-edge solutions that exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className={`${lusitana.className} text-4xl md:text-5xl font-bold mb-6`}
            >
              My <span className="text-purple-400">Skills</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "React/Next.js", level: 95, color: "blue" },
              { name: "TypeScript", level: 90, color: "indigo" },
              { name: "Node.js", level: 85, color: "green" },
              { name: "UI/UX Design", level: 80, color: "purple" },
              { name: "TailwindCSS", level: 95, color: "cyan" },
              { name: "PostgreSQL", level: 75, color: "blue" },
              { name: "AWS/Cloud", level: 70, color: "orange" },
              { name: "Git/GitHub", level: 90, color: "red" },
            ].map((skill, index) => (
              <div
                key={index}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50"
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold">{skill.name}</span>
                  <span className="text-sm text-slate-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div
                    className={`bg-gradient-to-r from-${skill.color}-500 to-${skill.color}-400 h-2 rounded-full transition-all duration-1000`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className={`${lusitana.className} text-4xl md:text-5xl font-bold mb-6`}
          >
            Let's <span className="text-blue-400">Connect</span>
          </h2>
          <p className="text-xl text-slate-300 mb-12">
            Ready to bring your ideas to life? Let's discuss your next project.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50">
              <EnvelopeIcon className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email Me</h3>
              <p className="text-slate-300">hello@aljaffar.dev</p>
            </div>

            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50">
              <PhoneIcon className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Call Me</h3>
              <p className="text-slate-300">+62 123 456 7890</p>
            </div>
          </div>

          <Link
            href="/login"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105"
          >
            <span>Access Dashboard</span>
            <ArrowRightIcon className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-700/50">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-400">
            © 2025 Al Jaffar Syah. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
