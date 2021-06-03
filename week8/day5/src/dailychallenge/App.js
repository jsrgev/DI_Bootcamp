import React from 'react'
import superheroes from './superheroes.json'
import './app.css';

class App1 extends React.Component {
	constructor(){
		super();
		this.state = {
			score:0,
			clickedCards:[],
			array:[],
			topScore: 0
		}
	}
	componentDidMount = () => {
		this.randomSort();
	}
	randomSort = () => {
		let arrayClone = [...superheroes.superheroes];
		// console.log(array);
		let newArray = [];
		for (let i = 0; i < superheroes.superheroes.length; i++) {
			let randomNum = Math.floor(Math.random() * arrayClone.length);
			newArray.push(arrayClone[randomNum]);
			arrayClone.splice(randomNum,1);
		}
		this.setState({array:newArray});
	}
	setScores = (card) => {
		if (this.state.clickedCards.includes(card)) {
			this.setState({score:0,clickedCards:[]});
		}
		if (this.state.score > this.state.topScore) {
			this.setState({topScore:this.state.score});
		}
	}
	handleClick = (e) => {
		this.randomSort();
		this.setState({score:++this.state.score});
		let thisCard = e.target.closest(".card").id;		
		let clickedArray = [...this.state.clickedCards];
		clickedArray.push(thisCard);
		this.setState({clickedCards:clickedArray});
		this.setScores(thisCard);
	}
	render(){
		let data = this.state.array;
		let won = this.state.score===12 ? <div>Congratulations, you got all the cards!</div> : "";
		return(
			<>
			<header>
				<div>
					<h1>Superheroes Memory Game</h1>
					<div>Score: {this.state.score}</div>
					<div>Top Score: {this.state.topScore}</div>
				</div>
				<div>
					<div>Get points by clicking on an image but don't click on any more than once!</div>
					{won}
				</div>
			</header>
			<div className="cards">
				{
					data.map(item => {
						let {id,image,name,occupation} = item;
						return(
							<div className="card" key={id} id={id} onClick={this.handleClick}>{}
								<div className="trim">
									<img src={image} alt="superheroe"/>
								</div>
								<p><span>Name:</span> {name}</p>
								<p><span>Occupation</span>: {occupation}</p>
							</div>
						)
					})
				}
			</div>
			</>
		)
	}
}

export default App1