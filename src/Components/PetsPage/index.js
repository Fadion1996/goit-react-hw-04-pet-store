import React from 'react';
import './pets-page.css';

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
                            <li className="pet-container" key={id}>
                                <img src={image} alt={name}/>
                                <p>{name}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default PetsPage