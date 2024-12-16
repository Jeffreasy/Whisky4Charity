import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const images = [
  {
    id: 'art',
    src: 'https://cdn.prod.website-files.com/65c565c4d3b23f3e1de26055/673effe1014d200884a17816_2-minTEST.webp',
    text: 'Art',
    path: '/art'
  },
  {
    id: 'whisky',
    src: 'https://cdn.prod.website-files.com/65c565c4d3b23f3e1de26055/673efda82a5312b08ffd8f3c_Fles.Doos.jpg',
    text: 'WHISKY',
    path: '/whisky'
  },
  {
    id: 'charity',
    src: 'https://cdn.prod.website-files.com/65c565c4d3b23f3e1de26055/67193123a81afd0f845b81b6_charity.jpg',
    text: 'CHARITY',
    path: '/charity'
  }
] as const

const RotatingGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [isTextHovered, setIsTextHovered] = useState(false)
  const lastTap = useRef(0)
  const textRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()

  // Double tap detection for mobile
  const handleTap = () => {
    const now = Date.now()
    const timeSince = now - lastTap.current
    if (timeSince < 300 && timeSince > 0) {
      navigate(images[currentIndex]?.path ?? '/')
    }
    lastTap.current = now
  }

  // Text scramble effect
  const scrambleText = (text: string) => {
    if (!textRef.current) return
    const chars = "abcdefghijklmnopqrstuvwxyz"
    let iterations = 0

    const interval = setInterval(() => {
      if (!textRef.current) {
        clearInterval(interval)
        return
      }

      textRef.current.innerHTML = text
        .split("")
        .map((letter, index) => {
          if (index < iterations) {
            return `<span class="letter ${isTextHovered ? 'text-blue-400' : ''}">${letter}</span>`
          }
          return `<span class="letter ${isTextHovered ? 'text-blue-400' : ''}">${
            chars[Math.floor(Math.random() * chars.length)]
          }</span>`
        })
        .join("")

      if (iterations >= text.length) {
        clearInterval(interval)
      }

      iterations += 1 / 3
    }, 30)

    return () => clearInterval(interval)
  }

  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % images.length)
      }, 3000)
      return () => clearInterval(timer)
    }
  }, [isHovered])

  useEffect(() => {
    const currentImage = images[currentIndex]
    if (currentImage) {
      scrambleText(currentImage.text)
    }
  }, [currentIndex, isTextHovered])

  const currentImage = images[currentIndex]
  if (!currentImage) return null

  return (
    <div className="flex flex-col items-center gap-8">
      <motion.div
        className="relative w-[100px] h-[100px] rounded-full overflow-hidden cursor-pointer"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={handleTap}
        whileHover={{ scale: 1.1 }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <motion.div
              className="absolute inset-0 border-4 rounded-full z-10 animate-glow"
              transition={{
                duration: 5,
                ease: "linear",
                repeat: Infinity
              }}
            />
            <img
              src={currentImage.src}
              alt={currentImage.text}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      <motion.div
        ref={textRef}
        className="text-white text-6xl font-thin tracking-[0.2em] cursor-pointer select-none"
        onHoverStart={() => setIsTextHovered(true)}
        onHoverEnd={() => setIsTextHovered(false)}
        onClick={() => navigate(currentImage.path)}
        whileHover={{ scale: 1.1 }}
      />
    </div>
  )
}

export default RotatingGallery 