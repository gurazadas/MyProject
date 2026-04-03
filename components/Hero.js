// components/Hero.js
"use client";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold mb-4"
      >
        Satyasai – Data Vault Architect
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-xl text-gray-600 mb-6"
      >
        Building scalable Data Warehouses using Data Vault 2.0
      </motion.p>

      <div className="flex gap-4">
        <a href="/projects" className="bg-black text-white px-6 py-3 rounded-xl">
          View Projects
        </a>
        <a href="#contact" className="border px-6 py-3 rounded-xl">
          Contact
        </a>
      </div>

    </section>
  );
}
