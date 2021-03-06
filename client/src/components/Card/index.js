import React, { Component } from "react";
import "../Card/style.css";

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            carts: [],
        }

        this.loadToCart = this.loadToCart.bind(this)
    }

    loadToCart(items) {
        alert("Your item has been added to the cart.");
        delete items._id;
        this.props.addToCart(items);
        console.log(items);
    }

    render() {
        return (
            <React.Fragment>
                {this.props.items.map(result => (
                    <React.Fragment key={result._id}>
                        <div className="card-deck" id="cardItem">
                            <div className="card border-success">
                                <div className="card-body text-black">
                                    <h5 className="card-title"><strong>{result.itemName}</strong></h5>
                                    <hr />
                                    <p className="card-text"><strong>Amount of Item: {result.amountItem}</strong></p>
                                    <p className="card-text"><strong>Date of Expiration: {result.expiration}</strong></p>
                                    <p className="card-text"><strong>Note: {result.note}</strong></p>
                                    <p className="card-text"><strong>Must Take By: {result.takeBy}</strong></p>
                                    <p className="card-text"><strong>Contact: {result.contact}</strong></p>

                                    {this.props.hasCartButton === "yes" ? <button type="button" onClick={() => this.loadToCart(result)} className="cartbtn btn btn-outline-secondary btn-sm" id={result._id}>Add to Cart</button> : <p></p>}
                                    {this.props.hasDeleteButton === "yes" ? <button type="button" className="deletebtn btn btn-outline-secondary btn-sm" id={result._id}>Delete</button> : <p></p>}
                                    {this.props.hasContactButton === "yes" ? <button type="button" className="contactbtn btn btn-outline-secondary btn-sm" id={result._id}>Contact</button> : <p></p>}

                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                ))}
            </React.Fragment>
        )
    }
}

export default Card;












