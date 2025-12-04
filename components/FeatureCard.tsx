// @ts-nocheck
'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  items?: string[]
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, items }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="card group"
    >
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-blue-500/20 flex items-center justify-center mb-4 group-hover:from-green-500/30 group-hover:to-blue-500/30 transition-all">
        <span className="text-green-400">{icon}</span>
      </div>
      <h4 className="text-lg font-semibold text-white mb-2">{title}</h4>
      <p className="text-sm text-slate-400 mb-3">{description}</p>
      {items && items.length > 0 && (
        <ul className="space-y-1">
          {items.map((item, index) => (
            <li key={index} className="text-xs text-slate-500 flex items-start gap-2">
              <span className="w-1 h-1 rounded-full bg-green-500 mt-1.5 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  )
}

export default FeatureCard
