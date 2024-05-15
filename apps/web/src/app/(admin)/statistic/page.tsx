import Chart from "../dashboard/components/Chart";

const Statistic = () => {
  return (
    <section className="container h-screen w-full ">
      <div className="text-4xl font-bold p-5 mt-10">
        <h1>Statistic </h1>
      </div>
      <div>
        <Chart/>
      </div>

      
    </section>
  );
};

export default Statistic;
