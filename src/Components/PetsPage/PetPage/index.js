import React from 'react';
import style from './pet-page.module.css';
import petsStore from './../../../data/pets'
import { Link } from "react-router-dom";

const PetPage = ({ match }) => {

    const pet = petsStore.find(x => x.id === match.params.id);
    const {image, name, age, breed, color, gender, description} = pet
    return (
        <div className={style["pet-page"]}>
            <Link to="/pets">
                <button className={style["page-return"]}>Return</button>
            </Link>
            <h2 className={style["page-title"]}>All about {name}</h2>
            <div className={style["pet-content"]}>
                <img className={style["pet-image"]} src={image} alt={name}/>
                <div className={style["pet-params"]}>
                    <p><b>Age</b>: {age}</p>
                    <p><b>Gender</b>: {gender}</p>
                    <p><b>Color</b>: {color}</p>
                    <p><b>Breed</b>: {breed}</p>
                </div>
                <p className={style["pet-description"]}>{description}</p>
            </div>
        </div>
    )
};
export default PetPage