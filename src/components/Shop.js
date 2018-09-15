import React from 'react';
import "./Shop.css"
import { Col, Row } from "react-bootstrap";
import ShopItem from "./ShopItem"

const Shop = props =>
  <div>
    <Row>
      <Col md={4}>
      </Col>
      <Col md={4}>
        <h3 className="text-center">
          Shop
        </h3>
      </Col>
      <Col md={4}>
      </Col>
    </Row>
    <Row>
      {props.items.map((item) =>
        <Col key={item.name}
             md={4}>
          <ShopItem
            onClick={e => props.buy({
              ...item,
              mouseX: e.pageX,
              mouseY: e.pageY
            })}
            name={item.name}
            cost={item.cost}
            img={item.img}
            type={item.type}
            variant={item.variant}
          />
        </Col>
      )}
    </Row>
  </div>

export default Shop;