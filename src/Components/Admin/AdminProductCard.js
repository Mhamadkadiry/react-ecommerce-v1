import React, { useState } from "react";
import { Col, Card, Row, Button, Badge, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import defaultImage from "../../Assets/defaultImage.jpeg";
import GenerateStarsHook from "../../Hooks/GenerateStarsHook";
import { deleteProduct } from "../../redux/actions/productAction";
import { useDispatch } from "react-redux";
const AdminProductCard = ({ item }) => {
  const [imageSrc, setImageSrc] = useState(item.imageCover);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [showComponent, setShowComponent] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleDelete = async () => {
    // await dispatch(deleteProduct(item._id));
    handleClose();
    setShowComponent(false);
  };
  const handleImageError = () => {
    setImageSrc(defaultImage);
  };
  const stars = GenerateStarsHook(item.ratingsAverage);
  return (
    showComponent && (
      <Col className="mt-3" xs="12" sm="6" md="4" lg="4">
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              <div className="font">Delete Product</div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="font">
              Are you sure do you want to delete this product?
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button className="font" variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button onClick={handleDelete} className="font" variant="danger">
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
        <Row className="d-flex justify-content-center  mt-2">
          <Col className=" d-flex justify-content-between pb-1">
            <button
              onClick={handleShow}
              class="d-inline btn btn-danger btn-sm rounded-1"
              type="button"
              data-toggle="tooltip"
              data-placement="top"
              title="Delete"
            >
              <i class="fa fa-trash me-1"></i>Delete
            </button>
            <Link style={{ textDecoration: "none" }} to={`/admin/editproduct/`}>
              <button
                class="d-inline btn btn-success btn-sm rounded-1"
                type="button"
                data-toggle="tooltip"
                data-placement="top"
                title="Edit"
              >
                <i class="fa fa-edit me-1"></i>Edit
              </button>
            </Link>
          </Col>
        </Row>
        <Card
          border="light"
          style={{ boxShadow: "0 2px 2px 0 rgba(151,151,151,0.5)" }}
        >
          <Link to={`/products/${item._id}`}>
            <Card.Img
              onError={handleImageError}
              height="200px"
              width="100%"
              src={imageSrc}
              alt="product-image"
            />
          </Link>
          <Card.Footer
            style={{ cursor: "default", minHeight: "230px" }}
            border="light"
            className="border-top border-light p-4"
          >
            <a href="#" style={{ textDecoration: "none" }} className="h5">
              {item.title}
            </a>
            <h6 className="font-weight-light text-gray mt-2">
              {item.description.slice(0, 75)}...
            </h6>
            <div className="d-flex align-items-center justify-content-between mt-3">
              <div className="d-flex">
                {item.ratingsAverage ? (
                  stars
                ) : (
                  <>
                    <i className="star fa-regular fa-star text-warning"></i>
                    <i className="star fa-regular fa-star text-warning"></i>
                    <i className="star fa-regular fa-star text-warning"></i>
                    <i className="star fa-regular fa-star text-warning"></i>
                    <i className="star fa-regular fa-star text-warning"></i>
                  </>
                )}
                <Badge pill variant="warning" className="ml-2 bg-warning">
                  {item.ratingsAverage ?? 0}
                </Badge>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center mt-3">
              <div>
                <span className="h5 mb-0 text-muted">
                  <del>EUR {item.price}</del>
                </span>
              </div>
              <div>
                <span className="h5 mb-0 text-gray">
                  EUR {item.priceAfterDiscount}
                </span>
              </div>
            </div>
          </Card.Footer>
        </Card>
      </Col>
    )
  );
};

export default AdminProductCard;
