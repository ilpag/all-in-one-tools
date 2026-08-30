import Nav from './components/Nav'
import Hero from './components/Hero'
import Toolbelt from './components/Toolbelt'
import CategoryGrid from './components/CategoryGrid'
import WhyOffline from './components/WhyOffline'
import Screenshots from './components/Screenshots'
import DownloadSection from './components/DownloadSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Toolbelt />
        <CategoryGrid />
        <WhyOffline />
        <Screenshots />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  )
}
