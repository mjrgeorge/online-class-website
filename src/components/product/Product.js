import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {key, course, instructor, price, img} = props.course;
    const handleAddCourse = props.handleAddCourse;
    return (
        <div className="shadow rounded-lg mb-5 p-2 bg-info">
            <div className="row">
                <div className="col-md-3">
                    <span className="btn btn-dark m-1">{key}</span>
                    <img src={img} alt="" className="w-100 pr-2"/>
                </div>
                <div className="col-md-8">
                    <h3>{course} </h3>
                    <h5>with <b>{instructor}</b></h5>
                    <h2>Price : $ {price} </h2>
                    <button onClick={() => handleAddCourse(props.course)} className="btn btn-warning mb-2"><FontAwesomeIcon icon={faCartPlus} /> Enroll Now </button>
                </div>
            </div>
        </div>
    );
};

export default Product;