import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
//import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

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
    <div
      style={{
        borderRadius: "10px",
        border: "1px solid #ccc",
        margin: "20rem 15rem 8rem 15rem",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
      }}
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
                    handlePassengerChange(Math.max(formData.passengers - 1, 1))
                  }
                >
                  -
                </Button>
                <span className="mx-2">{formData.passengers}</span>
                <Button
                  variant="outline-secondary"
                  size="sm"
                  onClick={() => handlePassengerChange(formData.passengers + 1)}
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
  );
};

export default Home;
