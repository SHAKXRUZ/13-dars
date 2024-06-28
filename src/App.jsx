import "./App.css";
import { useState } from "react";
// import data from "./data.json";

import Login from "./components/login/Login";
function App() {
  // const [catalogIndex, setCatalogIndex] = useState(0);

  const [active, setActive] = useState(false)
  return (
    // <div className="container">
    //   <div className="wrap">
    //     {data.map((cata, index) => (
    //       <div className="box">
    //         <div
    //           onMouseMove={() => setCatalogIndex(index)}
    //           style={
    //             catalogIndex === index
    //               ? { backgroundColor: "rgba(251, 193, 0, .2)" }
    //               : null
    //           }
    //           className="cata"
    //         >
    //           <img src={cata.img} alt="" />
    //           <p>{cata.title}</p>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    //   <div className="row">
    //     {data.map((e, i) =>
    //       catalogIndex === i
    //         ? e.textGroup.map((c, a) => <p>{c.title}</p>)
    //         : null
    //     )}
    //   </div>
    // </div>

    <div>
      <button onClick={() => setActive(true)}>Click</button>
     { active === true && <Login  setActive={setActive}/>}
    </div>
  );
}
export default App;
