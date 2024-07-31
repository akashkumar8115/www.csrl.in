import "../css/About.css";
import Card from "./Card.jsx";
export default function About() {

  return (
    <>
      <div className="bg1">
        <div className="f">
          <h3 className="about"> ABOUT</h3>
          <h1>Centre for Social Responsibility and Leadership</h1>
          <p>
            CSRL was conceptualized in the year 2007 with the objective of
            working in the <br />
            field of corporate social responsibility. It is a <br />
            Registered Society working primarily in the field of education and
            leadership.
          </p>
          <br />
          <br />
          <div className="button">
            <button>Read More</button>
            <button id="news">News Event</button>
          </div>
        </div>
        <div className="s">
          <Card />
        </div>
      </div>
    </>
  );
}
