// @ts-nocheck
'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  BatteryIcon,
  MenuIcon,
  CloseIcon,
  WarningIcon,
  DownloadIcon,
  PlugIcon,
  SettingsIcon,
  AutomationIcon,
  ChevronRightIcon,
  SearchIcon,
} from './icons'

interface NavSubsection {
  id: string
  title: string
}

interface NavSection {
  id: string
  title: string
  icon: React.ReactNode
  subsections?: NavSubsection[]
}

const navSections: NavSection[] = [
  {
    id: 'disclaimer',
    title: 'Sorumluluk Reddi',
    icon: <WarningIcon size={20} />,
  },
  {
    id: 'installation',
    title: 'Kurulum ve Giriş',
    icon: <DownloadIcon size={20} />,
    subsections: [
      { id: 'app-install', title: 'Uygulama Kurulumu' },
      { id: 'app-register', title: 'Kayıt ve Giriş' },
    ],
  },
  {
    id: 'connection',
    title: 'Bağlantı ve Kullanım',
    icon: <PlugIcon size={20} />,
    subsections: [
      { id: 'device-connect', title: 'Cihaz Bağlama' },
      { id: 'device-controls', title: 'Cihaz Kontrolleri' },
      { id: 'other-functions', title: 'Diğer Fonksiyonlar' },
      { id: 'device-share', title: 'Paylaşma / Silme' },
    ],
  },
  {
    id: 'smart-control',
    title: 'Akıllı Kontrol',
    icon: <AutomationIcon size={20} />,
    subsections: [
      { id: 'scenario', title: 'Senaryo Kurma' },
      { id: 'automation', title: 'Otomasyon' },
      { id: 'group-control', title: 'Toplu Kontrol' },
    ],
  },
  {
    id: 'system-settings',
    title: 'Sistem Ayarları',
    icon: <SettingsIcon size={20} />,
  },
]

