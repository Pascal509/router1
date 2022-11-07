import React, { Component } from "react";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loading: false,
    };
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=10")
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          items: response.results,
          loading: true,
        });
      });
  }

  render() {
    var { items, loading } = this.state;

    if (!loading) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="main">
          {items.map(item => (
            <div>
            <h1>{item.name.first}</h1>
            <img src={item.picture.medium} alt={item.name.first} />
            </div>
          ))}
        </div>
      );
    }
  }
}

export default Users;


