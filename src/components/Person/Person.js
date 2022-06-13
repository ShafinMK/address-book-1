import React from 'react';
import { Link } from 'react-router-dom';

const Person = (props) => {
    const { name, id, email } = props.people;
    const url = `/details/${id}`;
    return (
        <div>
            <h4></h4>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Name: {name}</h5>
                    <p className="card-text">{email}</p>
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                    <Link to= {url}>
                        <button className="btn btn-primary">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Person;