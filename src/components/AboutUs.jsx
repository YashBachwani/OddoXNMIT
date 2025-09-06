// src/components/AboutUs.jsx
export default function AboutUs() {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 py-16 px-6">
      {/* Headline */}
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
        About Us
      </h2>

      {/* Main grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto items-center">
        {/* ---------- Left column ---------- */}
        <div className="flex flex-col space-y-6">
          <div className="bg-white/70 backdrop-blur-md shadow-lg rounded-2xl p-6 hover:scale-105 transition">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Component 1</h3>
            <p className="text-sm text-gray-600">
              Short description or highlight about your company.
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-md shadow-lg rounded-2xl p-6 hover:scale-105 transition">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Component 2</h3>
            <p className="text-sm text-gray-600">
              Another quick feature or value proposition.
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-md shadow-lg rounded-2xl p-6 hover:scale-105 transition">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Component 3</h3>
            <p className="text-sm text-gray-600">
              Add something meaningful here for context.
            </p>
          </div>
        </div>

        {/* ---------- Center Video ---------- */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
          <video
            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
            autoPlay
            loop
            muted
            playsInline
            poster="https://source.unsplash.com/800x450/?office,team"
          >
            <source src="/video/about.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* ---------- Right column ---------- */}
        <div className="flex flex-col space-y-6">
          <div className="bg-white/70 backdrop-blur-md shadow-lg rounded-2xl p-6 hover:scale-105 transition">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Component 4</h3>
            <p className="text-sm text-gray-600">
              Another highlight or selling point to show credibility.
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-md shadow-lg rounded-2xl p-6 hover:scale-105 transition">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Component 5</h3>
            <p className="text-sm text-gray-600">
              Quick statement to build trust or social proof.
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-md shadow-lg rounded-2xl p-6 hover:scale-105 transition">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Component 6</h3>
            <p className="text-sm text-gray-600">
              Wrap up with a clear advantage or CTA preview.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
