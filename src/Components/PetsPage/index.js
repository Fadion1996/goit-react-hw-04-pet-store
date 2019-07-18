import React from 'react';
import './pets-page.css';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

import petsStore from './../../data/pets.json'

const PetsPage = () => {

    return (
        <div className="pets-page">
            <h2 className="page-title">Available pets</h2>
            <ul className="pet-list">
                {
                    petsStore.map((pet) => {
                        const {id, image, name} = pet;
                        return(
                            <Link to={'/pets/:' + id} key={id}>
                                <li className="pet-container">
                                    <img src={image} alt={name}/>
                                    <p>{name}</p>
                                </li>
                            </Link>
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default PetsPage