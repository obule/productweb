import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBCardFooter,
} from 'mdbreact';
import moment from 'moment';
import { base } from '../../config/api';
import { getProduct } from '../../store/actions/productAction';

class ListProducts extends Component {
  state = {
    loading: true,
    data: [],
  };
  componentWillMount = () => {
    this.props.products();
    this.setState({ loading: false, data: this.props.allProduct });
  };
  render() {
    const { allProduct } = this.props;

    return (
      <MDBRow style={{ marginTop: 50, marginLeft: 10 }}>
        {this.state.loading ? (
          <div
            className="spinner-border text-primary text-center"
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          allProduct &&
          allProduct.map(value => {
            return (
              <MDBCol
                key={value._id}
                md="4"
                className="mb-4"
                style={{ maxWidth: '22rem' }}
              >
                <MDBCard className="shadow-box-example hoverable">
                  <MDBCardImage
                    top
                    style={{ width: '250px', height: '250px' }}
                    src={
                      value.imageName
                        ? `${base}${value.imageName}`
                        : 'https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2821%29.jpg'
                    }
                    overlay="white-slight"
                    hover
                    waves
                    alt="MDBCard image cap"
                  />
                  <MDBCardBody className="elegant-color white-text rounded-bottom">
                    <a
                      href="#!"
                      className="activator waves-effect waves-light mr-4"
                    >
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                      <MDBIcon far icon="star" />
                    </a>
                    <MDBCardTitle>{value.name}</MDBCardTitle>
                    <hr className="hr-light" />
                    <MDBCardText className="white-text">
                      {value.description}
                    </MDBCardText>
                    <a
                      href="#!"
                      className="black-text d-flex justify-content-end"
                    >
                      <h5 className="white-text">
                        Read more
                        <MDBIcon icon="angle-double-right" />
                      </h5>
                    </a>
                    <MDBCardFooter className="px-1">
                      <span className="float-left font-weight-bold">
                        <strong>${value.price}</strong>
                      </span>
                      <span className="float-right">
                        <strong>
                          {value.color}
                          {/* { value.createdAt && moment(value.createdAt.toDate()).fromNow()} */}
                        </strong>
                      </span>
                    </MDBCardFooter>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            );
          })
        )}
      </MDBRow>
    );
  }
}

const mapStateToProps = state => {
  return {
    productError: state.product.productError,
    singleProduct: state.product.singleProduct,
    allProduct: state.product.allProduct,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    products: () => dispatch(getProduct()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListProducts);
