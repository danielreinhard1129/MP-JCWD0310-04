'use client';
import useGetPromotions from '@/hooks/api/event/useGetPromotions';
import { appConfig } from '@/utils/config';
import PromotionCard from './PromotionCard';

export default function PromotionEvent() {
  const { data: promotions } = useGetPromotions();

  return (
    <section className="bg-blue-700 w-full text-white md:pt-7 md:pb-10 py-6 pb-8">
      <div className=" px-8 container mx-auto md:px-36">
        <div className="md:pb-4 mb-2 text-center">
          <h1 className="font-bold md:text-2xl text-xl">PROMOTION !!!</h1>
          <p className="font-light">Kumpulan event-event laris manis di sini</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 py-4 md:gap-4">
          {promotions.map((promo, index) => {
            return (
              <PromotionCard
                key={index}
                title={promo.title}
                author={promo.organizer.username}
                category={promo.category}
                description={promo.description}
                location={promo.location}
                imageUrl={appConfig.baseURL + `/assets${promo.thumbnail}`}
                startDate={new Date(promo.startDate)}
                endDate={new Date(promo.endDate)}
                price={promo.price}
                eventId={promo.id}
                voucher={promo.voucher}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
