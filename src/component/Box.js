import React from 'react';




const Box = (props) => {
	const resultClassName = () => {
		if (props.result) {
			switch (props.result) {
				case 'win':
					return 'border-win';
				case 'lose':
					return 'border-lose';
				case 'tie':
					return 'border-tie';
				default:
					return '';
			}
		}
		return ''; // 결과가 없을 때는 테두리 클래스를 적용하지 않습니다.
	};
	return (
		<div className={`box ${resultClassName()}`}>
			<h1>{props.title}</h1>
			<img
				className="item-img"
				src={props.item && props.item.img}
				alt="가위바위보"
			></img>
			<h2>{props.result}</h2>
		</div>
	);
};

export default Box;
