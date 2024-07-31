import React from "react";
import "../css/Bodyf.css";
import Imgbd01 from "../img/body01.png";
import Imgbd02 from "../img/body02.png";
import Imgbd03 from "../img/body03.png";
import Imgbd04 from "../img/body04.png";
import Imgbd05 from "../img/body05.png";

const Bodyf = () => {
  return (
    <div>
      <div className="body_">
        <div className="scal">
          <h1>Scale of Our Impact</h1>
        </div>

        <div className="body_s">
          <div className="body_box1">
            <h2 className="gold">14</h2>
            <h2 className="white">States</h2>
            <img src={Imgbd01} alt="" />
            <h2 className="white">600</h2>
            <h2 className="gold">Girl Student</h2>
            <p className="white">Girl students <br /> benefited from CSRL.</p>
          </div>

          <div className="body_box2">
            <div className="body_box1">
              <h2 className="gold">312</h2>
              <h2 className="white">Districts</h2>
              <img src={Imgbd02} alt="" />
              <h2 className="white">184516</h2>
              <h2 className="gold">Students</h2>
              <p className="white">
                Students covered in written <br /> examination till date
              </p>
            </div>
          </div>

          <div className="body_box3">
            <div className="body_box1">
              <h2 className="gold">2</h2>
              <h2 className="white">School Projects</h2>
              <img src={Imgbd03} alt="" />
              <h2 className="white">600</h2>
              <h2 className="gold">Girl Student</h2>
              <p className="white">Girl students <br /> benefited from CSRL.</p>
            </div>
          </div>
          <div className="body_box4">
            <div className="body_box1">
              <h2 className="gold">2</h2>
              <h2 className="white">Remedial Classes</h2>
              <img src={Imgbd04} alt="" />
              <h2 className="white">24</h2>
              <h2 className="gold">Projects</h2>
              <p className="white">
                19 Super-30 projects,<br /> 1 skill development <br /> and 1 health project
              </p>
            </div>
          </div>
          <div className="body_box5">
            <div className="body_box1">
              <h2 className="gold">6000</h2>
              <h2 className="white">Students Enrolled</h2>
              <img src={Imgbd05} alt="" />
              <h2 className="white">21</h2>
              <h2 className="gold">Locations</h2>
              <p className="white">
                Projects being executed <br /> at 16 locations in 9 States
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bodyf;
