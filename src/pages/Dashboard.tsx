import Card from "../components/Card";
import Calender from "../components/Calender";
import Projects from "../components/Projects";
import Workers from "../components/Workers";
import Banner from "../components/Banner";
import Transactions from "../components/Transactions";
import TotalIncome from "../components/TotalIncome";
// import LineChartData from "../components/LineChart";

const Dashboard = () => {
  return (
    <div className='px-5 py-7 space-y-6 bg-blue-bg'>
      <Banner />
      <Card />
      <div className='grid grid-cols-2 gap-5'>
        <Transactions />
        <TotalIncome />
      </div>
    </div>
  );
};
export default Dashboard;
