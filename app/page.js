export default function Home() {
  return (
    <main className="bg-white text-gray-800">

      {/* HERO SECTION */}
      <section className="bg-gray-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Affordable, Fast & Reliable Handyman Services in Omaha
        </h1>
        <p className="text-xl mb-6">
          Professional Home Maintenance & Emergency Repairs — Free Estimates
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4 mt-6">
          <a
            href="tel:4022347659"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-xl text-lg"
          >
            📞 Call Now
          </a>

          <a
            href="mailto:trusteehomemaintenance@gmail.com"
            className="bg-white text-black font-bold py-3 px-6 rounded-xl text-lg"
          >
            ✉️ Email for Free Estimate
          </a>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 shadow-lg rounded-2xl">
            <h3 className="text-xl font-semibold mb-3">General Repairs</h3>
            <p>Drywall repair, fixture replacements, door adjustments, trim work and more.</p>
          </div>

          <div className="p-6 shadow-lg rounded-2xl">
            <h3 className="text-xl font-semibold mb-3">Home Maintenance</h3>
            <p>Routine maintenance, preventative repairs, seasonal upkeep and inspections.</p>
          </div>

          <div className="p-6 shadow-lg rounded-2xl">
            <h3 className="text-xl font-semibold mb-3">Emergency Services</h3>
            <p>Fast response for urgent home repair needs when you need help the most.</p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Why Choose Trustee Handyman?</h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          <div>✔️ Fast & Reliable Service</div>
          <div>✔️ Affordable, Transparent Pricing</div>
          <div>✔️ Free Estimates</div>
          <div>✔️ Professional Quality Work</div>
          <div>✔️ Emergency Availability</div>
          <div>✔️ Serving Omaha & Surrounding Areas</div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Proudly Serving</h2>
        <p className="text-lg max-w-4xl mx-auto">
          Omaha, Papillion, Bellevue, Elkhorn, Gretna, La Vista, Plattsmouth, 
          Louisville, Council Bluffs, and Springfield
        </p>
      </section>

      {/* QUICK QUOTE FORM */}
      <section className="bg-gray-900 text-white py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Request a Free Quote</h2>

        <form
          action="mailto:trusteehomemaintenance@gmail.com"
          method="POST"
          encType="text/plain"
          className="max-w-2xl mx-auto space-y-4"
        >
          <input
            type="text"
            name="Name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded text-black"
          />

          <input
            type="tel"
            name="Phone"
            placeholder="Your Phone Number"
            required
            className="w-full p-3 rounded text-black"
          />

          <textarea
            name="Project Details"
            placeholder="Describe your project..."
            required
            className="w-full p-3 rounded text-black"
            rows="4"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 rounded-xl text-lg"
          >
            Get My Free Estimate
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center bg-black text-white">
        <p className="mb-2">📞 (402) 234-7659</p>
        <p>✉️ trusteehomemaintenance@gmail.com</p>
        <p className="mt-4 text-sm">© {new Date().getFullYear()} Trustee Handyman & Home Maintenance</p>
      </footer>

    </main>
  );
}
