import React, { Component } from "react";
class Like extends Component {
  render() {
    let className = "fa fa-heart";
    if (!this.props.isLiked) {
      className += "-o";
    }
    return (
      <i
        className={className}
        aria-hidden="true"
        onClick={this.props.onClick}
      ></i>
    );
  }
}

export default Like;
