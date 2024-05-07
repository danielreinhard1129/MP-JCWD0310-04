import Category from '@/components/Category';
import EmailNews from '@/components/EmailNews';
import EventCard from '@/components/EventCard';
import HeroSection from '@/components/HeroSection';
import PromotionCard from '@/components/PromotionCard';


export default function Home() {
  return (
    <main>
      {' '}
      <div className=" bg-white">
        <HeroSection />
        <PromotionCard/>
        <EventCard />
        <Category />
        <EmailNews />
      </div>
    </main>
  );
}
