import Iframe from "../components/Iframe";
import Table from "../components/Table";
import CardList from "../components/CardList";
const List = () => {
  return (
    <>
      <section className="h-[calc(100vh-83px)] overflow-y-auto">
        <Iframe/>
        <Table/>
        <CardList/>
      </section>
    </>
  )
}

export default List;