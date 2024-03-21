import React, { Component } from 'react';
import '../App.css';
import Box from './Box';

const choice = {
	rock: {
		name: 'Rock',
		img: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FpSJwo%2FbtqXJV1lACE%2Fnx5XrxkCLWXh9UsnoS8vbK%2Fimg.png',
	},
	scissor: {
		name: 'Scissor',
		img: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FHfURw%2FbtqXKvOTNWK%2FgWTwPXEg9QzSV0ilOuwuak%2Fimg.png',
	},
	paper: {
		name: 'Paper',
		img: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbmjB2s%2FbtqXHhp6kpG%2FTH14W4U612SxKo9uuR2sB0%2Fimg.png',
	},
};

class BoxClass extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userSelect: choice.paper,
			computerSelect: choice.paper,
			result: '',
		};
	}

	randomChoice = () => {
		const itemArray = Object.keys(choice);
		const randomItem = Math.floor(Math.random() * itemArray.length);
		return choice[itemArray[randomItem]];
	};

	judgement = (user, computer) => {
		if (user.name === computer.name) return 'tie';
		if (
			(user.name === 'Rock' && computer.name === 'Scissor') ||
			(user.name === 'Scissor' && computer.name === 'Paper') ||
			(user.name === 'Paper' && computer.name === 'Rock')
		) {
			return 'win';
		} else {
			return 'lose';
		}
	};

	play = (userChoice) => {
		const userSelect = choice[userChoice];
		const computerSelect = this.randomChoice();
		const result = this.judgement(userSelect, computerSelect);
		this.setState({ userSelect, computerSelect, result });
	};

	render() {
		const { userSelect, computerSelect, result } = this.state;
		return (
			<div>
				<div className="main">
					<Box title="You" item={userSelect} result={result} />
					<Box
						title="Computer"
						item={computerSelect}
						result={
							result === 'win' ? 'lose' : result === 'lose' ? 'win' : 'tie'
						}
					/>
				</div>
				<div className="main">
					<button onClick={() => this.play('scissor')}>가위</button>
					<button onClick={() => this.play('rock')}>바위</button>
					<button onClick={() => this.play('paper')}>보</button>
				</div>
			</div>
		);
	}
}

export default BoxClass;
