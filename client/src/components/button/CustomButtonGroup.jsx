import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CustomButton from "./CustomButton";

import { COLORS } from "../../global/colors";

/**
 * Button group renders 5 buttons with the given text and color
 * @returns Button group component
 */
const CustomButtonGroup = ({ variant, textObj, alreadySelected, onClick }) => {
  const colorSet = variant ? Object.values(COLORS[variant]) : COLORS.blue;
  const [selected, setSelected] = React.useState(-1);

  useState(() => {
    if (alreadySelected) setSelected(alreadySelected);
  }, []);
  const handleSelect = (e) => {
    setSelected(e.target.name);
    onClick(e.target.name);
  };
  return (
    <Container data-testid="buttonGroup">
      <Row className="justify-content-center" xs={5}>
        {Object.entries(textObj).map(([key, value], i) => {
          return (
            <Col md="auto" key={key}>
              <CustomButton
                name={value.technicalKey}
                bgColor={colorSet[i]}
                variant={"m"}
                focusColor={"black"}
                selected={selected === value.technicalKey}
                onClick={(e) => handleSelect(e)}
              >
                {value.label}
              </CustomButton>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default CustomButtonGroup;
