import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import Calender from "../components/Calender";
import Projects from "../components/Projects";
import Workers from "../components/Workers";

const Dashboard = () => {
  return (
    <section className="flex">
        <Sidebar />
        <main className="flex flex-col w-full">
        <Header/>
        <div className="grid grid-cols-2 gap-6 p-5 w-full h-[calc(100vh-74px)]">
        <Card />
        <Calender />
        <Projects />
        <Workers />
        </div>
      </main>
    </section>
  );
};

export default Dashboard;
