import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./index.css";

interface JobCardProps {
  userName: string;
  origin: string;
  destination: string;
  depatureTime: string;
  arivalTime: string;
  availableSpace: string;
  price: string;
  onClick: () => void;
}

function flightCard(props: JobCardProps) {
  return (
    <Col sm={12} md={6} lg={6} xl={6}>
      <Card className="job-card">
        <Card.Body>
          <Row>
            <Col>
              <div className="job-card-header">
                <Card.Title>{props.userName}</Card.Title>
              </div>
              <div className="item">
                <div className="item">
                  <div>
                    <Card.Text className="sub">{props.origin}</Card.Text>
                    <Card.Text className="sub">{props.destination}</Card.Text>
                  </div>
                  <div>
                    <Card.Text className="sub">{props.depatureTime}</Card.Text>
                    <Card.Text className="sub">{props.arivalTime}</Card.Text>
                  </div>
                  <div>
                    <Card.Text className="planeicon">
                      {props.availableSpace}
                    </Card.Text>
                  </div>
                </div>
                <div className="planeicon">
                  <i className="fas fa-plane fa-4x text-info"></i>
                  <div>{props.price} per KG</div>
                </div>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default flightCard;
