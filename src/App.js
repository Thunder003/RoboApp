import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './Searchbox';
import './App.css';
import Scroll from './Scroll';

class App extends Component{
	constructor(){	
		super()
		this.state={
			robots:[],
			searchfield:''
		}
	}	

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response=>{
			return response.json();
		})
		.then(users=>{
			this.setState({robots:users})
		});
	}
	onSearch=(event)=>{
		this.setState({searchfield:event.target.value});
	}

	render(){
		const filterRobot=this.state.robots.filter(robot=>{
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());

		})	
		if(this.state.robots.length===0)
		{
			return <h1 className='tc'>Loading</h1>
		}
		else{
			return(
		<div className='tc'>
		<h1 className='f1'>RoboFriends</h1>
		<SearchBox searchchange={this.onSearch}/>
		<Scroll>
		<CardList robots={filterRobot}/>
		</Scroll>
		</div>
		);	
		}
		
	}	
}

export default App;