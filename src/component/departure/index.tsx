import React from "react";
import { Form } from "react-bootstrap";
import "./index.css";
import { Link, useNavigate } from "react-router-dom";

interface FormData {
  from: string;
}
function Departure() {
  const [formData, setFormData] = React.useState<FormData>({
    from: "",
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/offer-seats/arrival");
  };

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
          <h3>Publier un trajet</h3>
        </div>
      </div>
      { <Form onSubmit={handleSubmit} style={{ flexGrow: 1 }}>
        <div className="row justify-content-md-center text-center">
          <div className="row justify-content-md-center">

          <div
              className="col-md-4 col-xl-4 col-xxl-4 col-sm-6 my-2  my-2 text-start"
              id="div-num_engin"
            >
              <label className="form-label fw-bolder" id="label_moto">
              D’où partez-vous
              </label>

              <Form.Control
                className="form-control rounded  "
                type="text"
                name="depart"
                value=""
                placeholder="Saisissez l'addresse precise "
              ></Form.Control>
            </div>
            </div>
          <div className="row justify-content-md-center">

            <div
              className="col-md-4 col-xl-4 col-xxl-4 col-sm-6 my-2  my-2 text-start"
              id="div-num_engin"
            >
              <label className="form-label fw-bolder" id="label_moto">
              Où allez-vous?
              </label>

              <Form.Control
                className="form-control rounded  "
                type="text"
                name="arrival"
                value=""
                placeholder="Saisissez l'addresse precise  "
              ></Form.Control>
            </div>
          </div>
          <div className="row justify-content-md-center text-start">
            <div
              className="col-md-4 col-xl-4 col-xxl-4 col-sm-6 my-2  my-2 text-start"
              id="add-cls"
            >
              <label
                id="add-label"
                className="form-label fw-bolder text-uppercase"
              >
                Quand partez-vous ?
              </label>
              <Form.Control
                className="form-control rounded  "
                type="date"
                name="date"
                value=""
                placeholder="Saisissez la date precise  "
              ></Form.Control>
            </div>
            </div>
          <div className="row justify-content-md-center">

            <div
              className="col-md-4 col-xl-4 col-xxl-4 col-sm-6 my-2  my-2 text-start"
              id="add-cls"
            >
              <label
                id="add-label"
                className="form-label fw-bolder text-uppercase"
              >
                À quelle heure souhaitez-vous retrouver vos passagers?
              </label>
              <Form.Control
                className="form-control rounded"
                type="time"
                name="heure"
                id="add-input"
                value=""
                placeholder="Saisissez votre Numéro "
              ></Form.Control>
            </div>
          </div>
          <div className="row justify-content-md-center text-start">
            <div
              className="col-md-4 col-xl-4 col-xxl-4 col-sm-6 my-2  my-2 text-start"
              id="add-cls"
            >
              <label
                id="add-label"
                className="form-label fw-bolder text-uppercase"
              >
                Combien de kilo pouvez vous prendre
              </label>
              <Form.Control
                className="form-control rounded  "
                type="number"
                name="kilo"
                value=""
                placeholder="Saisissez le poid exacte  "
              ></Form.Control>
            </div>
            </div>
          <div className="row justify-content-md-center">

            <div
              className="col-md-4 col-xl-4 col-xxl-4 col-sm-6 my-2  my-2 text-start"
              id="add-cls"
            >
              <label
                id="add-label"
                className="form-label fw-bolder text-uppercase"
              >Fixez votre prix par Kilo
              </label>
              <Form.Control
                className="form-control rounded"
                type="text"
                name="heure"
                id="add-input"
                value=""
                placeholder="Saisissez le montant "
              ></Form.Control>
            </div>
          </div>
          <div className=" row justify-content-center">
            <Link
              to={"/offer-seats/departure"}
              className="btn btn-primary rounded-pill col-xl-4"
            >
              {" "}
              Publier le trajet
            </Link>
          </div>

        </div>
      </Form> }

      {/* <div className=" d-flex justify-content-center">
        <div className="col-8 col-md-8 col-xl-6">
          <Form onSubmit={handleSubmit} style={{ flexGrow: 1 }}>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Going to"
                name="from"
                value={formData.from}
                onChange={handleInputChange}
                className="leaving-formD"
              />
            </Form.Group>
          </Form>
        </div>
      </div> */}
    </>
  );
}

export default Departure;
