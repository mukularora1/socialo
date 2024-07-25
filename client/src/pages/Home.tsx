import Modal from "../components/modal/Modal";
import Header from "../layout/Header/Header";

function Home() {
  return (
    <>
      <Header />
      <Modal backdrop={true} show={true} />
    </>
  );
}

export default Home;
