import { useEffect, useRef } from 'react'

const languages = [
  "🌐 اجعل العالم مكانًا أفضل",
  "🌐 পৃথিবীকে একটি আরও ভালো জায়গায় কর",
  "🌐 Faça do mundo um lugar melhor",
  "🌐 Сделай мир лучше",
  "🌐 世界をより良い場所にしよう",
  "🌐 ਦੁਨੀਆ ਨੂੰ ਇੱਕ ਬਿਹਤਰ ਥਾਂ ਬਣਾਓ"
]

const LanguageCarousel = () => {
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const items = [...languages, ...languages].map((text) => {
      const div = document.createElement('div')
      div.className = 'inline-block px-6 text-white/80 text-sm whitespace-nowrap'
      div.textContent = text
      return div
    })

    track.innerHTML = ''
    items.forEach(item => track.appendChild(item))

    const firstItem = track.firstElementChild as HTMLElement
    if (firstItem) {
      const itemWidth = firstItem.offsetWidth * languages.length
      track.style.setProperty('--translate', `-${itemWidth}px`)
    }
  }, [])

  return (
    <div className="w-full overflow-hidden border-b border-white">
      <div className="w-full overflow-hidden py-4">
        <div 
          ref={trackRef}
          className="flex animate-carousel"
          style={{
            animation: 'carousel 30s linear infinite'
          }}
        />
      </div>
    </div>
  )
}

export default LanguageCarousel 