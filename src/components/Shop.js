import React from 'react';
import "./Shop.css"
import { Col, Row } from "react-bootstrap";
import ShopItem from "./ShopItem"
import dollar from '../img/dollar.svg'

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
        {
          const active = item && props.currentItemToBuy && props.currentItemToBuy.type === item.type && props.currentItemToBuy.variant === item.variant
          return <Col key={item.name}
                      md={4}>
            <ShopItem
              onClick={e => active ? props.undoSelect() : props.buy({
                ...item,
                mouseX: e.pageX,
                mouseY: e.pageY
              })}
              needShadow={active}
              name={item.name}
              cost={`$${item.cost}`}
              img={item.img}
              type={item.type}
              variant={item.variant}
              overlay={item.overlay}
            />
          </Col>
        }
      )}
      <Col key="sell"
           md={4}>
        <ShopItem
          sellActive={props.sellActive}
          onClick={props.toggleSell}
          name="Sell item"
          cost="&nbsp;"
          img={dollar}
        />
      </Col>
    </Row>
  </div>

export default Shop;