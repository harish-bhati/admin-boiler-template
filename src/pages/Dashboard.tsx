import Card from "../components/Card";
import Calender from "../components/Calender";
import Projects from "../components/Projects";
import Workers from "../components/Workers";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-2 gap-6 p-5 w-full h-[calc(100vh-74px)]">
      <Card />
      <Calender />
      <Projects />
      <Workers />
    </div>
  );
};

export default Dashboard;
