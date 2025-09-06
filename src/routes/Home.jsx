import HeroSection from '../components/HeroSection'
import ImageGallery from '../components/ImageGallery'
import Category from '../components/Category'
import AboutUs from '../components/AboutUs'
import ConnectUs from '../components/ConnectUs'
import Team from '../components/Team'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <HeroSection />
      <br />
      <ImageGallery />
      <br />
      <Category />
      <AboutUs />
      <ConnectUs />
      <Team />
      <Footer />
    </>
  )
}
