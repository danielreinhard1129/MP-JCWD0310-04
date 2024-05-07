import Image from 'next/image';

const PromotionCard = () => {
  return (
    <section className="container relative py-8 px-20 h-full ">
      <div className="absolute inset-0 overflow-hidden mx-20 my-5 rounded-sm h-full bg-opacity-75 bg-gradient-to-tr from-black via-60% to-100%">
        <Image
           src="https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
           alt="heroSection"
           objectFit="cover"
           fill
        />
      </div>
      <div className="inset-0 text-black relative">
        <h1 className="text-4xl font-semibold">Promotions</h1>
        <div className='text-lg text-white'>
          <p>Code:</p>
          <p className='bg-[#EC6D47] w-1/6'>ASDFGHJKL</p>
        </div>
      </div>
    </section>
  );
};

export default PromotionCard;
