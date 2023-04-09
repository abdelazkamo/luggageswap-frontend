import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import "./index.css";

interface JobCardProps {
  flightNumber: string;
  origin: string;
  destination: string;
  depatureTime: string;
  arivalTime: string;
  onClick: () => void;
}

function flightCard(props: JobCardProps) {
  return (
    <Col sm={12} md={6} lg={6} xl={6}>
      <Card className="job-card">
        <Card.Body>
          <div className="job-card-header">
            <Card.Title>{props.flightNumber}</Card.Title>
            <Button variant="secondary" onClick={props.onClick}>
              Apply
            </Button>
          </div>
          <Card.Subtitle className="mb-2 text-muted">
            {props.origin}
          </Card.Subtitle>
          <Card.Text className="job-card-location">
            {props.destination}
          </Card.Text>
          <Card.Text className="job-card-location">
            {" "}
            {props.depatureTime}{" "}
          </Card.Text>
          <Card.Text className="job-card-location">
            {" "}
            {props.arivalTime}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default flightCard;
