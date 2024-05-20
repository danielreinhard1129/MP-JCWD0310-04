import ChartByYear from '../dashboard/components/ChartByYears';

const Statistic = () => {
  return (
    <section className="container h-screen w-full ">
      <div className="text-4xl font-bold p-5 mt-10">
        <h1>Statistic </h1>
      </div>
      <div>
        {/* <Chart/> */}
        <ChartByYear />
      </div>
    </section>
  );
};

export default Statistic;
