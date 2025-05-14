import React from 'react'
import Navbar from '../components/Navbar'
import Footer from './Footer'

import { motion } from "framer-motion";
import { Truck, Plane, PackageCheck, Globe2 } from "lucide-react";

export default function Home() {
  return (
    <div>
        <Navbar/>
      <div>
         <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold mb-4"
        >
          Delivering Speed. Ensuring Safety.
        </motion.h1>
        <p className="text-lg mb-6">Track, manage and grow with our logistics solutions.</p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-white text-blue-800 font-semibold px-6 py-3 rounded-full shadow"
        >
          Get a Quote
        </motion.button>
      </section>

      {/* Services */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-2xl shadow-lg text-center"
            >
              <div className="text-blue-700 text-3xl mb-4">{s.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tracker */}
      <section className="bg-blue-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Track Your Shipment</h2>
        <p className="mb-6 text-gray-700">Enter your tracking number below</p>
        <input
          type="text"
          placeholder="Tracking ID"
          className="px-4 py-2 rounded-l-lg border border-gray-300 w-60"
        />
        <button className="px-4 py-2 bg-blue-700 text-white rounded-r-lg hover:bg-blue-800">
          Track
        </button>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10">Why Choose Us</h2>
        <div className="flex flex-wrap justify-center gap-10 text-center">
          <div>
            <p className="text-5xl font-bold text-blue-700">10K+</p>
            <p className="text-gray-600">Deliveries</p>
          </div>
          <div>
            <p className="text-5xl font-bold text-blue-700">24/7</p>
            <p className="text-gray-600">Customer Support</p>
          </div>
          <div>
            <p className="text-5xl font-bold text-blue-700">99%</p>
            <p className="text-gray-600">On-time Delivery</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6 mt-10">
        <p>© 2025 Your Logistics Co. | All rights reserved.</p>
      </footer>
    </div>
      </div>
      <Footer/>
    </div>
  )
}
