import React from 'react';
import { withRouter } from 'react-router-dom';

import styles from './pets-page.module.css';
import petsStore from './../../data/pets.json'


const PetsPage = withRouter(({history}) => {

    const linkTo = (id) => history.push(`/pets/${id}`);

    return (
        <div className={styles["pets-page"]}>
            <h2 className={styles["page-title"]}>Available pets</h2>
            <ul className={styles["pet-list"]}>
                {
                    petsStore.map((pet) => {
                        const {id, image, name} = pet;
                        return(
                            <li onClick={() => linkTo(id)} key={id} className={styles["pet-container"]}>
                                <img className={styles["pet-image"]} src={image} alt={name}/>
                                <p className={styles["pet-name"]}>{name}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
});
export default PetsPage