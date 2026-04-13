import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PhysicsSection from './components/PhysicsSection';
import RingsSection from './components/RingsSection';
import MissionsSection from './components/MissionsSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="bg-black mix-blend-normal">
      <Navbar />
      <HeroSection />
      
      <div className="relative">
        <PhysicsSection />
        <hr className="deco" />
        <RingsSection />
        <hr className="deco" />
        <MissionsSection />
      </div>

      <Footer />
    </main>
  );
}
