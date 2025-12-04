// @ts-nocheck
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { InfoIcon, WarningIcon, CheckCircleIcon, LightbulbIcon } from './icons'

type InfoCardType = 'info' | 'warning' | 'success' | 'tip'

interface InfoCardProps {
  type?: InfoCardType
  title?: string
  children: React.ReactNode
}

interface ConfigItem {
  icon: React.ReactNode
  bg: string
  border: string
  iconColor: string
  titleColor: string
}

const config: Record<InfoCardType, ConfigItem> = {
  info: {
    icon: <InfoIcon size={20} />,
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/30',
    iconColor: 'text-blue-400',
    titleColor: 'text-blue-300',
  },
  warning: {
    icon: <WarningIcon size={20} />,
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/30',
    iconColor: 'text-amber-400',
    titleColor: 'text-amber-300',
  },
  success: {
    icon: <CheckCircleIcon size={20} />,
    bg: 'bg-green-500/10',
    border: 'border-green-500/30',
    iconColor: 'text-green-400',
    titleColor: 'text-green-300',
  },
  tip: {
    icon: <LightbulbIcon size={20} />,
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/30',
    iconColor: 'text-purple-400',
    titleColor: 'text-purple-300',
  },
}

const InfoCard: React.FC<InfoCardProps> = ({ type = 'info', title, children }) => {
  const { icon, bg, border, iconColor, titleColor } = config[type]

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`${bg} ${border} border rounded-xl p-4 my-6`}
    >
      <div className="flex gap-3">
        <span className={iconColor}>{icon}</span>
        <div className="flex-1">
          {title && (
            <h5 className={`font-semibold mb-1 ${titleColor}`}>{title}</h5>
          )}
          <div className="text-sm text-slate-300 leading-relaxed">{children}</div>
        </div>
      </div>
    </motion.div>
  )
}

export default InfoCard
