"use client";
import Link from "next/link";
import { useTheme } from "@/app/ui/ThemeProvider";

export default function Navigation() {
  const { theme, setTheme } = useTheme();
  return (
    <nav
      className={
        theme === "dark"
          ? "fixed top-0 w-full z-50 bg-slate-950/90 backdrop-blur-lg border-b border-slate-800/50 shadow-2xl"
          : "fixed top-0 w-full z-50 bg-white/90 backdrop-blur-2xl border-b border-blue-200 shadow-2xl"
      }
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">
            <span
              className={
                theme === "dark"
                  ? "bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                  : "bg-gradient-to-r from-blue-600 via-pink-500 to-purple-400 bg-clip-text text-transparent drop-shadow-lg"
              }
            >
              Aljaffarsyah
            </span>
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
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={
                theme === "dark"
                  ? "px-3 py-2 rounded-lg border border-slate-700 bg-slate-800 text-white hover:bg-slate-700 transition-colors"
                  : "px-3 py-2 rounded-lg border border-blue-300 bg-white text-blue-700 hover:bg-blue-100 transition-colors shadow-md"
              }
              aria-label="Toggle theme"
            >
              {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
            </button>
            <Link
              href="/dashboard"
              className={
                theme === "dark"
                  ? "relative group bg-gradient-to-r from-blue-600 to-purple-700 px-6 py-3 rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/25 hover:scale-105"
                  : "relative group bg-gradient-to-r from-blue-500 to-pink-400 px-6 py-3 rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-blue-200/25 hover:scale-105 text-blue-900 shadow-lg"
              }
            >
              <div
                className={
                  theme === "dark"
                    ? "absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    : "absolute inset-0 bg-gradient-to-r from-purple-200 to-pink-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                }
              ></div>
              <span className="relative">Dashboard</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
