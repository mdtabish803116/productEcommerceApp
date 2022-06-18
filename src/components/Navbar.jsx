import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavbarWrapper = styled.div`
      display : flex;
      align-items : center;
      height : 40px;
      justify-content : space-around;
      background : purple;

`

const StyledLink = styled(Link)`
      color : white;
      

`
const Navbar = () => {
     return(
          <NavbarWrapper>
                  <StyledLink to="/">HOME</StyledLink>
                  <StyledLink to="/allProducts">ALL PRODUCTS</StyledLink>
          </NavbarWrapper>
     )
}

export {Navbar};