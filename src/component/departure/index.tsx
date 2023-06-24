import React from "react";
import { Form } from "react-bootstrap";
import "./departure.css";
import { Link, useNavigate } from "react-router-dom";
import hero from "../../assets/hero2.jpg";

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
      <div id="hero" className="hero img-fluid"
                style={{
                  backgroundImage: `url(${hero})`,
                }}>
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
        <div className="row justify-content-md-center text-center my-5"
                        style={{
                          backgroundColor: '#b6e9fb',
                        }}>
        <div className='signup-container'>

  <div className='right-container'>
    <header>

      <div className='set my-4'>
        <div className='pets-name'>
        <Form.Group>
            <Form.Control
              type="text"
              placeholder="D'ou partez vous"
              name="to"
              className="leaving-formA"
            />
          </Form.Group>
        </div>
        <div className='pets-name'>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Ou allez vous"
              name="to"
              className="leaving-formA"
            />
          </Form.Group>
        </div>
        <div className='pets-photo'>
        <Form.Group>
            <Form.Control
              type="date"
              placeholder="Quand partez vous"
              name="to"
              className="leaving-formA"
            />
          </Form.Group>
        </div>
      </div>
      <div className='set my-4'>
        <div className='pets-gender'>
        <label htmlFor=''>Genre</label>

          <div className='radio-container '>
          <Form.Control
                className="form-control rounded "
                type="radio"
                name="depart"
                id="pet-gender-female"
                value=""
                placeholder="Saisissez l'addresse precise "
              ></Form.Control>
            <label htmlFor='pet-gender-female'>Female</label>
            <Form.Control
                className="form-control rounded  "
                type="radio"
                name="depart"
                id="pet-gender-male"
                value=""
                placeholder="Saisissez l'addresse precise "
              ></Form.Control>
            <label htmlFor='pet-gender-male'>Male</label>
          </div>
        </div>
        <div className='pets-gender'>
        <label htmlFor=''>Voulez vous prendres des cosmetics</label>

          <div className='radio-container '>
          <Form.Control
                className="form-control rounded "
                type="radio"
                name="cosmetics"
                id="cosmetics-yes"
                value=""
              ></Form.Control>
            <label htmlFor='cosmetics-yes'>oui</label>
            <Form.Control
                className="form-control rounded  "
                type="radio"
                name="cosmetics"
                id="cosmetics-no"
                value=""
              ></Form.Control>
            <label htmlFor='cosmetics-no'>non</label>
          </div>
        </div>
        <div className='pets-spayed-neutered'>
          <label htmlFor='pet-spayed'>Voulez vous prendres des electroniques</label>
          <div className='radio-container'>
          <Form.Control
                className="form-control rounded  "
                type="radio"
                name="pet-neutered"
                id="pet-spayed"
                value=""
                placeholder="Saisissez l'addresse precise "
              ></Form.Control>
            <label htmlFor='pet-spayed'>oui</label>
            <Form.Control
                className="form-control rounded  "
                type="radio"
                name="pet-neutered"
                id="pet-neutered"
                value=""
                placeholder="Saisissez l'addresse precise "
              ></Form.Control>
            <label htmlFor='pet-neutered'>non</label>
          </div>
        </div>
      </div>
      <div className='pets-weight my-4'>
        <p>Estimations du poids que vous pouvez prendre</p>
        <div className='radio-container'>
        <Form.Control
                className="form-control rounded  "
                type="radio"
                name="pet-weight"
                id="pet-weight-0-25"
                value="0-25"
              ></Form.Control>
          <label htmlFor='pet-weight-0-25'>0-25 lbs</label>
          <Form.Control
                className="form-control rounded  "
                type="radio"
                name="pet-weight"
                id="pet-weight-25-50"
                value="25-50"
              ></Form.Control>
          <label htmlFor='pet-weight-25-50'>25-50 lbs</label>
          <Form.Control
                className="form-control rounded  "
                type="radio"
                name="pet-weight"
                id="pet-weight-50-100"
                value="50-100"
              ></Form.Control>
          <label htmlFor='pet-weight-50-100'>50-100 lbs</label>
          <Form.Control
                className="form-control rounded  "
                type="radio"
                name="pet-weight"
                id="pet-weight-100-plus"
                value="100+"
              ></Form.Control>
          <label htmlFor='pet-weight-100-plus'>100+ lbs</label>
        </div>
      </div>

    </header>
  </div>
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
