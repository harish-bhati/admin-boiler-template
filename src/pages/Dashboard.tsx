import Card from "../components/Card";
import Calender from "../components/Calender";
import Projects from "../components/Projects";
import Workers from "../components/Workers";
import Banner from "../components/Banner";
import Transactions from "../components/Transactions";
import TotalIncome from "../components/TotalIncome";

const Dashboard = () => {
  return (
    <section>
      <div>
        <Banner />
      </div>
      <div className="grid grid-cols-2 gap-6 p-5 w-full">
        <Card />
        <Calender />
        {/* <Projects />
        <Workers /> */}
      </div>
      <div className="grid grid-cols-2 gap-3 ">
        <Transactions/>
        <TotalIncome/>
      </div>
    </section>
  );
};

export default Dashboard;
