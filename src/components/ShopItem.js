import React, {Component} from 'react';
import "./ShopItem.css"
import {Col, Row} from "react-bootstrap";
import ReactModal from "react-modal";
import Item from "./Item"


class ShopItem extends Component {

    constructor(props) {
        super(props);

        var data = require('../DataShopItems.js');

        this.state = {
            itemList: data.default.Items
        };

    }


    render() {
        const actucalItemList = this.state.itemList.map((item) =>
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
            <Row>
                <Col md={4}>
                    <h1>
                        Shop
                    </h1>
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
    }
}

export default ShopItem;