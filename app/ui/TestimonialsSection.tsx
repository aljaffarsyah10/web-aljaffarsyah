"use client";
import { StarIcon } from "@heroicons/react/24/solid";
// Update the import path below to the correct location of your fonts file.
// Example: If your fonts file is at 'app/ui/fonts.ts', use the following:
import { lusitana } from "./fonts";

const testimonials = [
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
];

const clientLogos = ["🏢", "🚀", "💼", "🏪"];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-32 px-6 bg-slate-950/50 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-full backdrop-blur-sm mb-6">
            <StarIcon className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-slate-300 dark:text-slate-300 text-blue-700 font-semibold">
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
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed dark:text-slate-300 text-blue-900 font-semibold">
            Don&apos;t just take my word for it. Here&apos;s what industry
            leaders and satisfied clients have to say about working with me.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
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
                  <p className="text-sm text-slate-400 dark:text-slate-400 text-blue-700">
                    {testimonial.role}
                  </p>
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
              <p className="text-slate-300 leading-relaxed italic dark:text-slate-300 text-blue-900">
                &quot;{testimonial.content}&quot;
              </p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8 text-white">
            Trusted by Industry Leaders
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60">
            {clientLogos.map((logo, index) => (
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
  );
}
