// @ts-nocheck
'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface Parameter {
  number?: string | number
  name: string
  description: string
}

interface ParameterTableProps {
  title?: string
  parameters: Parameter[]
}

const ParameterTable: React.FC<ParameterTableProps> = ({ title, parameters }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="my-6"
    >
      {title && (
        <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-gradient-to-b from-green-400 to-emerald-600 rounded-full" />
          {title}
        </h4>
      )}
      <div className="glass rounded-xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              {parameters[0]?.number !== undefined && (
                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider w-16">
                  #
                </th>
              )}
              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Parametre
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Açıklama
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {parameters.map((param, index) => (
              <tr
                key={index}
                className="hover:bg-white/5 transition-colors"
              >
                {param.number !== undefined && (
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-500/20 text-green-400 text-xs font-bold">
                      {param.number}
                    </span>
                  </td>
                )}
                <td className="px-4 py-3 text-sm font-medium text-white">
                  {param.name}
                </td>
                <td className="px-4 py-3 text-sm text-slate-400">
                  {param.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  )
}

export default ParameterTable
