import { useState } from 'react';
import './App.css';
import Box from './component/Box';

// 1. 박스 2개(타이틀, 사진, 결과)
// 2. 가위 바위 보 버튼이 있다
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
// 4. 컴퓨터는 랜덤하게 아이템 선택이 된다
// 5. 3,4의 결과를 가지고 누가 이겼는지 승패를 따진다
// 6. 승패의 결과에 따라 테두리 색이 바뀐다.(이기면 초록, 지면 빨강, 비기면 검은색)

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

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");

	const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice)
    setResult(judgement(choice[userChoice], computerChoice));
  };

  const judgement = (user, computer) => {
		/* 게임 로직
        user == computer >> tie 
        user == rock, computer == scissor user 승
        user == rock, computer == paper user 짐
        user == scissor, computer == paper user 승
        user == scissor, computer == rock user 짐
        user == paper, computer == rock user 승
        user == paper, computer == scissor user 짐
        */
    
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

  } // if끝

  
  const randomChoice = () => {
    let itemArray = Object.keys(choice); // 객체에 키값만 뽑아서 array로 만들어주는 함수
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem]
    return choice[final];
  }



	return (
		<div>
			<div className="main">
				<Box title="you" item={userSelect} result={result}></Box>
				{/* <Box title="computer" item={computerSelect} result={result}></Box> */}
				<Box
					title="Computer"
					item={computerSelect}
					result={result === 'win' ? 'lose' : result === 'lose' ? 'win' : 'tie'}
				></Box>
			</div>
			<div className="main">
				<button onClick={() => play('scissor')}>가위</button>
				<button onClick={() => play('rock')}>바위</button>
				<button onClick={() => play('paper')}>보</button>
			</div>
		</div>
	);
}

export default App;
