import React from "react";
import "./contact.css";

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      phone: "",
      email: "",
      message: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const fullname = target.fullname;
    const email = target.email;
    const phone = target.phone;
    const message = target.message;

    this.setState({
      fullname: fullname,
      email: email,
      phone: phone,
      message: message
    });
  }

  handleSubmit(event) {
    
    console.log(event);
    alert(
      "your name: " +
        this.state.fullname +
        "  your email: " +
        this.state.email +
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
                name="fullname"
                value={this.state.fullname}
                onChange={this.handleChange}
              />
              <label htmlFor="icon_prefix">Full Name</label>
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
              <label htmlFor="icon_telephone">Phone Number</label>
            </div>
            <div className="input-field col s6">
              <input
                id="icon_email"
                type="email"
                className="validate"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
              <label htmlFor="icon_email">Email</label>
              <span
                className="helper-text"
                data-error="wrong"
                data-success="right"
              />
            </div>

            <div className="input-field col s12">
              <textarea
                id="textarea1"
                className="materialize-textarea"
                name="message"
                value={this.state.message}
                onChange={this.handleChange}
              />
              <label htmlFor="textarea1">Message</label>
            </div>
            <div className="input-field col s12">
              <input
                type="submit"
                value="Submit"
                className=" btn btn-red-color"
              />
              
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
