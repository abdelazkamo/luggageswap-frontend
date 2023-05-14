import { Link } from "react-router-dom";
import "./index.css";

function Offer() {
  return (
    <>
      <div id="hero" className="hero img-fluid">
        <div
          className="hero-box"
          // style={{
          //   borderRadius: "10px",
          //   border: "1px solid #ccc",
          //   margin: "20rem 15rem 8rem 15rem",
          //   padding: "1rem",
          //   display: "flex",
          //   flexDirection: "column",
          // }}
        >
          <h3>Promo 200 %</h3>
        </div>
      </div>

      <div className=" d-flex justify-content-center">
        <div className="col-8 ">
          <h1>Recevez jusqu’à 100 € de Bonus Covoiturage</h1>
          <h3>Voici la marche à suivre :</h3>
          <div className="row justify-content-start">
            <h5>Publiez votre trajet</h5>
            <p>
              et indiquez les informations nécessaires pour recevoir vos bonus
            </p>
          </div>
          <div className="row justify-content-start">
            <h5>Voyagez avec au moins un passagert</h5>
            <p>En France sur un trajet de plus 80 km</p>
          </div>
          <div className="row justify-content-start">
            <h5>Recevez 25 € pour votre premier covoiturage</h5>
            <p>
              et 75 € pour votre troisième trajet, en partenariat avec
              TotalEnergies Marketing France*
            </p>
          </div>
          <div>
            <Link to={"#"}>*Conditions générales</Link>
          </div>
          <div className=" row justify-content-center">
            <Link
              to={"/offer-seats/departure"}
              className="btn btn-primary rounded-pill col-xl-4"
            >
              {" "}
              Publier un trajet
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Offer;
