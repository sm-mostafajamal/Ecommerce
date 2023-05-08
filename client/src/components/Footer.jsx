import {
  Email,
  FacebookOutlined,
  GitHub,
  Instagram,
  LinkedIn,
  Phone,
  Place,
} from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  margin: 20px;
`;
const Left = styled.div`
  flex: 1;
`;
const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;
const Title = styled.h3`
  margin-bottom: 20px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const Payment = styled.img``;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Ecommerce</Logo>
        <Desc>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
          accusantium ipsa iure magni optio corporis necessitatibus at ipsum
          atque temporibus quae voluptas suscipit laborum totam, harum placeat.
          Labore, sequi deserunt!
        </Desc>
        <SocialContainer>
          <SocialIcon color="#3B5999">
            <GitHub />
          </SocialIcon>
          <SocialIcon color="#E4405F">
            <LinkedIn />
          </SocialIcon>
          <SocialIcon color="#55ACEE">
            <FacebookOutlined />
          </SocialIcon>
          <SocialIcon color="#E60023">
            <Instagram />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Place style={{ marginRight: "10px" }} />
          Halishahar, Chittagong
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          +880 1855536222
        </ContactItem>
        <ContactItem>
          <Email style={{ marginRight: "10px" }} />
          sm-mj@outlook.com
        </ContactItem>
        <Payment src="" />
      </Right>
    </Container>
  );
};

export default Footer;
