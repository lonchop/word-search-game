import { useState } from "react";
import { fetchData } from "@/services/fetchData";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/App.css";
import Navbar from "@/components/Navbar";

function App() {
  // const [words, setWords] = useState([]);

  // const handleClick = async () => {
  //   const response = await fetchData(2, 8);
  //   console.log(response);
  //   setWords(response);
  // };

  return (
    <>
      <div className="d-flex min-vh-100 w-100">
      <Navbar />

        {/* <h1 className="display-1 text-black fw-bold">Word Search Game</h1>
        <button
          className="btn btn-outline-primary btn-lg"
          onClick={handleClick}
        >
          Words
        </button>
        {words.map((word) => (
          <p key={crypto.randomUUID()} className="fs-2">
            {word}
          </p>
        ))} */}
      </div>
    </>
  );
}

export default App;
