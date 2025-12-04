export default function Contact({ref}) {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("hy");
        
    }
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">Get In Touch</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We'd love to hear from you. Whether you have questions, reservations, or just want to say hello, feel free
              to reach out!
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <span className="text-4xl">📍</span>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">Address</h3>
                  <p className="text-gray-600">
                    123 Culinary Lane
                    <br />
                    Gourmet City, GC 12345
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-4xl">📞</span>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-4xl">📧</span>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">Email</h3>
                  <p className="text-gray-600">hello@tastehaven.com</p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-4xl">🕐</span>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">Hours</h3>
                  <p className="text-gray-600">
                    Mon - Thu: 5:00 PM - 10:00 PM
                    <br />
                    Fri - Sat: 5:00 PM - 11:00 PM
                    <br />
                    Sunday: 5:00 PM - 9:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-primary to-primary-dark p-8 md:p-12 rounded-lg shadow-xl">
            <h3 className="text-3xl font-bold text-white mb-8">Send us a Message</h3>

            <form className="space-y-6" onSubmit={(e) => handleSubmit(e)}>
              <div>
                <label className="block text-white font-medium mb-2">Full Name</label>
                <input
                required
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 transition"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Email Address</label>
                <input
                required
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 transition"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Message</label>
                <textarea
                required
                  placeholder="Your message here..."
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 transition resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-white text-primary px-6 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
