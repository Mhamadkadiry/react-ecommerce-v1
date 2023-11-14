import React from "react";
import { Container } from "react-bootstrap";
import ChoosePaymentMethod from "../../Components/Checkout/ChoosePaymentMethod";

const PaymentMethodPage = () => {
  return (
    <Container style={{ minHeight: "670px" }}>
      <ChoosePaymentMethod />
    </Container>
  );
};

export default PaymentMethodPage;
