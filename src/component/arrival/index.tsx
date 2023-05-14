import React from "react";
import { Form } from "react-bootstrap";
import "./index.css";

interface FormData {
  to: string;
}
function Arrival() {
  const [formData, setFormData] = React.useState<FormData>({
    to: "",
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
          <h3>Ou allez-vous</h3>
        </div>
      </div>
      <div className=" d-flex justify-content-center">
        <div className="col-8 col-md-8 col-xl-6">
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Going to"
              name="to"
              value={formData.to}
              onChange={handleInputChange}
              className="leaving-formA"
            />
          </Form.Group>
        </div>
      </div>
    </>
  );
}

export default Arrival;
