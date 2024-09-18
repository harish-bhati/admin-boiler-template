import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Iframe from "../components/Iframe";
import Table from "../components/Table";
import CardList from "../components/CardList";
const List = () => {
  return (
    <>
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
    </>
  )
}

export default List;