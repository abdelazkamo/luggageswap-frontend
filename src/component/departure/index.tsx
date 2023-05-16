import React from "react";
import { Form } from "react-bootstrap";
import "./index.css";
import { useNavigate } from "react-router-dom";

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
          <h3>D’où partez-vous ?</h3>
        </div>
      </div>
      {/* <Form onSubmit={handleSubmit} style={{ flexGrow: 1 }}>
        <div className="row justify-content-md-center text-center">
          <div className="row justify-content-md-center">
            <div
              className="col-md-4 col-xl-4 col-xxl-4 col-sm-6  text-start"
              id="add-cls"
            >
              <label className="form-label fw-bolder mt-2">Véhicule</label>
              <Form.Control
                className="form-control rounded"
                type="hidden"
                name="jj"
                value=""
                disabled
              ></Form.Control>
            </div>
            <div className="col-md-4 col-xl-4 col-xxl-4 col-sm-6 my-2  my-2 text-start">
              <label
                id="add-label"
                className="form-label fw-bolder text-uppercase"
              >
                Montant
              </label>
              <Form.Control
                className="form-control rounded"
                type="hidden"
                name="montant"
                value=""
                disabled
              ></Form.Control>
              <Form.Control
                className="form-control rounded"
                type="text"
                id="montant"
                value=""
                disabled
              ></Form.Control>
            </div>
            <div
              className="col-md-4 col-xl-4 col-xxl-4 col-sm-6 my-2  my-2 text-start"
              id="div-num_engin"
            >
              <label className="form-label fw-bolder" id="label_moto">
                N° IMMATRICULATION
              </label>

              <Form.Control
                className="form-control rounded  "
                type="text"
                name="numero_engin"
                id="hide-input2"
                value=""
                placeholder="Saisissez le numero "
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
                PéAGE
              </label>
              <select
                id="document"
                name="peage_id"
                className="form-select rounded"
              >
                <option value="">Sélectionnez </option>
              </select>
            </div>
            <div
              className="col-md-4 col-xl-4 col-xxl-4 col-sm-6 my-2  my-2 text-start"
              id="add-cls"
            >
              <label
                id="add-label"
                className="form-label fw-bolder text-uppercase"
              >
                Téléphone
              </label>
              <Form.Control
                className="form-control rounded"
                type="text"
                name="telephone"
                id="add-input"
                value=""
                placeholder="Saisissez votre Numéro "
              ></Form.Control>
            </div>
          </div>
        </div>
      </Form> */}

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
