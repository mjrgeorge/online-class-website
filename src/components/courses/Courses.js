import React from 'react';
import Product from '../product/Product';
import fakeData from '../../fakeData';
import { useState } from 'react';
import Cart from '../cart/Cart';

const Courses = () => {
    const [courses, setCourses] = useState(fakeData);
    const [cart, setCart] = useState([]);
    const handleAddCourse = (course) => {
        const newCart = [...cart, course];
        setCart(newCart);
    }
    return (
        <div className="row">
            <div className="col-md-8 m-5">
                {
                    courses.map(course =><Product handleAddCourse = {handleAddCourse} course = {course} key = {course.key}></Product>)
                }
            </div>
            <div className="col-md-3 mt-5">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Courses;