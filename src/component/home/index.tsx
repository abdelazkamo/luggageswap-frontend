import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
//import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaAddressBook, FaCalendarAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";

interface FormData {
  from: string;
  to: string;
  date: Date;
  passengers: number;
}

const Home = () => {
  const [formData, setFormData] = React.useState<FormData>({
    from: "",
    to: "",
    date: new Date(),
    passengers: 1,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleDateChange = (date: Date) => {
  //   setFormData({ ...formData, date });
  // };

  const handlePassengerChange = (value: number) => {
    setFormData({ ...formData, passengers: value });
  };
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/landing");
  };

  return (
    <>
      <div
        id="hero"
        className="hero"
        style={{
          backgroundImage:
            "url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)",
        }}
      >
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
          <Form onSubmit={handleSubmit} style={{ flexGrow: 1 }}>
            <Row>
              <Col style={{ borderRight: "1px solid #ccc" }}>
                <Form.Group>
                  <Form.Control
                    type="text"
                    placeholder="Leaving from"
                    name="from"
                    value={formData.from}
                    onChange={handleInputChange}
                    style={{
                      background: "transparent",
                      border: "none",
                      boxShadow: "none",
                      outline: "none",
                    }}
                  />
                </Form.Group>
              </Col>
              <Col style={{ borderRight: "1px solid #ccc" }}>
                <Form.Group>
                  <Form.Control
                    type="text"
                    placeholder="Going to"
                    name="to"
                    value={formData.to}
                    onChange={handleInputChange}
                    style={{
                      background: "transparent",
                      border: "none",
                      boxShadow: "none",
                      outline: "none",
                    }}
                  />
                </Form.Group>
              </Col>
              <Col style={{ borderRight: "1px solid #ccc" }}>
                <Row style={{ display: "flex", alignItems: "center" }}>
                  <div>
                    <FaCalendarAlt size={24} style={{ color: "#666" }} /> Today
                  </div>
                  <div>
                    {/* <Form.Group>
      <DatePicker
        selected={formData.date}
        onChange={handleDateChange}
        dateFormat="yyyy/MM/dd"
        minDate={new Date()}
      />
    </Form.Group> */}
                  </div>
                </Row>
              </Col>

              <Col>
                <Form.Group>
                  <div className="d-flex align-items-center">
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      onClick={() =>
                        handlePassengerChange(
                          Math.max(formData.passengers - 1, 1)
                        )
                      }
                    >
                      -
                    </Button>
                    <span className="mx-2">{formData.passengers}</span>
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      onClick={() =>
                        handlePassengerChange(formData.passengers + 1)
                      }
                    >
                      +
                    </Button>
                  </div>
                </Form.Group>
              </Col>
              <Col>
                <div style={{ display: "flex", marginTop: "auto" }}>
                  <Button
                    variant="primary"
                    type="submit"
                    style={{ marginLeft: "auto" }}
                  >
                    Search
                  </Button>
                </div>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
      <section className="bonus" id="bonus">
        <div className="bonus-img">
          <img src="" alt="" />
        </div>
        <div className="bonus-content">
          <h3>Recevez jusqu'à 100 € de Bonus Covoiturage !</h3>
          <p>
            Conducteurs, conductrices, bonne nouvelle : vos bonnes habitudes
            sont récompensées ! Bénéficiez du Bonus Covoiturage en réalisant 3
            covoiturages en 3 mois, voir les conditions d'éligibilité.
          </p>
          <Link to={"#"} className="btn">
            {" "}
            En savoir plus{" "}
          </Link>
        </div>
      </section>
      <section className="bonus" id="bonus">
        <div className="bonus-content">
          <h3>Doublez votre Bonus Covoiturage de 100 € avec BlaBlaCar Daily</h3>
          <p>
            Conducteurs, conductrices, bonne nouvelle : vos bonnes habitudes
            sont récompensées ! Bénéficiez du Bonus Covoiturage en réalisant 3
            covoiturages en 3 mois, voir les conditions d'éligibilité.
          </p>
          <Link to={"#"} className="btn">
            {" "}
            En savoir plus{" "}
          </Link>
        </div>
        <div className="bonus-img">
          <img src="" alt="" />
        </div>
      </section>
      <section id="quality" className="quality">
        <div className="quality-content">
          <div className="quality-box">
            <FaAddressBook size={24} style={{ color: "#666" }} />
            <h3>Vos trajets préférés à petits prix</h3>
            <p>
              Où que vous alliez, en bus ou en covoiturage, trouvez le trajet
              idéal parmi notre large choix de destinations à petits prix.
            </p>
          </div>
          <div className="quality-box">
            <FaAddressBook size={24} style={{ color: "#666" }} />
            <h3>Voyagez en toute confiance</h3>
            <p>
              Voyagez en toute confiance Nous prenons le temps qu’il faut pour
              connaître nos membres et nos compagnies de bus partenaires. Nous
              vérifions les avis, les profils et les pièces d’identité. Vous
              savez donc avec qui vous allez voyager pour réserver en toute
              confiance sur notre plateforme sécurisée.
            </p>
          </div>
          <div className="quality-box">
            <FaAddressBook size={24} style={{ color: "#666" }} />
            <h3>Recherchez, cliquez et réservez !</h3>
            <p>
              Réserver un trajet devient encore plus simple ! Facile
              d'utilisation et dotée de technologies avancées, notre appli vous
              permet de réserver un trajet à proximité en un rien de temps.
            </p>
          </div>
        </div>
      </section>
      <div id="travel" className="travel">
        <div className="travel-head">
          <h2>Ou allez-vous</h2>
        </div>
        <div className="travel-content">
          {" "}
          <Col className="travel-box">Bordeau - Toulouse</Col>
          <Col className="travel-box">Bordeau - Toulouse</Col>
          <Col className="travel-box">Bordeau - Toulouse</Col>
        </div>
      </div>
      <section className="bonus" id="bonus">
        <div className="bonus-img">
          <img src="" alt="" />
        </div>
        <div className="bonus-content">
          <h3>
            Découvrez de nouvelles villes sans vous ruiner avec les bus
            BlaBlaCar !
          </h3>
          <p>
            Chaque semaine, chaque mois. Pour une réunion importante ou juste
            parce que vous avez envie de voir un nouvel endroit. Avec une grande
            famille. Ou un gros bagage. Vers la mer comme vers les pistes de
            ski. Peu importe votre voyage, il sera toujours simple et abordable
            avec les bus BlaBlaCar
          </p>
          <Link to={"#"} className="btn">
            {" "}
            Decouvrir nos offres{" "}
          </Link>
        </div>
      </section>
      <div id="travel" className="travel">
        <div className="travel-head">
          <h2>Le top des destinations</h2>
        </div>
        <div className="travel-content">
          {" "}
          <Col className="travel-box">Bordeau - Toulouse</Col>
          <Col className="travel-box">Bordeau - Toulouse</Col>
          <Col className="travel-box">Bordeau - Toulouse</Col>
        </div>
      </div>
    </>
  );
};

export default Home;
