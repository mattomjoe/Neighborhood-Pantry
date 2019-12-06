import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function home() {
  return (
    <div>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Neighborhood Pantry</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
            A report by the National Resources Defense Council says that as much as 40% of all the food produced in the United States never gets eaten, totalling $165 billion worth that gets thrown away every year. The purpose then of Neighborhood Pantry will be to allow the user to interact with friends and neighbors to share excess food and reduce food waste. 
            </p>
            <p>
            When a neighbor finds themselves with extra cans of beans,an excess of tomatoes from their garden, or a bunch of cilantro aside from the three tablespoons they used in a recipe that they don’t think they will use, they simply post the items on the Neighborhood Pantry app and the neighbors they have in their group can select which items they may need and arrange a time to stop over and gather them. This will reduce food waste, save neighbors money and time, and promote a community of sharing within the neighborhood. 
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default home;
