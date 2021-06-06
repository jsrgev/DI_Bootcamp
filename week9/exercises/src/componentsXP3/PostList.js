import React from 'react'

class PostList extends React.Component {
	constructor(){
		super();
		this.state = {
			posts: [],
			errorMsg: ''
		}
	}
	componentDidMount = async () => {
		let res = await fetch('https://jsonplaceholder.typicode.com/posts');
		let data = await res.json();
		this.setState({posts: data})
	}
	render(){
		let posts = this.state.posts;
		return(
			<>
				{
					(this.state.posts !== "") &&
					<>
					<h1>List of Posts:</h1>
					{
					posts.map((a,i)=>{
						let {title,body,id} = a;
						return (
							<div key={i}>
								<p><strong>ID:</strong> {id}</p>
								<p><strong>Title:</strong> {title}</p>
								<p><strong>Body:</strong> {body}</p>
							<p>{body}</p></div>
							)
						// return <div key={i}><h3>{title}</h3><p>{body}</p></div>
					})
				}
					</>
				}
			</>
		)
	}
}


export default PostList