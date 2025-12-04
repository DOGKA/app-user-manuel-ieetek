// @ts-nocheck
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import ImageGallery from './ImageGallery'

interface ImageItem {
  src: string
  alt: string
  caption?: string
}

interface Step {
  number: number
  title: string
  description: string | React.ReactNode
  images?: ImageItem[]
}

interface StepGuideProps {
  steps: Step[]
}

const StepGuide: React.FC<StepGuideProps> = ({ steps }) => {
  return (
    <div className="space-y-12">
      {steps.map((step, index) => (
        <motion.div
          key={step.number}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="relative"
        >
          {/* Connector line */}
          {index < steps.length - 1 && (
            <div className="absolute left-4 top-10 bottom-0 w-0.5 bg-gradient-to-b from-green-500/50 to-transparent" />
          )}

          <div className="flex gap-4">
            {/* Step number */}
            <div className="flex-shrink-0">
              <div className="step-number">
                {step.number}
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 pb-8">
              <h4 className="text-lg font-semibold text-white mb-2">
                {step.title}
              </h4>
              <div className="text-slate-400 mb-4 leading-relaxed">
                {step.description}
              </div>

              {/* Images */}
              {step.images && step.images.length > 0 && (
                <div className="mt-4">
                  <ImageGallery images={step.images} layout="vertical" />
                </div>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default StepGuide
