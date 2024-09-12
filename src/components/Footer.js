import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12 mt-16">
            <div className="container mx-auto px-6">
                {/* Flex container with no wrapping */}
                <div className="flex flex-wrap md:flex-nowrap justify-between gap-8">
                    {/* About Us Section */}
                    <div className="w-full md:w-1/4 mb-6">
                        <h4 className="text-xl font-bold mb-4">About SeductiveBox</h4>
                        <p className="text-gray-400">SeductiveBox curates luxury lingerie delivered to your doorstep. Our goal is to make you feel confident and beautiful every month.</p>
                    </div>

                    {/* Quick Links Section */}
                    <div className="w-full md:w-1/4 mb-6">
                        <h4 className="text-xl font-bold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link to="/" className="hover:text-pink-500">Home</Link></li>
                            <li><Link to="/products" className="hover:text-pink-500">Shop</Link></li>
                            <li><Link to="/quiz" className="hover:text-pink-500">Style Quiz</Link></li>
                            <li><Link to="/checkout" className="hover:text-pink-500">Checkout</Link></li>
                        </ul>
                    </div>

                    {/* Support Section */}
                    <div className="w-full md:w-1/4 mb-6">
                        <h4 className="text-xl font-bold mb-4">Support</h4>
                        <ul className="space-y-2">
                            <li><a href="/faq" className="hover:text-pink-500">FAQ</a></li>
                            <li><a href="/contact" className="hover:text-pink-500">Contact Us</a></li>
                            <li><a href="/returns" className="hover:text-pink-500">Return Policy</a></li>
                        </ul>
                    </div>

                    {/* Follow Us Section */}
                    <div className="w-full md:w-1/4 mb-6">
                        <h4 className="text-xl font-bold mb-4">Follow Us</h4>
                        <div className="flex space-x-6">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
                                <i className="fab fa-pinterest"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Disclaimer */}
                <div className="text-center text-gray-500 text-sm mt-8">
                    © 2024 SeductiveBox. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
