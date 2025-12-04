function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Founded in 2015, Taste Haven has been serving the finest culinary creations for over a decade. Our passion
              for authentic flavors and innovative cooking techniques has earned us recognition as one of the most
              sought-after dining destinations.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Each dish tells a story of heritage, tradition, and contemporary flair. Our chefs source the freshest
              ingredients locally and internationally to bring you an unforgettable dining experience.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-4xl">🌟</span>
                <div>
                  <h3 className="font-bold text-gray-900">Award-Winning</h3>
                  <p className="text-gray-600">Multiple Michelin recognition</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-4xl">👨‍🍳</span>
                <div>
                  <h3 className="font-bold text-gray-900">Expert Chefs</h3>
                  <p className="text-gray-600">Trained internationally</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-4xl">🥘</span>
                <div>
                  <h3 className="font-bold text-gray-900">Premium Ingredients</h3>
                  <p className="text-gray-600">Source locally & globally</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden shadow-xl">
            <img src="https://images.unsplash.com/photo-1681270543584-8e541a1bb056?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlZiUyMGNvb2tpbmd8ZW58MHx8MHx8fDA%3D" alt="Restaurant About" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About