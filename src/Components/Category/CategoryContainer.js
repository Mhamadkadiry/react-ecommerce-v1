import React from "react";
import { Container, Row } from "react-bootstrap";
import CategoryCard from "./../Category/CategoryCard";
import clothe from "../../Assets/clothe.png";
import cat2 from "../../Assets/cat2.png";
import laptop from "../../Assets/laptop.png";
import sale from "../../Assets/sale.png";
import pic from "../../Assets/pic.png";
const CategoryContainer = () => {
  return (
    <Container className="mb-5">
      <div className="admin-content-text mt-2 p-2 p-md-4">All Categories</div>
      <Row className="my-2 d-flex justify-content-between">
        <CategoryCard
          title="Home Appliance"
          img={clothe}
          background="#F4DBA4"
        />
        <CategoryCard title="Home Appliance" img={cat2} background="#F4DBA4" />
        <CategoryCard
          title="Home Appliance"
          img={laptop}
          background="#0034FF"
        />
        <CategoryCard title="Home Appliance" img={sale} background="#F4DBA4" />
        <CategoryCard
          title="Home Appliance"
          img={clothe}
          background="#FF6262"
        />
        <CategoryCard title="Home Appliance" img={pic} background="#F4DBA4" />
        <CategoryCard
          title="Home Appliance"
          img={clothe}
          background="#F4DBA4"
        />
        <CategoryCard title="Home Appliance" img={cat2} background="#F4DBA4" />
        <CategoryCard
          title="Home Appliance"
          img={laptop}
          background="#0034FF"
        />
        <CategoryCard title="Home Appliance" img={sale} background="#F4DBA4" />
        <CategoryCard
          title="Home Appliance"
          img={clothe}
          background="#FF6262"
        />
        <CategoryCard title="Home Appliance" img={pic} background="#F4DBA4" />
        <CategoryCard
          title="Home Appliance"
          img={clothe}
          background="#F4DBA4"
        />
        <CategoryCard title="Home Appliance" img={cat2} background="#F4DBA4" />
        <CategoryCard
          title="Home Appliance"
          img={laptop}
          background="#0034FF"
        />
        <CategoryCard title="Home Appliance" img={sale} background="#F4DBA4" />
        <CategoryCard
          title="Home Appliance"
          img={clothe}
          background="#FF6262"
        />
        <CategoryCard title="Home Appliance" img={pic} background="#F4DBA4" />
      </Row>
    </Container>
  );
};

export default CategoryContainer;