interface NavigationProps {
  activeSection: string
  onSectionClick: (sectionId: string) => void
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, onSectionClick }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [expandedSections, setExpandedSections] = useState<string[]>(['installation', 'connection', 'smart-control'])
  const [scrolled, setScrolled] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchFocused, setSearchFocused] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleExpand = (sectionId: string) => {
    setExpandedSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId]
    )
  }

  const handleNavClick = (sectionId: string) => {
    onSectionClick(sectionId)
    setIsOpen(false)
    setSearchQuery('')
  }

  // Filter sections based on search query
  const filterSections = (sections: NavSection[], query: string): NavSection[] => {
    if (!query.trim()) return sections
    
    const lowerQuery = query.toLowerCase()
    return sections.reduce<NavSection[]>((acc, section) => {
      const titleMatch = section.title.toLowerCase().includes(lowerQuery)
      const matchingSubsections = section.subsections?.filter(sub => 
        sub.title.toLowerCase().includes(lowerQuery)
      )
      
      if (titleMatch) {
        acc.push(section)
      } else if (matchingSubsections && matchingSubsections.length > 0) {
        acc.push({ ...section, subsections: matchingSubsections })
      }
      
      return acc
    }, [])
  }

  const filteredSections = filterSections(navSections, searchQuery)

  return (
    <>
      {/* Mobile Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 md:hidden transition-all duration-300 ${
          scrolled ? 'glass-strong' : ''
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
              <BatteryIcon className="text-white" size={20} />
            </div>
            <span className="font-semibold text-white">Kullanıcı Kılavuzu</span>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            {isOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed top-0 left-0 bottom-0 w-80 bg-dark-900/95 backdrop-blur-xl z-50 md:hidden overflow-y-auto"
          >
            <div className="p-6 pt-20">
              {/* Mobile Search Bar */}
              <div className="mb-6">
                <div className={`relative transition-all duration-300 ${
                  searchFocused ? 'ring-2 ring-green-500/50 rounded-xl' : ''
                }`}>
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <SearchIcon 
                      size={18} 
                      className={`transition-colors duration-200 ${
                        searchFocused ? 'text-green-400' : 'text-slate-500'
                      }`} 
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Ara..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setSearchFocused(true)}
                    onBlur={() => setSearchFocused(false)}
                    className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:bg-white/10 focus:border-green-500/50 transition-all duration-200"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-500 hover:text-white transition-colors"
                    >
                      <CloseIcon size={14} />
                    </button>
                  )}
                </div>
                {searchQuery && filteredSections.length === 0 && (
                  <p className="mt-2 text-xs text-slate-500 text-center">Sonuç bulunamadı</p>
                )}
              </div>

              <NavContent
                sections={filteredSections}
                activeSection={activeSection}
                expandedSections={searchQuery ? filteredSections.map(s => s.id) : expandedSections}
                onSectionClick={handleNavClick}
                onToggleExpand={toggleExpand}
              />
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <aside className="hidden md:block fixed top-0 left-0 bottom-0 w-72 lg:w-80 glass-strong z-40 overflow-y-auto">
        <div className="p-6">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-6 pb-6 border-b border-white/10">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center glow-green">
              <BatteryIcon className="text-white" size={24} />
            </div>
            <div>
              <h1 className="font-bold text-white">Güç Kaynağı</h1>
              <p className="text-xs text-slate-400">Kullanıcı Kılavuzu V3.0</p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="mb-6">
            <div className={`relative group transition-all duration-300 ${
              searchFocused ? 'ring-2 ring-green-500/50' : ''
            }`}>
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <SearchIcon 
                  size={18} 
                  className={`transition-colors duration-200 ${
                    searchFocused ? 'text-green-400' : 'text-slate-500'
                  }`} 
                />
              </div>
              <input
                type="text"
                placeholder="Ara..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:bg-white/10 focus:border-green-500/50 transition-all duration-200"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-500 hover:text-white transition-colors"
                >
                  <CloseIcon size={14} />
                </button>
              )}
            </div>
            {searchQuery && filteredSections.length === 0 && (
              <p className="mt-2 text-xs text-slate-500 text-center">Sonuç bulunamadı</p>
            )}
          </div>

          <NavContent
            sections={filteredSections}
            activeSection={activeSection}
            expandedSections={searchQuery ? filteredSections.map(s => s.id) : expandedSections}
            onSectionClick={handleNavClick}
            onToggleExpand={toggleExpand}
          />
        </div>
      </aside>
    </>
  )
}

interface NavContentProps {
  sections: NavSection[]
  activeSection: string
  expandedSections: string[]
  onSectionClick: (sectionId: string) => void
  onToggleExpand: (sectionId: string) => void
}

const NavContent: React.FC<NavContentProps> = ({
  sections,
  activeSection,
  expandedSections,
  onSectionClick,
  onToggleExpand,
}) => {
  return (
    <nav className="space-y-2">
      {sections.map((section) => (
        <div key={section.id}>
          <button
            onClick={() => {
              if (section.subsections) {
                onToggleExpand(section.id)
              } else {
                onSectionClick(section.id)
              }
            }}
            className={`nav-item w-full flex items-center gap-3 text-left ${
              activeSection === section.id ? 'active' : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <span className={activeSection === section.id ? 'text-green-400' : ''}>
              {section.icon}
            </span>
            <span className="flex-1 text-sm font-medium">{section.title}</span>
            {section.subsections && (
              <motion.span
                animate={{ rotate: expandedSections.includes(section.id) ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronRightIcon size={16} />
              </motion.span>
            )}
          </button>

          {/* Subsections */}
          <AnimatePresence>
            {section.subsections && expandedSections.includes(section.id) && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="pl-9 py-2 space-y-1">
                  {section.subsections.map((sub) => (
                    <button
                      key={sub.id}
                      onClick={() => onSectionClick(sub.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${
                        activeSection === sub.id
                          ? 'text-green-400 bg-green-500/10'
                          : 'text-slate-500 hover:text-slate-300 hover:bg-white/5'
                      }`}
                    >
                      {sub.title}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </nav>
  )
}

export default Navigation
