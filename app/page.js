"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState(null);
  const images = [1,2,3,4,5,6,7,8];

  return (
    <main className="min-h-screen bg-white text-neutral-900 selection:bg-yellow-500/20">

      {/* ================= NAVIGATION ================= */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-10 py-6 flex justify-between items-center">
          <span className="text-2xl tracking-widest font-semibold">
            Trustee
          </span>

          <div className="hidden md:flex gap-12 text-sm tracking-wide">
            <a href="#services" className="hover:text-yellow-600 transition">Services</a>
            <a href="#pricing" className="hover:text-yellow-600 transition">Pricing</a>
            <a href="#gallery" className="hover:text-yellow-600 transition">Our Work</a>
            <a href="#contact" className="hover:text-yellow-600 transition">Contact</a>
          </div>
        </div>
      </nav>


      {/* ================= HERO ================= */}
      <section className="relative py-48 px-8 text-center overflow-hidden">

        {/* subtle texture */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:28px_28px]" />

        <div className="relative z-10 max-w-4xl mx-auto">

          <h1 className="text-7xl md:text-8xl font-serif font-semibold tracking-tight mb-6">
            Trustee
          </h1>

          <p className="uppercase tracking-[0.4em] text-sm text-yellow-600 mb-10">
            Home Maintenance
          </p>

          <p className="text-xl text-neutral-600 max-w-2xl mx-auto mb-12 leading-relaxed">
            Fast, reliable, and professionally executed home services
            across Omaha and surrounding areas. Transparent pricing,
            clear communication, and workmanship you can trust.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="tel:4022347659"
              className="bg-yellow-600 hover:bg-yellow-700 text-white font-medium px-10 py-4 rounded-lg transition"
            >
              Call (402) 234-7659
            </a>

            <a
              href="mailto:Trusteehomemaintenance@gmail.com?subject=Free Estimate Request&body=Name:%0D%0APhone:%0D%0AProject Description:"
              className="border border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white px-10 py-4 rounded-lg transition"
            >
              Request Free Estimate
            </a>
          </div>
        </div>
      </section>


      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-32 px-8 bg-neutral-50">
        <div className="max-w-4xl mx-auto text-center">

          <div className="w-16 h-[2px] bg-yellow-600 mx-auto mb-8"></div>

          <h2 className="text-4xl font-serif font-semibold mb-8">
            Why Choose Trustee
          </h2>

          <p className="text-lg text-neutral-600 leading-relaxed">
            We combine skilled craftsmanship with dependable service.
            Every project is approached with precision, respect for your home,
            and consistent communication from start to finish.
            No shortcuts. No surprises. Just quality work delivered
            professionally and efficiently.
          </p>
        </div>
      </section>


      {/* ================= SERVICES ================= */}
      <section id="services" className="py-32 px-8 bg-white">
        <div className="max-w-7xl mx-auto">

          <div className="w-16 h-[2px] bg-yellow-600 mx-auto mb-8"></div>

          <h2 className="text-4xl font-serif font-semibold text-center mb-20">
            Our Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">

            {[
              {
                title: "General Repairs",
                items: ["Drywall repair", "Trim work", "Door adjustments", "Minor fixes"]
              },
              {
                title: "Maintenance",
                items: ["Seasonal upkeep", "Fixture replacements", "Caulking & sealing", "Preventative care"]
              },
              {
                title: "Installations",
                items: ["TV mounting", "Shelving", "Light fixtures", "Hardware upgrades"]
              }
            ].map((service, index) => (
              <div
                key={index}
                className="p-10 border border-neutral-200 rounded-xl hover:shadow-lg transition"
              >
                <h3 className="text-2xl font-semibold text-yellow-600 mb-6">
                  {service.title}
                </h3>

                <ul className="space-y-3 text-neutral-600">
                  {service.items.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}

          </div>
        </div>
      </section>


      {/* ================= PRICING ================= */}
      <section id="pricing" className="py-32 px-8 bg-neutral-50 text-center">
        <div className="max-w-4xl mx-auto">

          <div className="w-16 h-[2px] bg-yellow-600 mx-auto mb-8"></div>

          <h2 className="text-4xl font-serif font-semibold mb-10">
            Transparent Pricing
          </h2>

          <p className="text-lg text-neutral-600 leading-relaxed mb-6">
            Clear, upfront estimates with no hidden costs.
            We believe homeowners deserve honest pricing and realistic timelines.
          </p>

          <p className="text-neutral-600">
            Emergency services available. Serving Omaha and surrounding communities.
          </p>
        </div>
      </section>


      {/* ================= GALLERY ================= */}
      <section id="gallery" className="py-32 px-8 bg-white">
        <div className="max-w-7xl mx-auto">

          <div className="w-16 h-[2px] bg-yellow-600 mx-auto mb-8"></div>

          <h2 className="text-4xl font-serif font-semibold text-center mb-20">
            Our Work
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {images.map((num) => (
              <FadeInImage
                key={num}
                src={`/work${num}.jpeg`}
                alt={`Project ${num}`}
                onClick={() => setSelectedImage(`/work${num}.jpeg`)}
              />
            ))}
          </div>
        </div>
      </section>


      {/* ================= LIGHTBOX ================= */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full max-w-4xl h-[80vh]">
            <Image
              src={selectedImage}
              alt="Expanded Project"
              fill
              className="object-contain rounded-xl"
            />
          </div>
        </div>
      )}


      {/* ================= STRONG CLOSING CTA ================= */}
      <section id="contact" className="py-40 px-8 bg-neutral-900 text-white text-center">
        <div className="max-w-3xl mx-auto">

          <h2 className="text-5xl font-serif font-semibold mb-8">
            Ready to Get Started?
          </h2>

          <p className="text-lg text-neutral-300 mb-12 leading-relaxed">
            Whether it’s a small repair or a larger project,
            Trustee delivers dependable service with clear communication
            and professional results you can feel confident in.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="tel:4022347659"
              className="bg-yellow-600 hover:bg-yellow-700 px-10 py-4 rounded-lg transition"
            >
              Call Now
            </a>

            <a
              href="mailto:Trusteehomemaintenance@gmail.com?subject=Free Estimate Request&body=Name:%0D%0APhone:%0D%0AProject Description:"
              className="border border-yellow-600 hover:bg-yellow-600 hover:text-black px-10 py-4 rounded-lg transition"
            >
              Request Free Estimate
            </a>
          </div>
        </div>
      </section>


      {/* ================= FOOTER ================= */}
      <footer className="py-10 text-center text-neutral-500 text-sm">
        © {new Date().getFullYear()} Trustee Home Maintenance
      </footer>

    </main>
  );
}



/* ================= SCROLL FADE ================= */

function FadeInImage({ src, alt, onClick }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      onClick={onClick}
      className={`relative h-72 rounded-xl overflow-hidden cursor-pointer transform transition duration-700 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
      } hover:scale-[1.02]`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
      />
    </div>
  );
}
