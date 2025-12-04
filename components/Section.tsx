// @ts-nocheck
'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface SectionProps {
  id: string
  title: string
  subtitle?: string
  icon?: React.ReactNode
  children: React.ReactNode
}

const Section: React.FC<SectionProps> = ({ id, title, subtitle, icon, children }) => {
  return (
    <section id={id} className="py-16 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Section Header */}
        <div className="mb-10">
          <div className="flex items-center gap-4 mb-4">
            {icon && (
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-600/20 flex items-center justify-center">
                <span className="text-green-400">{icon}</span>
              </div>
            )}
            <div>
              <h2 className="section-title">{title}</h2>
            </div>
          </div>
          {subtitle && (
            <p className="section-subtitle">{subtitle}</p>
          )}
          <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full" />
        </div>

        {/* Section Content */}
        <div className="prose prose-invert max-w-none">
          {children}
        </div>
      </motion.div>
    </section>
  )
}

export default Section
