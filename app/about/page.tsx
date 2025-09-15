export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About ADVOCACY®
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a dynamic advocacy firm dedicated to driving meaningful change through integrity, transparency, and collaboration.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-6">
              At ADVOCACY®, we believe in championing your cause and shaping the future. Our mission is to provide exceptional legal advocacy services that drive meaningful change in our communities.
            </p>
            <p className="text-lg text-gray-600">
              We combine years of experience with innovative approaches to deliver results that exceed expectations.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Values</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-lg font-medium text-gray-900">Integrity</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-lg font-medium text-gray-900">Transparency</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-lg font-medium text-gray-900">Collaboration</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
