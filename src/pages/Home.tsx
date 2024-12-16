import LanguageCarousel from '../components/LanguageCarousel'
import RotatingGallery from '../components/RotatingGallery'
import CircleMenu from '../components/CircleMenu'

const Home = () => {
  return (
    <div className="flex flex-col">
      <div className="border-b border-white">
        <LanguageCarousel />
      </div>
      <div className="flex-1 flex items-center justify-center">
        <RotatingGallery />
      </div>
      <div className="py-12">
        <CircleMenu />
      </div>
    </div>
  )
}

export default Home 