import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'

interface NavigationMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const NavigationMenu = ({ isOpen, onClose }: NavigationMenuProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black z-50"
        >
          {/* Close Button */}
          <div className="fixed top-8 right-8">
            <button onClick={onClose} className="text-white text-xl">
              Close
            </button>
          </div>

          {/* Navigation Grid */}
          <div className="h-screen grid grid-cols-2">
            {[
              { path: '/art', text: 'ART' },
              { path: '/whisky', text: 'WHISKY' },
              { path: '/charity', text: 'CHARITY' },
              { path: '/about', text: 'ABOUT' }
            ].map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={`
                  flex items-center justify-center
                  ${index === 0 || index === 2 ? 'border-r' : ''} 
                  ${index < 2 ? 'border-b' : ''} 
                  border-gray-800
                `}
              >
                <span className="text-[8vw] font-extralight tracking-[0.2em] text-white">
                  {item.text}
                </span>
              </Link>
            ))}
          </div>

          {/* Home Icon */}
          <div className="fixed bottom-8 left-1/2 -translate-x-1/2">
            <Link to="/" onClick={onClose} className="text-white text-2xl">
              ⌂
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default NavigationMenu