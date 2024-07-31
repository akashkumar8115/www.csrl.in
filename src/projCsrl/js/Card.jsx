import "../css/Card.css";

export default function Card() {
  return (
    <>
      <div className="box">
        <div className="box_upper">
          <h1>Our Mission,<br /> Vision <br /> & Values</h1>
          <p>
            Accountable: We are custodians (guardians) of the resources
            entrusted to us, We are responsible in letter and in spirit, both
            financially..
          </p>
          <button id="more">More</button>
        </div>

        <div className="box_lower">
          <h1>Admission</h1>
          <ol>
            <li>Written Test Result</li>
            <li>Interview Result</li>
            <li>Final Registration</li>
          </ol>
        </div>
      </div>
    </>
  );
}
