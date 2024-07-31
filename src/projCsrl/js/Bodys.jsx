import React from "react";
import "../css/Bodys.css";
import Imgbd20 from "../img/body20.png";

function Bodys() {
  return (
    <>
      <div className="bodys_">
        <div> <br />
          <h1>Milestone</h1> <br />
        </div>
        <hr />
        <div>
          <h1>
            SUCCESS RATE OF CSRL SUPER 30 FROM 2009-2021 (ADMISSIONS ONLY)
          </h1>
           <br />
        </div>

        <div className="bodys_f">
          <img src={Imgbd20} alt="" />
        </div>
      </div>
    </>
  );
}
export default Bodys;
