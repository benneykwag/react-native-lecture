//src/day1/Code02_State.js
import React from 'react'
class MyComponent extends React.Component {
	// state = {
	// 	year : 2016,
	// 	name : 'Naver',
	// 	colors: ['blue']
    // }
    constructor () {
		super()
		this.state = {
			year : 2016,
			name : 'Naver',
			colors: ['blue']
		}
	}

	render(){
		return (
			<div>
				<h1>My name is : {this.state.name}</h1>
				<h1>The Year is : {this.state.year}</h1>
				<h1>My Color is : {this.state.colors[0]}</h1>
			</div>
		)
	}
}
export default MyComponent