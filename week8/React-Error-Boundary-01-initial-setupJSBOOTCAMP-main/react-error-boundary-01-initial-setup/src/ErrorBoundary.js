import React from 'react'

class ErrorBoundary extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			hasError: false,
			err: "",
			errInfo: ""
		}
	}
	static getDerivedStateFromError = () => {
		return {hasError:true};
	}
	componentDidCatch = (err,errInfo) => {
		this.setState({
			err: err,
			errInfo: errInfo
		})
		console.log(err);
		console.log(errInfo);
	}
	render() {
		console.log("here↓");
		console.log(this.state);
		if (this.state.hasError) {
			return(
				<>
			<div className="card my-5">
				<p>An error has occurred in this component.</p>
			<details>{this.state.err.message}</details>
			</div>
			
			</>
			)
		}
		return this.props.children;
	}
}


export default ErrorBoundary