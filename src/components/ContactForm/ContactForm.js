import React from "react";

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      phone: "",
      message: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const address = target.address;
    const phone = target.phone;
    const message = target.message;

    this.setState({
      name: name,
      address: address,
      phone: phone,
      message: message
    });
  }

  handleSubmit(event) {
    alert(
      "your name: " +
        this.state.name +
        "  your address: " +
        this.state.address +
        "  your comment: " +
        this.state.message
    );

    event.preventDefault();
  }

  render() {
    return (
      <div className="row">
        <form className="col s12" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="input-field col s6">
              <input
                id="icon_prefix"
                type="text"
                className="validate"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
              <label for="icon_prefix">First Name</label>
            </div>

            <div className="input-field col s6">
              <input
                id="icon_telephone"
                type="text"
                className="validate"
                name="phone"
                value={this.state.phone}
                onChange={this.handleChange}
              />
              <label for="icon_telephone">Phone Number</label>
            </div>
            <div className="input-field col s6">
              <input
                id="icon_address"
                type="text"
                className="validate"
                name="address"
                value={this.state.address}
                onChange={this.handleChange}
              />
              <label for="icon_address">Address</label>
            </div>

            <div className="input-field col s12">
              <textarea
                id="textarea1"
                className="materialize-textarea"
                name="message"
                value={this.state.message}
                onChange={this.handleChange}
              />
              <label for="textarea1">Message</label>
            </div>
            <div className="input-field col s12">
              <input type="submit" value="Submit" />
            </div>
          </div>
        </form>
      </div>

      // <form onSubmit={this.handleSubmit}>
      //   <label>
      //     Name:
      //     <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
      //   </label>
      //   <label>
      //     Address:
      //     <input type="text" name="address" value={this.state.address} onChange={this.handleChange} />
      //   </label>
      //   <input type="submit" value="Submit" />
      // </form>
    );
  }
}

export default NameForm;
