import React, { Component } from 'react';
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBCardFooter,
} from 'mdbreact';
import { connect } from 'react-redux';
import { base } from '../../config/api';

class PreviewProduct extends Component {
  render() {
    const { singleProduct } = this.props;

    return (
      <div>
        <MDBCol
          style={{ marginTop: 50 }}
          className="d-flex justify-content-center"
        >
          <MDBCard style={{ width: '33rem' }}>
            <MDBCardImage
              className="img-fluid"
              src={
                singleProduct
                  ? `${base}${singleProduct.imageName}`
                  : 'https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2821%29.jpg'
              }
              waves
            />
            <MDBCardBody>
              <MDBCardTitle>{singleProduct.name}</MDBCardTitle>
              <MDBCardText>{singleProduct.description}</MDBCardText>
              <MDBCardFooter className="px-1">
                <span className="float-left font-weight-bold">
                  <strong>${singleProduct.price}</strong>
                </span>
                <span className="float-right">
                  <strong>
                    {singleProduct.color}
                    {/* { value.createdAt && moment(value.createdAt.toDate()).fromNow()} */}
                  </strong>
                </span>
              </MDBCardFooter>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  productError: state.product.productError,
  singleProduct: state.product.singleProduct,
  allProduct: state.product.allProduct,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PreviewProduct);
