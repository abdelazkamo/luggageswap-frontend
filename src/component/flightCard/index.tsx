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
              <div>
                <Row>
                  <Col md={6}>
                    <Card.Text className="sub">{props.origin}</Card.Text>
                    <Card.Text className="sub">{props.destination}</Card.Text>
                  </Col>
                  <Col md={3}>
                    <Card.Text className="sub">{props.depatureTime}</Card.Text>
                    <Card.Text className="sub">{props.arivalTime}</Card.Text>
                  </Col>
                  <Col md={3}>
                    <Card.Text className="planeicon">
                      {props.availableSpace}
                    </Card.Text>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col>
              <div className="planeicon">
                <i className="fas fa-plane fa-4x text-info"></i>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default flightCard;
