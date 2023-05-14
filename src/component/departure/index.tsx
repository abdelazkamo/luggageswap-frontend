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

      <div className=" d-flex justify-content-center">
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
      </div>
    </>
  );
}

export default Departure;
