import React, {Component} from 'react';
import {Col, Row} from "react-bootstrap";
import ReactModal from "react-modal";

class Item extends Component {
    render() {
        return <div>
            <div>
                <img src={this.props.img}/>
            </div>
            <div>
                {this.props.name}
            </div>
            <div>
                {this.props.cost}
            </div>

            <button onClick={this.props.callBack}>Buy</button>
        </div>;
    }
}

export default Item;