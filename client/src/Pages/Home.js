import NavBarComponent from "../components/NavBarComponent";
import ShowAllClients from "../components/ShowAllClients";
import { useTransactions } from "../context/TranContext";
function Home() {
  return (
    <>
      <NavBarComponent />
      <ShowAllClients />
    </>
  );
}

export default Home;