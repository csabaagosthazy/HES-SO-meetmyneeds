import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CustomButton from "./CustomButton";

import { COLORS } from "../../global/colors";

/**
 * Button group renders 5 buttons with the given text and color
 * @returns Button group component
 */
const CustomButtonGroup = ({ variant, textObj }) => {
  const colorSet = variant ? Object.values(COLORS[variant]) : COLORS.blueSet;
  const [selected, setSelected] = React.useState(-1);
  const handleSelect = (e) => {
    setSelected(e.target.name);
  };
  return (
    <Container data-testid="buttonGroup">
      <Row className="justify-content-center" xs={5}>
        {Object.entries(textObj).map(([key, value], i) => {
          return (
            <Col md="auto" key={key}>
              <CustomButton
                name={key}
                bgColor={colorSet[i]}
                variant={"m"}
                focusColor={"white"}
                selected={selected === key}
                onClick={(e) => handleSelect(e)}
              >
                {value}
              </CustomButton>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default CustomButtonGroup;
