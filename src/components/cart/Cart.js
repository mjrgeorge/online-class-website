import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce((sum, course)=>sum + course.price, 0);
    return (
        <div className="shadow rounded-lg mb-5 p-2 bg-info">
            <h1 className = 'text-warning'><u>Summary</u></h1>
            <h3>Purchase Course : {cart.length}</h3>
            <h2 className = 'text-danger'>Total Amount : $ {totalPrice}</h2>
        </div>
    );
};

export default Cart;