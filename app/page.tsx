import {
  ArrowRightIcon,
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  CodeBracketIcon,
  RocketLaunchIcon,
  LightBulbIcon,
  UserCircleIcon,
  EnvelopeIcon,
  PhoneIcon,
  StarIcon,
  CheckIcon,
  PlayIcon,
  SparklesIcon,
  CubeTransparentIcon,
  BoltIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import Image from "next/image";
import { lusitana } from "@/app/ui/fonts";

export default function Page() {
  return (
    <main className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/90 backdrop-blur-lg border-b border-slate-800/50 shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Aljaffarsyah
              </span>
              {/* <span className="text-white">Syah</span>0 */}
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="relative group py-2">
                <span className="hover:text-blue-400 transition-colors">
                  Home
                </span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"></div>
              </a>
              <a href="#about" className="relative group py-2">
                <span className="hover:text-blue-400 transition-colors">
                  About
                </span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"></div>
              </a>
              <a href="#skills" className="relative group py-2">
                <span className="hover:text-blue-400 transition-colors">
                  Skills
                </span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"></div>
              </a>
              <a href="#portfolio" className="relative group py-2">
                <span className="hover:text-blue-400 transition-colors">
                  Portfolio
                </span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"></div>
              </a>
              <a href="#testimonials" className="relative group py-2">
                <span className="hover:text-blue-400 transition-colors">
                  Testimonials
                </span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"></div>
              </a>
              <a href="#contact" className="relative group py-2">
                <span className="hover:text-blue-400 transition-colors">
                  Contact
                </span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"></div>
              </a>
            </div>
            <Link
              href="/dashboard"
              className="relative group bg-gradient-to-r from-blue-600 to-purple-700 px-6 py-3 rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/25 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative">Dashboard</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center px-6 pt-20"
      >
        {/* Floating Elements */}
        <div className="absolute top-32 left-10 animate-float">
          <div className="w-4 h-4 bg-blue-400 rounded-full opacity-60"></div>
        </div>
        <div className="absolute top-48 right-20 animate-float delay-1000">
          <div className="w-6 h-6 bg-purple-400 rounded-full opacity-40"></div>
        </div>
        <div className="absolute bottom-32 left-20 animate-float delay-2000">
          <div className="w-3 h-3 bg-pink-400 rounded-full opacity-50"></div>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-full backdrop-blur-sm">
              <SparklesIcon className="w-4 h-4 text-yellow-400" />
              <span className="text-sm text-slate-300">
                Available for freelance projects
              </span>
            </div>

            <div className="space-y-6">
              <h1
                className={`${lusitana.className} text-6xl md:text-8xl font-bold leading-tight`}
              >
                <span className="block">Hi, I&apos;m</span>
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent block">
                  Aljaffarsyah
                </span>
              </h1>

              <div className="space-y-4">
                <p className="text-2xl md:text-3xl text-slate-200 font-light">
                  Premium Full Stack Developer
                </p>
                <p className="text-xl text-slate-300 font-light">
                  & UI/UX Design Specialist
                </p>
                <p className="text-lg text-slate-400 max-w-lg leading-relaxed">
                  I craft exceptional digital experiences that seamlessly blend
                  stunning design with cutting-edge technology. Transforming
                  bold ideas into powerful, scalable solutions that drive real
                  business results.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-6">
              {/* <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">50+</div>
                <div className="text-sm text-slate-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">5+</div>
                <div className="text-sm text-slate-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400">98%</div>
                <div className="text-sm text-slate-400">
                  Client Satisfaction
                </div>
              </div> */}
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                href="#portfolio"
                className="group relative flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-purple-700 px-8 py-4 rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative">Explore My Work</span>
                <ArrowRightIcon className="relative w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="#contact"
                className="group flex items-center justify-center gap-3 border-2 border-slate-600 px-8 py-4 rounded-xl font-semibold hover:border-blue-400 hover:bg-blue-400/10 transition-all duration-300"
              >
                <span>Let&apos;s Connect</span>
                <EnvelopeIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="relative">
            {/* Main Profile Card */}
            <div className="relative z-10 group">
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-8 rounded-3xl backdrop-blur-sm border border-slate-700/50 shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 group-hover:scale-105">
                <div className="w-full h-[450px] bg-gradient-to-br from-slate-800/30 to-slate-900/30 rounded-2xl flex items-center justify-center relative overflow-hidden backdrop-blur-sm">
                  <Image
                    src="/profile.png"
                    alt="Profile - Al Jaffarsyah"
                    width={450}
                    height={450}
                    className="rounded-2xl object-cover w-full h-full drop-shadow-2xl"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent pointer-events-none"></div>
                </div>

                {/* Profile Info */}
                <div className="mt-6 text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Al Jaffarsyah
                  </h3>
                  <p className="text-blue-400 mb-4">Full Stack Developer</p>
                  <div className="flex justify-center items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon
                          key={i}
                          className="w-4 h-4 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                    <span className="text-sm text-slate-400">(4.9/5.0)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>

            {/* Tech Stack Pills */}
            <div className="absolute -left-4 top-1/4 space-y-3">
              <div className="bg-slate-800/90 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-700/50 text-sm animate-float">
                React
              </div>
              <div className="bg-slate-800/90 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-700/50 text-sm animate-float delay-500">
                Next.js
              </div>
            </div>

            <div className="absolute -right-4 top-2/3 space-y-3">
              <div className="bg-slate-800/90 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-700/50 text-sm animate-float delay-1000">
                TypeScript
              </div>
              <div className="bg-slate-800/90 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-700/50 text-sm animate-float delay-1500">
                Node.js
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-slate-400 uppercase tracking-widest">
              Scroll Down
            </span>
            <ChevronDownIcon className="w-6 h-6 text-slate-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-full backdrop-blur-sm mb-6">
              <UserCircleIcon className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-slate-300">About Me</span>
            </div>
            <h2
              className={`${lusitana.className} text-5xl md:text-6xl font-bold mb-8`}
            >
              Crafting Digital{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Excellence
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              A passionate developer with expertise in modern web technologies,
              dedicated to creating innovative solutions that push the
              boundaries of what&apos;s possible in the digital realm.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-slate-700/50 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-500 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <CodeBracketIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Development Excellence
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Expert in React, Next.js, Node.js, and cutting-edge web
                  technologies. Building scalable, performant applications with
                  clean, maintainable architecture.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                    React
                  </span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                    Next.js
                  </span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                    TypeScript
                  </span>
                </div>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-slate-700/50 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-500 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <LightBulbIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Design Innovation
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Creating intuitive, stunning user interfaces with a focus on
                  exceptional user experience, accessibility, and modern design
                  principles.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">
                    UI/UX
                  </span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">
                    Figma
                  </span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">
                    Framer
                  </span>
                </div>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-slate-700/50 backdrop-blur-sm hover:border-pink-500/50 transition-all duration-500 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-600/5 to-orange-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <RocketLaunchIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Innovation Catalyst
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Always exploring emerging technologies and methodologies to
                  deliver cutting-edge solutions that exceed expectations and
                  drive business growth.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-pink-500/20 text-pink-400 rounded-full text-sm">
                    AI/ML
                  </span>
                  <span className="px-3 py-1 bg-pink-500/20 text-pink-400 rounded-full text-sm">
                    Cloud
                  </span>
                  <span className="px-3 py-1 bg-pink-500/20 text-pink-400 rounded-full text-sm">
                    DevOps
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Achievement Highlights */}
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-slate-700/50 backdrop-blur-sm">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-400 mb-2">99%</div>
                <div className="text-slate-400">Project Success Rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-400 mb-2">
                  24/7
                </div>
                <div className="text-slate-400">Support Available</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-pink-400 mb-2">48h</div>
                <div className="text-slate-400">Average Response Time</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-400 mb-2">
                  100+
                </div>
                <div className="text-slate-400">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 bg-slate-950/50 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-full backdrop-blur-sm mb-6">
              <BoltIcon className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-slate-300">
                Technical Expertise
              </span>
            </div>
            <h2
              className={`${lusitana.className} text-5xl md:text-6xl font-bold mb-8`}
            >
              My Technical{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Arsenal
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Proficiency across the full technology stack, from frontend
              frameworks to backend architectures and cloud deployments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                category: "Frontend Development",
                skills: [
                  { name: "React/Next.js", level: 98, color: "blue" },
                  { name: "TypeScript", level: 95, color: "blue" },
                  { name: "TailwindCSS", level: 97, color: "cyan" },
                  { name: "Framer Motion", level: 90, color: "blue" },
                ],
              },
              {
                category: "Backend Development",
                skills: [
                  { name: "Node.js", level: 92, color: "green" },
                  { name: "Python", level: 88, color: "green" },
                  { name: "PostgreSQL", level: 85, color: "blue" },
                  { name: "MongoDB", level: 83, color: "green" },
                ],
              },
              {
                category: "Cloud & DevOps",
                skills: [
                  { name: "AWS/Vercel", level: 87, color: "orange" },
                  { name: "Docker", level: 82, color: "blue" },
                  { name: "Git/GitHub", level: 95, color: "gray" },
                  { name: "CI/CD", level: 80, color: "purple" },
                ],
              },
              {
                category: "Design & UX",
                skills: [
                  { name: "UI/UX Design", level: 92, color: "purple" },
                  { name: "Figma", level: 90, color: "purple" },
                  { name: "Adobe Creative", level: 85, color: "red" },
                  { name: "Prototyping", level: 88, color: "pink" },
                ],
              },
              {
                category: "Emerging Tech",
                skills: [
                  { name: "AI/ML Integration", level: 78, color: "green" },
                  { name: "Web3/Blockchain", level: 75, color: "yellow" },
                  { name: "PWA Development", level: 92, color: "indigo" },
                  { name: "GraphQL", level: 85, color: "pink" },
                ],
              },
              {
                category: "Soft Skills",
                skills: [
                  { name: "Project Management", level: 95, color: "blue" },
                  { name: "Client Communication", level: 98, color: "green" },
                  { name: "Problem Solving", level: 96, color: "purple" },
                  { name: "Team Leadership", level: 90, color: "orange" },
                ],
              },
            ].map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-slate-700/50 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-500"
              >
                <h3 className="text-xl font-bold mb-6 text-white group-hover:text-purple-400 transition-colors">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-slate-200">
                          {skill.name}
                        </span>
                        <span className="text-sm text-slate-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                        <div
                          className={`bg-gradient-to-r from-${skill.color}-500 to-${skill.color}-400 h-2 rounded-full transition-all duration-1000 hover:shadow-lg hover:shadow-${skill.color}-500/50`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-slate-700/50 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-8 text-center text-white">
              Certifications & Recognition
            </h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <CheckIcon className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-white mb-2">AWS Certified</h4>
                <p className="text-sm text-slate-400">
                  Cloud Solutions Architect
                </p>
              </div>
              <div className="group">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <CheckIcon className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-white mb-2">Google UX</h4>
                <p className="text-sm text-slate-400">Design Professional</p>
              </div>
              <div className="group">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <CheckIcon className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-white mb-2">Meta Frontend</h4>
                <p className="text-sm text-slate-400">Developer Professional</p>
              </div>
              <div className="group">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <CheckIcon className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-white mb-2">
                  Agile Certified
                </h4>
                <p className="text-sm text-slate-400">Scrum Master</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-full backdrop-blur-sm mb-6">
              <CubeTransparentIcon className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-slate-300">Featured Work</span>
            </div>
            <h2
              className={`${lusitana.className} text-5xl md:text-6xl font-bold mb-8`}
            >
              Portfolio{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Showcase
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              A curated selection of my most impactful projects, showcasing
              innovation, technical excellence, and results-driven solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "E-Commerce Platform",
                description: "Full-stack marketplace with advanced analytics",
                tech: ["Next.js", "Stripe", "PostgreSQL"],
                image: "🛒",
                gradient: "from-blue-500 to-purple-600",
              },
              {
                title: "AI-Powered Dashboard",
                description:
                  "Data visualization with machine learning insights",
                tech: ["React", "Python", "TensorFlow"],
                image: "🤖",
                gradient: "from-purple-500 to-pink-600",
              },
              {
                title: "Real-time Chat App",
                description: "Scalable messaging platform with video calls",
                tech: ["Next.js", "Socket.io", "WebRTC"],
                image: "💬",
                gradient: "from-green-500 to-blue-600",
              },
              {
                title: "Fintech Mobile App",
                description: "Banking solution with biometric security",
                tech: ["React Native", "Node.js", "Blockchain"],
                image: "💳",
                gradient: "from-orange-500 to-red-600",
              },
              {
                title: "SaaS Management Tool",
                description: "Enterprise project management solution",
                tech: ["Next.js", "GraphQL", "MongoDB"],
                image: "📊",
                gradient: "from-cyan-500 to-blue-600",
              },
              {
                title: "Healthcare Platform",
                description: "Telemedicine app with appointment system",
                tech: ["React", "Node.js", "Socket.io"],
                image: "🏥",
                gradient: "from-emerald-500 to-teal-600",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-2xl border border-slate-700/50 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-500 hover:scale-105 cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative">
                  <div
                    className={`w-full h-48 bg-gradient-to-br ${project.gradient} rounded-xl flex items-center justify-center mb-6 text-6xl`}
                  >
                    {project.image}
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm border border-slate-600/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <button className="text-blue-400 hover:text-blue-300 font-semibold transition-colors">
                      View Project →
                    </button>
                    <div className="flex gap-2">
                      <button className="w-8 h-8 bg-slate-700/50 hover:bg-slate-600/50 rounded-full flex items-center justify-center transition-colors">
                        <PlayIcon className="w-4 h-4 text-slate-300" />
                      </button>
                      <button className="w-8 h-8 bg-slate-700/50 hover:bg-slate-600/50 rounded-full flex items-center justify-center transition-colors">
                        <ArrowRightIcon className="w-4 h-4 text-slate-300" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-700 px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105 transition-all duration-300"
            >
              <span>View All Projects</span>
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="py-32 px-6 bg-slate-950/50 relative"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-full backdrop-blur-sm mb-6">
              <StarIcon className="w-4 h-4 text-yellow-400" />
              <span className="text-sm text-slate-300">
                Client Testimonials
              </span>
            </div>
            <h2
              className={`${lusitana.className} text-5xl md:text-6xl font-bold mb-8`}
            >
              What Clients{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Say
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Don&apos;t just take my word for it. Here&apos;s what industry
              leaders and satisfied clients have to say about working with me.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO, TechStart Inc.",
                content:
                  "Exceptional work quality and attention to detail. Al delivered our e-commerce platform ahead of schedule with features we didn't even know we needed.",
                rating: 5,
                avatar: "👩‍💼",
              },
              {
                name: "Michael Chen",
                role: "CTO, DataFlow Solutions",
                content:
                  "Outstanding technical expertise and problem-solving skills. The AI dashboard he built has revolutionized how we analyze our data.",
                rating: 5,
                avatar: "👨‍💻",
              },
              {
                name: "Emily Rodriguez",
                role: "Product Manager, FinanceHub",
                content:
                  "Professional, reliable, and incredibly talented. Al transformed our vision into a stunning, user-friendly application that our customers love.",
                rating: 5,
                avatar: "👩‍🚀",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-slate-700/50 backdrop-blur-sm hover:border-yellow-500/50 transition-all duration-500 hover:scale-105"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-2xl mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-slate-400">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <p className="text-slate-300 leading-relaxed italic">
                  &quot;{testimonial.content}&quot;
                </p>
              </div>
            ))}
          </div>

          {/* Client Logos */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-8 text-white">
              Trusted by Industry Leaders
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60">
              {["🏢", "🚀", "💼", "🏪"].map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center h-16 text-4xl hover:opacity-100 transition-opacity"
                >
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-full backdrop-blur-sm mb-6">
              <EnvelopeIcon className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-slate-300">Get In Touch</span>
            </div>
            <h2
              className={`${lusitana.className} text-5xl md:text-6xl font-bold mb-8`}
            >
              Let&apos;s Create{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Something Amazing
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Ready to transform your ideas into reality? Let&apos;s discuss
              your project and explore how we can build something extraordinary
              together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-slate-700/50 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-500">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <EnvelopeIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Email Me</h3>
                    <p className="text-slate-400">For project inquiries</p>
                  </div>
                </div>
                <p className="text-blue-400 font-semibold text-lg">
                  hello@aljaffarsyah.dev
                </p>
                <p className="text-slate-400 text-sm mt-2">
                  Response within 2-4 hours
                </p>
              </div>

              <div className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-slate-700/50 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-500">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <PhoneIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Call Me</h3>
                    <p className="text-slate-400">For urgent matters</p>
                  </div>
                </div>
                <p className="text-purple-400 font-semibold text-lg">
                  +62 123 456 7890
                </p>
                <p className="text-slate-400 text-sm mt-2">
                  Available 9 AM - 6 PM (UTC+7)
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-slate-700/50 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-6">
                Send me a message
              </h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/25 transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/25 transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/25 transition-all"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">
                    Project Details
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/25 transition-all resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-700 px-8 py-4 rounded-xl font-semibold text-white hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-blue-600/10 to-purple-600/10 p-12 rounded-2xl border border-slate-700/50">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Join the hundreds of satisfied clients who have transformed their
              ideas into successful digital products.
            </p>
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-700 px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105 transition-all duration-300"
            >
              <span>View Dashboard</span>
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-slate-800/50 bg-slate-950/80">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2">
              <div className="text-3xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Aljaffar
                </span>
                <span className="text-white">Syah</span>
              </div>
              <p className="text-slate-400 max-w-md leading-relaxed">
                Crafting exceptional digital experiences through innovative
                design and cutting-edge development. Let&apos;s build something
                amazing together.
              </p>
              <div className="flex gap-4 mt-6">
                <a
                  href="#"
                  className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                >
                  <span className="text-sm">💼</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-slate-800 hover:bg-purple-600 rounded-lg flex items-center justify-center transition-colors"
                >
                  <span className="text-sm">🐙</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-slate-800 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-colors"
                >
                  <span className="text-sm">📷</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-slate-800 hover:bg-cyan-600 rounded-lg flex items-center justify-center transition-colors"
                >
                  <span className="text-sm">🐦</span>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a
                    href="#home"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="hover:text-blue-400 transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#portfolio"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Mobile Apps
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    UI/UX Design
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Consulting
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Maintenance
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800/50 text-center">
            <p className="text-slate-400">
              © 2025 Al Jaffar Syah. All rights reserved. | Crafted with ❤️ and
              cutting-edge technology
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
