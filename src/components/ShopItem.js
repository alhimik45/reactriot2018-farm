import React, { Component } from 'react';
import "./ShopItem.css"
import { Col, Row } from "react-bootstrap";
import ReactModal from "react-modal";

var DataShopItem = {
  Cats: [
    {
      CatName: "1",
      Items: [
        {
          Name: "1.1",
          Cost: 9.99,
          img: "",
          callBack: function () {

          }

        }
      ]
    },
    {
      CatName: "2",
      Items: [
        {
          Name: "2.2",
          Cost: 9.99,
          img: "",
          callBack: function () {

          }

        }
      ]
    },
  ]
}

class ShopItem extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showModal: false,
      itemList: DataShopItem,
      showItems: DataShopItem,
      currentCat: 0
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  render () {
    const CatList = this.state.showItems.Cats.map((cat) =>
      <li className="Shop">
        <button>
          {cat.CatName}
        </button>
        ;
      </li>
    );

    return <div>
      <button onClick={this.handleOpenModal}>Open Shop</button>
      <ReactModal
        isOpen={this.state.showModal}
        contentLabel="onRequestClose Example"
        onRequestClose={this.handleCloseModal}
      >
        <div>
          <Row>
            <Col md={4}>
              Shop
            </Col>
            <Col md={4}>

            </Col>
            <Col md={4}>

            </Col>
            <ul className="Shop">
              {CatList}
            </ul>

          </Row>
        </div>
      </ReactModal>
    </div>;
  }
}

export default ShopItem;