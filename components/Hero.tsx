// @ts-nocheck
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { BatteryIcon, ZapIcon, ChevronDownIcon } from './icons'

const Hero: React.FC = () => {
  const scrollToContent = () => {
    const element = document.getElementById('content')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0 bg-gradient-radial-dark" />
      
      {/* Animated Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(34, 197, 94, 0.4) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-15"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-sm text-slate-300">V3.0 Kullanıcı Kılavuzu</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
        >
          <span className="text-white">Taşınabilir Güç Kaynağı</span>
          <br />
          <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
            Uygulaması
          </span>
        </motion.h1>

        {/* Subtitle - Models */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8"
        >
          <p className="text-lg md:text-xl text-slate-500 mb-3">Desteklenen Modeller</p>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {['Singo1000', 'Singo2000Pro', 'P1800', 'P3200'].map((model, index) => (
              <span
                key={model}
                className="px-4 py-2 rounded-full text-base md:text-lg font-semibold bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 text-slate-300 hover:border-green-500 hover:text-green-400 transition-all duration-300 hover:scale-105"
              >
                {model}
              </span>
            ))}
            <span className="px-4 py-2 rounded-full text-base md:text-lg font-semibold bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 text-slate-400 hover:border-green-500 hover:text-green-400 transition-all duration-300">
              ve diğerleri...
            </span>
          </div>
        </motion.div>

        {/* Feature Tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {['Akıllı Kontrol', 'WiFi Bağlantı', 'Otomasyon', 'Senaryo Yönetimi'].map((tag, index) => (
            <span
              key={tag}
              className="px-4 py-2 rounded-full text-sm font-medium glass text-slate-300 hover:text-green-400 transition-colors cursor-default"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        {/* Power Icon Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="relative w-48 h-48 mx-auto mb-12"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-500/20 to-blue-500/20 animate-pulse" />
          <div className="absolute inset-4 rounded-full glass flex items-center justify-center glow-green">
            <BatteryIcon className="text-green-400" size={64} />
          </div>
          {/* Orbiting elements */}
          <motion.div
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            <div className="relative w-48 h-48">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-green-500/30 flex items-center justify-center">
                <ZapIcon className="text-green-400" size={16} />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* App Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <div className="flex items-center gap-3 px-6 py-3 rounded-xl glass-strong">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg">L</span>
            </div>
            <div className="text-left">
              <p className="text-xs text-slate-400">ABD/Kanada</p>
              <p className="text-sm font-semibold text-white">Landbook</p>
            </div>
          </div>
          <div className="flex items-center gap-3 px-6 py-3 rounded-xl glass-strong">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <span className="text-white font-bold text-lg">W</span>
            </div>
            <div className="text-left">
              <p className="text-xs text-slate-400">Diğer Bölgeler</p>
              <p className="text-sm font-semibold text-white">Wonderfree</p>
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={scrollToContent}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col items-center gap-2 text-slate-500 hover:text-green-400 transition-colors"
        >
          <span className="text-sm">Kılavuzu Keşfet</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDownIcon size={24} />
          </motion.div>
        </motion.button>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0f1a] to-transparent" />
    </section>
  )
}

export default Hero

