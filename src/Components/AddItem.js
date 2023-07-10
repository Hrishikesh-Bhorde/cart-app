import React from "react";

class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productname: "",
      productprice: 0,
    };
  }
  state = {};
  render() {
    return (
      <div>
        <h4>Add Item</h4>
        <form
          className="row mb-5"
          onSubmit={(e) => {
            e.preventDefault();
            this.props.addItem(this.state.productname, this.state.productprice);
          }}
        >
          <div className="mb-3 col-4">
            <label htmlFor="inputName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="inputName"
              name="productname"
              aria-describedby="emailHelp"
              onChange={(e) => {
                this.setState({ productname: e.currentTarget.value });
              }}
              value={this.state.productname}
            />
          </div>
          <div className="mb-3 col-4">
            <label htmlFor="inputPrice" className="form-label">
              Price
            </label>
            <input
              name="productprice"
              type="number"
              className="form-control"
              id="inputPrice"
              onChange={(e) => {
                this.setState({ productprice: Number(e.currentTarget.value) });
              }}
              value={this.state.productprice}
            />
          </div>
          <button type="submit" className="btn btn-primary col-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-plus-square-fill"
              viewBox="0 0 16 16"
            >
              <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z" />
            </svg>
            &nbsp;Add
          </button>
        </form>
      </div>
    );
  }
}

export default AddItem;
