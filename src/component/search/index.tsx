import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./index.css";
import { FaClock, FaHourglass, FaMoneyBillWave, FaUser } from "react-icons/fa";

interface FormData {
  from: string;
  to: string;
  date: Date;
  passengers: number;
}
function Search() {
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
      <div id="hero" className="hero img-fluid">
        <div className="hero-box">
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
                    className="leaving-form"
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
                    className="leaving-form"
                  />
                </Form.Group>
              </Col>
              <Col style={{ borderRight: "1px solid #ccc" }}>
                <Form.Group>
                  <Form.Control
                    type="date"
                    placeholder="date"
                    name="from"
                    value=""
                    className="leaving-form"
                  />
                </Form.Group>

                {/* <Row className="calandar-form">
                  <div>
                    <FaCalendarAlt size={24} style={{ color: "#666" }} /> Today
                  </div>
                  <div>
                    <Form.Group>
      <DatePicker
        selected={formData.date}
        onChange={handleDateChange}
        dateFormat="yyyy/MM/dd"
        minDate={new Date()}
      />
    </Form.Group> 
                  </div>
                </Row> */}
              </Col>

              <Col>
                <Form.Group>
                  <div className="d-flex align-items-center">
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      className=" bg-white text-black"
                      onClick={() =>
                        handlePassengerChange(
                          Math.max(formData.passengers - 1, 1)
                        )
                      }
                    >
                      -
                    </Button>
                    <span className="mx-2 text-black">
                      {formData.passengers}
                    </span>
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      className=" bg-white text-black"
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
      <div className="search-content">
        <aside className="aside-search">
          <div className="row container d-flex  m-2">
            <div className="row justify-content-between my-3">
              <div className="col-4">Trier par</div>
              <div className="col-4">Tout effacer</div>
            </div>
            <div className="row justify-content-between my-3">
              <div className="col-auto">
                <FaClock size={24} style={{ color: "#666" }} /> depart le plus
                tot
              </div>
              <div className="col-4 text-center">
                <Form.Check inline name="group1" />
              </div>
            </div>
            <div className="row justify-content-between my-3">
              <div className="col-auto">
                <FaMoneyBillWave size={24} style={{ color: "#666" }} /> prix le
                plus bas
              </div>
              <div className="col-4 text-center">
                <Form.Check inline name="group1" />
              </div>
            </div>
            <div className="row justify-content-between my-3">
              <div className="col-auto">
                <FaUser size={24} style={{ color: "#666" }} /> Proche du point
                de depart
              </div>
              <div className="col-4 text-center">
                <Form.Check inline name="group1" />
              </div>
            </div>
            <div className="row justify-content-between my-3">
              <div className="col-auto">
                <FaUser size={24} style={{ color: "#666" }} /> Proche du point
                d'arrivée
              </div>
              <div className="col-4 text-center">
                <Form.Check inline name="group1" />
              </div>
            </div>
            <div className="row justify-content-between my-3">
              <div className="col-auto">
                <FaHourglass size={24} style={{ color: "#666" }} /> depart le
                plus tot
              </div>
              <div className="col-4 text-center">
                <Form.Check inline name="group1" />
              </div>
            </div>
            <div className="row justify-content-between my-3">
              <div className="col-auto">
                <FaClock size={24} style={{ color: "#666" }} /> depart le plus
                tot
              </div>
              <div className="col-4 text-center">
                <Form.Check inline name="group1" />
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <span className="col-md-10 btn btn-secondary rounded-pill"></span>
          </div>
          <div className="row container d-flex  m-2">
            <div className="row justify-content-between my-3">
              <div className="col-4">Heure de départ</div>
            </div>
            <div className="row justify-content-between my-3">
              <div className="col-auto">06:00 - 12:00</div>
              <div className="col-4 text-center">
                <Form.Check inline name="group1" />
              </div>
            </div>
            <div className="row justify-content-between my-3">
              <div className="col-auto">12:01 - 18:00</div>
              <div className="col-4 text-center">
                <Form.Check inline name="group1" />
              </div>
            </div>
            <div className="row justify-content-between my-3">
              <div className="col-auto">apres 18:01</div>
              <div className="col-4 text-center">
                <Form.Check inline name="group1" />
              </div>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}

export default Search;
