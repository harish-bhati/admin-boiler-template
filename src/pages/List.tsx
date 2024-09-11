import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Iframe from "../components/Iframe";
import Table from "../components/Table";
import CardList from "../components/CardList";
const List = () => {
  return (
    <section className="flex">
    <Sidebar />
    <main className="flex flex-col w-full">
    <Header/>
    <section>
      <Iframe/>
      <Table/>
    </section>
    <section>
      <CardList/>
      <div>
        <h1>Calender</h1>
      </div>
    </section>
  </main>
</section>
  )
}

export default List;