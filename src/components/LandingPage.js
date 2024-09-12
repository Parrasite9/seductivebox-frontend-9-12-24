import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

function LandingPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <header className="bg-white shadow-md sticky top-0 z-10">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-[#A100ff]">SeductiveBox</h1> {/* Use your logo here */}
          <div className="flex space-x-6">
            <Link to="/products" className="text-gray-800 hover:text-[#ff00c3]">Products</Link>
            <a href="#how-it-works" className="text-gray-800 hover:text-[#ff00c3]">How it Works</a>
            <a href="#testimonials" className="text-gray-800 hover:text-[#ff00c3]">Testimonials</a>
            <Link to="/quiz" className="bg-[#ff00c3] text-white px-4 py-2 rounded-full hover:bg-[#A100ff]">Style Quiz</Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-24 text-center">
        <h2 className="text-5xl font-bold text-gray-900">
          Discover Your Perfect Lingerie <br /> Subscription Box
        </h2>
        <p className="text-lg mt-4 text-gray-700">
          Tailored lingerie delivered to your door monthly. From sultry to sophisticated, we’ve got you covered.
        </p>
        <Link to="/quiz" className="mt-8 inline-block bg-[#ff00c3] text-white px-8 py-4 rounded-full text-lg hover:bg-[#A100ff]">
          Start Your Quiz
        </Link>
      </section>

      {/* Value Proposition Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold text-gray-900">Why Choose SeductiveBox?</h3>
          <p className="text-gray-700 mt-4">
            Our subscription is designed to bring confidence, style, and luxury to your wardrobe—every month. Here's why our customers love us:
          </p>
          <div className="flex flex-wrap justify-center mt-12">
            <div className="w-full md:w-1/3 px-4 mb-8">
              <img src="luxury-fabrics-dummy.jpg" alt="Luxury Fabrics" className="w-full h-48 object-cover rounded-lg shadow-md"/>
              <h4 className="text-xl font-bold mt-4">Luxury Fabrics</h4>
              <p className="text-gray-600">Indulge in the finest materials like silk, lace, and satin.</p>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <img src="free-returns-dummy.jpg" alt="Free Returns" className="w-full h-48 object-cover rounded-lg shadow-md"/>
              <h4 className="text-xl font-bold mt-4">Free Returns</h4>
              <p className="text-gray-600">If it doesn’t fit, return it for free. No questions asked.</p>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <img src="sustainable-dummy.jpg" alt="Sustainable Fashion" className="w-full h-48 object-cover rounded-lg shadow-md"/>
              <h4 className="text-xl font-bold mt-4">Sustainable Fashion</h4>
              <p className="text-gray-600">We prioritize eco-friendly materials and production.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold text-gray-900">How SeductiveBox Works</h3>
          <p className="text-gray-700 mt-4">
            It’s easy to get started with your custom lingerie subscription. Just follow these simple steps.
          </p>
          <div className="flex flex-wrap justify-center mt-12">
            <div className="w-full md:w-1/3 px-4 mb-8">
              <img src="style-quiz-dummy.jpg" alt="Style Quiz" className="w-full h-64 object-cover rounded-lg shadow-md"/>
              <h4 className="text-xl font-bold mt-4 text-gray-800">1. Take Our Style Quiz</h4>
              <p className="text-gray-600">Let us know your preferences so we can match you with the perfect pieces.</p>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <img src="curated-box-dummy.jpg" alt="Curated Lingerie Box" className="w-full h-64 object-cover rounded-lg shadow-md"/>
              <h4 className="text-xl font-bold mt-4 text-gray-800">2. Get a Curated Box</h4>
              <p className="text-gray-600">We handpick lingerie based on your style and deliver it straight to you.</p>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <img src="delivery-dummy.jpg" alt="Delivery" className="w-full h-64 object-cover rounded-lg shadow-md"/>
              <h4 className="text-xl font-bold mt-4 text-gray-800">3. Monthly Delivery</h4>
              <p className="text-gray-600">Receive your box every month and enjoy a new level of lingerie luxury.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Teaser Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-bold text-center text-gray-900">Explore Our Best-Sellers</h3>
          <div className="flex flex-wrap justify-center mt-8">
            <div className="w-full md:w-1/3 px-4 mb-8">
              <img src="best-seller1-dummy.jpg" alt="Best-Seller 1" className="w-full h-64 object-cover rounded-lg shadow-md"/>
              <h4 className="text-xl font-bold mt-4 text-center">Silk Bodysuit</h4>
              <p className="text-center text-pink-600 font-bold">$79.99</p>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <img src="best-seller2-dummy.jpg" alt="Best-Seller 2" className="w-full h-64 object-cover rounded-lg shadow-md"/>
              <h4 className="text-xl font-bold mt-4 text-center">Lace Teddy</h4>
              <p className="text-center text-pink-600 font-bold">$49.99</p>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <img src="best-seller3-dummy.jpg" alt="Best-Seller 3" className="w-full h-64 object-cover rounded-lg shadow-md"/>
              <h4 className="text-xl font-bold mt-4 text-center">Satin Babydoll</h4>
              <p className="text-center text-pink-600 font-bold">$59.99</p>
            </div>
          </div>
        </div>
      </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="container mx-auto px-6 py-16 text-center">
        <h3 className="text-4xl font-bold text-gray-900">What Our Customers Say</h3>
        <div className="flex flex-wrap justify-center mt-12">
            <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg h-full flex flex-col justify-between">
                <p className="text-gray-600 italic flex-grow">
                “SeductiveBox has revolutionized my lingerie wardrobe. Every month is a delightful surprise.”
                </p>
                <h4 className="text-xl font-bold mt-4">— Jennifer K.</h4>
            </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg h-full flex flex-col justify-between">
                <p className="text-gray-600 italic flex-grow">
                “I love the variety and quality of pieces. I’ve recommended it to all my friends!”
                </p>
                <h4 className="text-xl font-bold mt-4">— Emily R.</h4>
            </div>
            </div>
        </div>
        </section>


      {/* FAQ Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-bold text-center text-gray-900">Frequently Asked Questions</h3>
          <div className="mt-8">
            <div className="mb-6">
              <h4 className="text-xl font-bold">How do I cancel my subscription?</h4>
              <p className="text-gray-600">You can cancel anytime from your account dashboard or by contacting our customer support.</p>
            </div>
            <div className="mb-6">
              <h4 className="text-xl font-bold">Can I return items if they don't fit?</h4>
              <p className="text-gray-600">Yes! We offer free returns within 30 days of receiving your items.</p>
            </div>
            <div className="mb-6">
              <h4 className="text-xl font-bold">Can I gift a SeductiveBox subscription?</h4>
              <p className="text-gray-600">Absolutely! Our subscriptions make great gifts for friends or loved ones.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold text-gray-900">Join the #SeductiveBox Movement</h3>
          <p className="text-gray-700 mt-4">See how our subscribers are rocking their monthly lingerie on social media.</p>
          <div className="mt-8">
            <img src="user-content-dummy.jpg" alt="User-generated Content" className="w-full h-96 object-cover rounded-lg shadow-md"/>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default LandingPage;
