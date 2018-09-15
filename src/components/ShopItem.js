import React, {Component} from 'react';
import "./ShopItem.css"
import {Col, Row} from "react-bootstrap";
import ReactModal from "react-modal";
import Item from "./Item"


class ShopItem extends Component {

    constructor(props) {
        super(props);
        let DataShopItem =


            {
            Items: [
                {
                    Name: "1.1",
                    Cost: 9.99,
                    img: "",
                    callBack: function () {
                        alert("srafs");
                    }

                },
                {
                    Name: "2.2",
                    Cost: 9.99,
                    img: "",
                    callBack: function () {

                    }

                },
                {
                    Name: "2.2",
                    Cost: 9.99,
                    img: "",
                    callBack: function () {

                    }

                },
                {
                    Name: "1.1",
                    Cost: 9.99,
                    img: "",
                    callBack: function () {

                    }

                },
                {
                    Name: "2.2",
                    Cost: 9.99,
                    img: "",
                    callBack: function () {

                    }

                },
                {
                    Name: "2.2",
                    Cost: 9.99,
                    img: "",
                    callBack: function () {

                    }

                },
                {
                    Name: "1.1",
                    Cost: 9.99,
                    img: "",
                    callBack: function () {

                    }

                },
                {
                    Name: "2.2",
                    Cost: 9.99,
                    img: "",
                    callBack: function () {

                    }

                },
                {
                    Name: "2.2",
                    Cost: 9.99,
                    img: "",
                    callBack: function () {

                    }

                }
            ]
        };
        this.state = {
            showModal: false,
            itemList: DataShopItem
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal() {
        this.setState({showModal: true});
    }

    handleCloseModal() {
        this.setState({showModal: false});
    }


    render() {
        const actucalItemList = this.state.itemList.Items.map((item) =>
            <Col md={4}>
                <Item
                    name={item.Name}
                    cost={item.Cost}
                    img={item.img}
                    callBack={item.callBack}
                />
            </Col>
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
                        <Col md={12}>
                            <h3>List:</h3>
                        </Col>
                        {actucalItemList}
                    </Row>
                </div>
            </ReactModal>
        </div>;
    }
}

export default ShopItem;