/// <reference types="react" />

// React module declaration
declare module 'react' {
  // Core types
  export type ReactNode = ReactElement | string | number | boolean | null | undefined | ReactNode[]
  export type ReactElement<P = any, T = any> = {
    type: T
    props: P
    key: string | null
  }
  export type FC<P = {}> = (props: P) => ReactElement | null
  export type FunctionComponent<P = {}> = FC<P>
  export type ComponentType<P = {}> = FC<P>
  
  // Event types
  export interface SyntheticEvent<T = Element> {
    stopPropagation(): void
    preventDefault(): void
    target: EventTarget & T
    currentTarget: EventTarget & T
  }
  export type MouseEvent<T = Element> = SyntheticEvent<T>
  
  // Hooks
  export function useState<T>(initialState: T | (() => T)): [T, (value: T | ((prev: T) => T)) => void]
  export function useEffect(effect: () => void | (() => void), deps?: any[]): void
  export function useCallback<T extends (...args: any[]) => any>(callback: T, deps: any[]): T
  export function useMemo<T>(factory: () => T, deps: any[]): T
  export function useRef<T>(initialValue: T): { current: T }
  export function useContext<T>(context: Context<T>): T
  export function createContext<T>(defaultValue: T): Context<T>
  
  export interface Context<T> {
    Provider: ComponentType<{ value: T; children?: ReactNode }>
    Consumer: ComponentType<{ children: (value: T) => ReactNode }>
  }
  
  // Default export
  const React: {
    FC: typeof FC
    useState: typeof useState
    useEffect: typeof useEffect
    useCallback: typeof useCallback
    useMemo: typeof useMemo
    useRef: typeof useRef
    useContext: typeof useContext
    createContext: typeof createContext
  }
  export default React
}

// Next.js modules
declare module 'next' {
  export interface Metadata {
    title?: string
    description?: string
    keywords?: string[]
    authors?: { name: string }[]
    openGraph?: {
      title?: string
      description?: string
      type?: string
    }
  }
}

declare module 'next/font/google' {
  interface FontOptions {
    subsets: string[]
    variable?: string
    display?: 'auto' | 'block' | 'swap' | 'fallback' | 'optional'
    weight?: string | string[]
  }
  
  interface Font {
    className: string
    variable: string
    style: { fontFamily: string }
  }
  
  export function Outfit(options: FontOptions): Font
  export function Space_Grotesk(options: FontOptions): Font
  export function JetBrains_Mono(options: FontOptions): Font
}

// Framer Motion
declare module 'framer-motion' {
  import type { ReactNode, ComponentType } from 'react'
  
  interface MotionProps {
    initial?: any
    animate?: any
    exit?: any
    transition?: any
    whileInView?: any
    viewport?: any
    className?: string
    style?: any
    onClick?: (e: any) => void
    children?: ReactNode
    id?: string
  }
  
  type HTMLMotionProps<T extends keyof JSX.IntrinsicElements> = MotionProps & JSX.IntrinsicElements[T]
  
  export const motion: {
    [K in keyof JSX.IntrinsicElements]: ComponentType<HTMLMotionProps<K>>
  }
  
  export const AnimatePresence: ComponentType<{ children?: ReactNode; mode?: string }>
}

// Tailwind CSS
declare module 'tailwindcss' {
  const config: any
  export default config
}

// Global JSX namespace
declare global {
  namespace React {
    interface ReactNode {}
  }
  
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any
    }
    interface Element extends React.ReactElement<any, any> {}
  }
}

// CSS modules
declare module '*.css' {
  const content: { [className: string]: string }
  export default content
}

declare module '*.module.css' {
  const content: { [className: string]: string }
  export default content
}

export {}
