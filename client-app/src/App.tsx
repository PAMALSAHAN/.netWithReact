import React,{Component}from 'react';
import logo from './logo.svg';
import './App.css';
import { cars } from './demo'; /// import karapu ts file eka 
import CarItem from './CarItem'; //car item eka export karaganne mehamai
import axios from 'axios';


class App extends Component{
  state={
    values:[]
  }
    //https://localhost:5001/api/values
  componentDidMount(){
    axios.get('https://localhost:5001/api/values')
      .then((Response)=>{
        console.log(Response);
        this.setState({
          values:Response.data
        })
      })
    
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
          <ul>
          {this.state.values.map((val:any)=>(
            <li>{val.name}</li>
          ))}
        </ul>
        <h1>pamal</h1>

        </header>
        {/* <ul>
          {cars.map((car)=>(
          <CarItem cary={car}/>
            //car eke meke proerty ekak widihata ganna puluwan.
          ))}
        </ul> */}
        
      </div>
    );
  }
  
}

export default App;
