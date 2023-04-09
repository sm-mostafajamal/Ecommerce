import styled from "styled-components";
import Badge from "@mui/material/Badge";
import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  /* display: flex; */
  ${mobile({ display: "none" })}
`;
const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.5px solid lightgray;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${mobile({ marginLeft: "10px" })}
`;
const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
  a {
    text-decoration: none;
    color: black;
  }
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ marginLeft: "5px", fontSize: "18px" })}
  cursor: pointer;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "5px" })}
`;
const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Link to={"/"}>
            <Logo>ECOMMERCE.</Logo>
          </Link>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>LOG IN</MenuItem>
          <MenuItem>
            <Link to={"/cart"}>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
