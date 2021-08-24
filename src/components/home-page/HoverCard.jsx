import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const HoverCard = (props) => {
  const { title } = props;

  return (
    <Square>
      <Content>
        <Title>{title}</Title>
      </Content>
    </Square>
  );
};

export default HoverCard;

const Square = styled.div`
  width: 100%;
  border: solid 3px black;
  position: relative;

  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`;

const Content = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.div`
  font-size: 1rem;
  text-align: center;
  margin-top: auto;
  margin-bottom: auto;
  color: black;
`;

HoverCard.propTypes = {
  title: PropTypes.string.isRequired,
};
