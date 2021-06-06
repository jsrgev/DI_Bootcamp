import React from 'react'

class ErrorBoundary extends React.Component {
	constructor(){
		super();
		this.state = {
			hasError: 'false'
		}
	}
	componentDidCatch = () => {
		this.setState({hasError:true})
	}
	render(){
		return(
			<>
			{(this.state.hasError === true) ? <div>Sorry, something's wrong</div> : this.props.children}
			</>
		)
	}
}


export default ErrorBoundary