import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Iframe from "../components/Iframe";
import CardList from "../components/CardList";
import InvoiceTable from "../components/InvoiceTable";
const Invoice = () => {
  return (
    <section className="flex">
    <Sidebar />
    <main className="flex flex-col w-full">
    <Header/>
    <section>
      <InvoiceTable/>
    </section>
  </main>
</section>
  )
}

export default Invoice;