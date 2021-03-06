import React from "react";
import { Link } from "react-router-dom";

// PropTypes
import PropTypes from "prop-types";

// Styles
import { Wrapper, Content } from "./BreadCrumb.styles";

const BreadCrumb = ({ title }) => (
  <Wrapper>
    <Content>
      <Link to="/">
        <span>Home</span>
      </Link>
      <span>|</span>
      <span>{title}</span>
    </Content>
  </Wrapper>
);

BreadCrumb.propTypes = {
  title: PropTypes.string,
};

export default BreadCrumb;
