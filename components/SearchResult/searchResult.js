import React from "react"

import styles from './searchResult.module.scss'

export default function searchResult(props){

	var handleClick = function(){
		props.onClick(props.plant);
	}

	return(
		<li className={styles.searchResult} key={props.key}>
			<img src={props.plant.image_url} alt={props.plant.slug} />
			<span>{props.plant.scientific_name}</span>
			<div className={styles.addToCollection} onClick={handleClick}>Ajouter</div>
		</li>
	)

}