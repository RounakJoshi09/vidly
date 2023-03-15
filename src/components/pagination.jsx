import React, { Component } from "react";
class PaginationBar extends Component {
  state = {};
  render() {
    return (
      <nav aria-label="...">
        <ul class="pagination">
          {/* <li class="page-item disabled">
            <a class="page-link" href="#" tabindex="-1">
              Previous
            </a>
          </li> */}
          <li className={this.getClass(1)}>
            <a
              className="page-link"
              href="#"
              onClick={() => this.props.changePage(1)}
            >
              1
            </a>
          </li>
          <li className={this.getClass(2)}>
            <a
              className="page-link"
              href="#"
              onClick={() => this.props.changePage(2)}
            >
              2 <span class="sr-only">(current)</span>
            </a>
          </li>
          <li className={this.getClass(3)}>
            <a
              className="page-link"
              href="#"
              onClick={() => this.props.changePage(3)}
            >
              3
            </a>
          </li>
          {/* <li class="page-item">
            <a class="page-link" href="#">
              Next
            </a>
          </li> */}
        </ul>
      </nav>
    );
  }

  getClass(index) {
    if (index === this.props.page) {
      return "page-item active";
    } else {
      return "page-item";
    }
  }
}

export default PaginationBar;
