import React, { Component } from "react";
import styled from "styled-components";
import { PrimitiveDot } from "styled-icons/octicons/PrimitiveDot";
import { KeyboardArrowRight } from "styled-icons/material/KeyboardArrowRight";
import "../scss/Tabs.scss";
import { withRouter } from "react-router-dom";

const PrimitiveDotBlue = styled(PrimitiveDot)`
  color: #0066ff;
  height: 25px;
  width: 25px;
`;

const PrimitiveDotGrey = styled(PrimitiveDot)`
  color: lightgrey;
  height: 25px;
  width: 25px;
`;

const KeyboardArrowRightBlack = styled(KeyboardArrowRight)`
  color: #000;
  height: 45px;
  width: 45px;
  cursor: pointer;
`;

class Tabs extends Component {
  state = {
    path: ""
  };
  componentDidMount() {
    this.setState({ path: this.props.location.pathname });
  }
  render() {
    const { path } = this.state;
    return (
      <div className="tabs">
        <div className="dots">
          <PrimitiveDotBlue />
          <PrimitiveDotGrey />
          <PrimitiveDotGrey />
          <PrimitiveDotGrey />
        </div>
        {/* {path === "/" ? (
          <div className="arrow">
            <KeyboardArrowRightBlack />
          </div>
        ) : (
          <></>
        )} */}
      </div>
    );
  }
}

export default withRouter(Tabs);
