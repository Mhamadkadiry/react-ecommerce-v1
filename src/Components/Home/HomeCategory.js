import React from "react";
import { Container, Row } from "react-bootstrap";
import Subtitle from "../Utilities/Subtitle";
import CategoryCard from "../Category/CategoryCard";
import clothe from "../../Assets/clothe.png";
import cat2 from "../../Assets/cat2.png";
import laptop from "../../Assets/laptop.png";
import sale from "../../Assets/sale.png";
import pic from "../../Assets/pic.png";
import AllCategoriesPage from "../../Pages/Category/AllCategoriesPage";

const HomeCategory = () => {
  return (
    <Container className="category-home-subtitle">
      <Subtitle title="Categories" btntitle="more" linkTo="/allcategories" />
      <Row className="my-4 d-flex justify-content-between">
        <CategoryCard
          title="Home Appliance"
          img={clothe}
          background="#F4DBA4"
        />
        <CategoryCard title="Home Appliance" img={cat2} background="#33DBA4" />
        <CategoryCard
          title="Home Appliance"
          img={laptop}
          background="#0000A4"
        />
        <CategoryCard title="Home Appliance" img={sale} background="#88DBA4" />
        <CategoryCard title="Home Appliance" img={pic} background="#4532A4" />
        <CategoryCard
          title="Home Appliance"
          img={clothe}
          background="#77AA14"
        />
      </Row>
    </Container>
  );
};

export default HomeCategory;
