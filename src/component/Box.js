import React from 'react';

const Box = (props) => {
	console.log('props', props);
	return (
		<div className={`box ${props.result}`}>
			<h1>{props.title}</h1>
			<img
				className="item-img"
				src={props.item && props.item.img}
				alt={props.item ? props.item.name : 'result'}
			></img>
			<h2>{props.result.charAt(0).toUpperCase() + props.result.slice(1)}</h2>
		</div>
	);
};



export default Box;
