import React from "react";
import CardList from "../Components/CardList";
import SearchField from '../Components/SearchField';
import './App.css'
import Scroll from '../Components/Scroll';
import Error from './Error';

class App extends React.Component {
    constructor(){
        super()
            this.state = {
                robots: [],
                searchfield: ''
            };
    }

    componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response=> response.json())
  .then(user=> this.setState({robots: user}))
    }

    onSearchChange = (event)=>{
      this.setState({searchfield: event.target.value});
    }

    render(){
        const {robots , searchfield} = this.state
        const filteredRobots = robots.filter(robot=>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
       return ( !robots.length?
             <h1>Loading</h1>:
            
                <div className="tc">
                    <h1 className="f1">Robot Friends</h1>
                    < SearchField searchChange ={this.onSearchChange}/>
                    < Scroll>
                     <Error>
                      < CardList robots ={filteredRobots} />
                     </Error>
                    </Scroll> 
                </div>
        
       )
       
    }
}
   


export default App