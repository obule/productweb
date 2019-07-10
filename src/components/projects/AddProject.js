import React from 'react';
import { connect } from 'react-redux';
import { MDBRow, MDBCol, MDBBtn, MDBContainer, MDBAlert } from 'mdbreact';
import { addProduct } from '../../store/actions/productAction';

class FormsPage extends React.Component {
  state = {
    name: '',
    description: '',
    price: '',
    category: '',
    color: '',
    selectedFile: null,
    loading: false,
    disabled: false,
  };

  submitHandler = async event => {
    event.preventDefault();
    event.target.className += ' was-validated';
    const image = new FormData();
    image.append('file', this.state.selectedFile);
    const validationArray = [];
    for (const key in this.state) {
      if (this.state[key] === null || this.state[key] === '') {
        validationArray.push(-1);
      } else {
        validationArray.push(1);
      }
    }
    const isFormValid = validationArray.every(value => {
      return value === 1;
    });
    if (isFormValid) {
      this.setState({ loading: true, disabled: true });
      await this.props.createProduct(this.state, image);
      //this.props.history.push('/preview');
    }
    return false;
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  HandleFile = event => {
    this.setState({
      selectedFile: event.target.files[0],
    });
  };

  render() {
    const { productError, singleProduct } = this.props;
    console.log(singleProduct);

    return (
      <div className="d-flex justify-content-center mt-4">
        <form
          className="needs-validation"
          onSubmit={this.submitHandler}
          noValidate
        >
          {productError ? (
            <MDBContainer>
              <MDBAlert color="danger" dismiss>
                <strong>Problem sending details....try again</strong>
              </MDBAlert>
            </MDBContainer>
          ) : (
            ''
          )}
          <MDBRow>
            <MDBCol md="4" cla className="mb-3">
              <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                Product Name
              </label>
              <input
                value={this.state.name}
                name="name"
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterNameEx"
                className="form-control"
                placeholder="First name"
                required
              />
              <div className="valid-feedback">Looks good!</div>
              <div className="invalid-feedback">
                Please provide a product name
              </div>
            </MDBCol>
            <MDBCol md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterEmailEx2"
                className="grey-text"
              >
                Product Description
              </label>
              <input
                value={this.state.description}
                name="description"
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterEmailEx2"
                className="form-control"
                placeholder="Last name"
                required
              />
              <div className="valid-feedback">Looks good!</div>
              <div className="invalid-feedback">
                Please provide a product description.
              </div>
            </MDBCol>
            <MDBCol md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterConfirmEx3"
                className="grey-text"
              >
                Price
              </label>
              <input
                value={this.state.price}
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterConfirmEx3"
                className="form-control"
                name="price"
                placeholder="Enter Price"
                required
              />
              <div className="valid-feedback">Looks good!</div>
              <div className="invalid-feedback">Please provide price.</div>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterPasswordEx4"
                className="grey-text"
              >
                Category
              </label>
              <input
                value={this.state.category}
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterPasswordEx4"
                className="form-control"
                name="category"
                placeholder="Category"
                required
              />
              <div className="invalid-feedback">
                Please provide a valid category.
              </div>
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
            <MDBCol md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterPasswordEx4"
                className="grey-text"
              >
                Color
              </label>
              <input
                value={this.state.color}
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterPasswordEx4"
                className="form-control"
                name="color"
                placeholder="Color"
                required
              />
              <div className="invalid-feedback">
                Please provide a valid color.
              </div>
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
            <MDBCol md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterPasswordEx4"
                className="grey-text"
              >
                Image
              </label>
              <div className="custom-file">
                <input
                  type="file"
                  accept="image/x-png,image/gif,image/jpeg"
                  className="custom-file-input"
                  id="validatedCustomFile"
                  required
                  onChange={this.HandleFile}
                />
                <label
                  className="custom-file-label"
                  htmlFor="validatedCustomFile"
                >
                  Choose file...
                </label>
                <div className="invalid-feedback">select a file</div>
                <div className="valid-feedback">Looks good!</div>
              </div>
            </MDBCol>
          </MDBRow>

          <MDBBtn color="default" disabled={this.state.disabled} type="submit">
            Add Product
            {this.state.loading ? (
              <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            ) : (
              ''
            )}
          </MDBBtn>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  productError: state.product.productError,
  singleProduct: state.product.singleProduct,
  allProduct: state.product.allProduct,
});

const mapDispatchToProps = dispatch => {
  return {
    createProduct: (product, image) => dispatch(addProduct(product, image)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FormsPage);
