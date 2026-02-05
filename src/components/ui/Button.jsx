import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  className = '',
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-full uppercase tracking-wider'

  const variants = {
    primary: 'gradient-border text-text-primary hover:opacity-90',
    secondary: 'bg-transparent border-2 border-text-primary text-text-primary hover:bg-text-primary hover:text-primary-black',
    ghost: 'bg-transparent text-text-primary hover:text-accent-orange',
  }

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  }

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

  const MotionComponent = motion.create(to ? Link : href ? 'a' : 'button')

  return (
    <MotionComponent
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={combinedClassName}
      to={to}
      href={href}
      {...props}
    >
      {children}
    </MotionComponent>
  )
}
