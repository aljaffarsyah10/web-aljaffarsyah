"use client";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRightIcon,
  EnvelopeIcon,
  SparklesIcon,
  StarIcon,
} from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useTheme } from "@/app/ui/ThemeProvider";
import { lusitana } from "@/app/ui/fonts";

export default function HeroSection() {
  const { theme } = useTheme();
  return (
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
          <div
            className={
              theme === "dark"
                ? "inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-full backdrop-blur-sm"
                : "inline-flex items-center gap-2 px-4 py-2 bg-white/60 border border-blue-200 rounded-full backdrop-blur-xl shadow-md"
            }
          >
            <SparklesIcon
              className={
                theme === "dark"
                  ? "w-4 h-4 text-yellow-400"
                  : "w-4 h-4 text-yellow-500"
              }
            />
            <span
              className={
                theme === "dark"
                  ? "text-sm text-slate-300"
                  : "text-sm text-blue-700 font-semibold"
              }
            >
              Available for freelance projects
            </span>
          </div>

          <div className="space-y-6">
            <h1
              className={`${lusitana.className} text-6xl md:text-8xl font-bold leading-tight drop-shadow-xl`}
            >
              <span className="block">Hi, I&apos;m</span>
              <span className="bg-gradient-to-r from-blue-600 via-pink-500 to-purple-400 bg-clip-text text-transparent block">
                Aljaffarsyah
              </span>
            </h1>
            <div className="space-y-4">
              <p
                className={
                  theme === "dark"
                    ? "text-2xl md:text-3xl text-slate-200 font-light"
                    : "text-2xl md:text-3xl text-blue-700 font-bold drop-shadow-md"
                }
              >
                Full Stack Developer
              </p>
              <p
                className={
                  theme === "dark"
                    ? "text-xl text-slate-300 font-light"
                    : "text-xl text-pink-500 font-semibold"
                }
              >
                & UI/UX Design Specialist
              </p>
              <p
                className={
                  theme === "dark"
                    ? "text-lg text-slate-400 max-w-lg leading-relaxed"
                    : "text-lg text-blue-900 max-w-lg leading-relaxed bg-white/80 rounded-xl p-4 shadow-lg border border-blue-100"
                }
              >
                I craft exceptional digital experiences that seamlessly blend
                stunning design with cutting-edge technology. Transforming bold
                ideas into powerful, scalable solutions that drive real business
                results.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6">
            <Link
              href="#portfolio"
              className="group relative flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-pink-400 px-8 py-4 rounded-xl font-bold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/25 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative">Explore My Work</span>
              <ArrowRightIcon className="relative w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#contact"
              className="group flex items-center justify-center gap-3 border-2 border-blue-300 px-8 py-4 rounded-xl font-bold hover:border-pink-400 hover:bg-pink-100/20 transition-all duration-300 text-blue-700 bg-white"
            >
              <span>Let&apos;s Connect</span>
              <EnvelopeIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="relative">
          {/* Main Profile Card */}
          <div
            className={
              theme === "dark"
                ? "bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-8 rounded-3xl backdrop-blur-sm border border-slate-700/50 shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 group-hover:scale-105"
                : "bg-white/90 p-8 rounded-3xl backdrop-blur-md border border-blue-100 shadow-2xl hover:shadow-pink-500/10 transition-all duration-500 group-hover:scale-105"
            }
          >
            <div
              className={
                theme === "dark"
                  ? "w-full h-[450px] bg-gradient-to-br from-slate-800/30 to-slate-900/30 rounded-2xl flex items-center justify-center relative overflow-hidden backdrop-blur-sm"
                  : "w-full h-[450px] bg-gradient-to-br from-blue-100/40 to-pink-100/40 rounded-2xl flex items-center justify-center relative overflow-hidden backdrop-blur-sm"
              }
            >
              <Image
                src="/profile.png"
                alt="Profile - Aljaffarsyah"
                width={450}
                height={450}
                className="rounded-2xl object-cover w-full h-full drop-shadow-2xl border-2 border-blue-100"
                priority
              />
              <div
                className={
                  theme === "dark"
                    ? "absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent pointer-events-none"
                    : "absolute inset-0 bg-gradient-to-t from-pink-200/20 to-transparent pointer-events-none"
                }
              ></div>
            </div>
            {/* Profile Info */}
            <div className="mt-6 text-center">
              <h3
                className={
                  theme === "dark"
                    ? "text-2xl font-bold text-white mb-2"
                    : "text-2xl font-bold text-blue-700 mb-2"
                }
              >
                Aljaffarsyah
              </h3>
              <p
                className={
                  theme === "dark"
                    ? "text-blue-400 mb-4"
                    : "text-pink-500 mb-4 font-semibold"
                }
              >
                Full Stack Developer
              </p>
              <div className="flex justify-center items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <span
                  className={
                    theme === "dark"
                      ? "text-sm text-slate-400"
                      : "text-sm text-blue-400 font-semibold"
                  }
                >
                  (4.9/5.0)
                </span>
              </div>
            </div>
          </div>
          {/* Floating Elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-slate-400 uppercase tracking-widest dark:text-slate-400 text-blue-700">
            Scroll Down
          </span>
          <ChevronDownIcon className="w-6 h-6 text-slate-400 dark:text-slate-400 text-blue-700" />
        </div>
      </div>
    </section>
  );
}
