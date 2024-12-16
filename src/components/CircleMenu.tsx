import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const menuItems = [
  { 
    path: '/art', 
    text: 'Art', 
    animation: 'animate-rotate',
    background: 'bg-[#4B0082]/20',
    glow: 'shadow-[0_0_60px_0px_rgba(75,0,130,0.8)]'
  },
  { 
    path: '/whisky', 
    text: 'Whisky', 
    animation: 'animate-rotate',
    background: 'bg-[#8B4513]/20',
    glow: 'shadow-[0_0_60px_0px_rgba(139,69,19,0.8)]'
  },
  { 
    path: '/charity', 
    text: 'Charity', 
    animation: 'animate-rotate',
    background: 'bg-[#191970]/20',
    glow: 'shadow-[0_0_60px_0px_rgba(25,25,112,0.8)]'
  }
]

const CircleMenu = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="flex justify-center items-center gap-32 min-h-[200px] w-full max-w-5xl mx-auto">
      {menuItems.map((item, index) => (
        <Link
          key={item.path}
          to={item.path}
          className="relative"
        >
          <motion.div
            className={`
              w-[100px] h-[100px] rounded-full flex justify-center items-center
              cursor-pointer border border-white/25 overflow-hidden
              ${item.background} ${item.animation} ${item.glow}
              transition-all duration-300
              md:w-[90px] md:h-[90px]
              sm:w-[80px] sm:h-[80px]
            `}
            whileHover={{ 
              scale: 1.1,
              animationPlayState: 'paused'
            }}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
          >
            <motion.span
              className={`
                text-white font-sans text-base text-center select-none
                drop-shadow-lg z-10 transition-colors duration-300
                md:text-sm sm:text-xs
              `}
              animate={hoveredIndex === index ? {
                scale: 1.1,
                textShadow: "0 0 8px rgba(255,255,255,0.8)"
              } : {
                scale: 1,
                textShadow: "0 0 10px rgba(0,0,0,0.5)"
              }}
            >
              {item.text}
            </motion.span>
          </motion.div>
        </Link>
      ))}
    </div>
  )
}

export default CircleMenu 