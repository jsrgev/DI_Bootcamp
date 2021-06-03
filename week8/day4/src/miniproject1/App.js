import React from 'react'
import quotes from './QuotesDatabase'
import './quotes.css';

class App1 extends React.Component {
	constructor(){
		super();
		this.state = {
			currentQuote: 0,
			currentColor: ""
		}
	}
	componentDidMount = () => {
		this.getRandom();
	}
	getRandom = () => {
		let num = Math.floor(Math.random() * quotes.length);
		let range = "0123456789abcdef";
		let color = "#";
		for (let i = 0; i<6; i++) {
			let char = Math.floor(Math.random() * range.length);
			color += range[char];
		}
		this.setState({currentQuote:num,currentColor:color})
	}
	render(){
		let num = this.state.currentQuote;
		let body = document.querySelector("body");
		body.style.background = this.state.currentColor;
		body.style.color = this.state.currentColor;
		return(
			<div className="quotecard">
				<div className="quote">{quotes[num].quote}</div>
				<div className="author">— {quotes[num].author}</div>
				<button onClick={this.getRandom} style={{background: `${this.state.currentColor}`}}>New Quote</button>
				</div>
		)
	}
}

export default App1