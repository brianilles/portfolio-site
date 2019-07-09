import React, { Component } from "react";
import styled from "styled-components";
import { PrimitiveDot } from "styled-icons/octicons/PrimitiveDot";
import { KeyboardArrowRight } from "styled-icons/material/KeyboardArrowRight";
import "../scss/Tabs.scss";
import { withRouter, Link } from "react-router-dom";

const PrimitiveDotBlue = styled(PrimitiveDot)`
  color: #0066ff;
  height: 25px;
  width: 25px;
`;

const PrimitiveDotGrey = styled(PrimitiveDot)`
  color: #d8d8d8;
  height: 25px;
  width: 25px;
`;

const KeyboardArrowRightBlack = styled(KeyboardArrowRight)`
  color: #000;
  height: 40px;
  width: 40px;
  cursor: pointer;
`;

class Tabs extends Component {
  state = {
    one: <PrimitiveDotGrey />,
    two: <PrimitiveDotGrey />,
    three: <PrimitiveDotGrey />,
    four: <PrimitiveDotGrey />
  };
  componentDidMount() {
    let { pathname } = this.props.location;
    if (pathname === "/") {
      this.setState({ one: <PrimitiveDotBlue /> });
    }
    if (pathname === "/about") {
      this.setState({ two: <PrimitiveDotBlue /> });
    }
    if (pathname === "/projects") {
      this.setState({ three: <PrimitiveDotBlue /> });
    }
    if (pathname === "/contact") {
      this.setState({ four: <PrimitiveDotBlue /> });
    }
  }

  render() {
    const { one, two, three, four } = this.state;
    return (
      <div className="tabs">
        <div className="dots">
          {one} {two} {three} {four}
        </div>
        <div className="arrow animated shake">
          {this.props.location.pathname === "/" ? (
            <Link to="/about">
              <KeyboardArrowRightBlack />
            </Link>
          ) : (
            " "
          )}
        </div>
      </div>
    );
  }
}

export default withRouter(Tabs);
