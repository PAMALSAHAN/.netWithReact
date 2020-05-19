import React,{Component}from 'react';
import logo from './logo.svg';
import './App.css';
import { cars } from './demo'; /// import karapu ts file eka 
import CarItem from './CarItem'; //car item eka export karaganne mehamai
import axios from 'axios';
import { Header, Icon, List } from 'semantic-ui-react' //sematic eka import dana eka.


class App extends Component{
  state={
    values:[]
  }
    //https://localhost:5001/api/values
  componentDidMount(){
    axios.get('https://localhost:5001/api/values')
      .then((Response)=>{
        
        this.setState({
          values:Response.data
        })
      })
    
  }
  render(){
    return (
      <div >
        {/* className="App" //div eke class name eka. */}
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" /> */}
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
          {/* <ul>
          {this.state.values.map((val:any)=>(
            <li key={val.id}>{val.name} is my name.</li>
          ))}
        </ul>
         */}

        {/* </header> */}
        {/* <ul>
          {cars.map((car)=>(
          <CarItem cary={car}/>
            //car eke meke proerty ekak widihata ganna puluwan.
          ))}
        </ul> */}
        
        {/* header ekak */}
        
        <Header as='h2'>
        <Icon name='users' />
        <Header.Content>Value list</Header.Content>
        </Header>
        {/* <ul>
          {this.state.values.map((val:any)=>(
            <li key={val.id}>{val.name} is my name.</li>
          ))}
        </ul> */}
        <List>
        {this.state.values.map((val:any)=>(
            
            <List.Item key={val.id}>{val.name} is my name</List.Item>
          ))}
          
          
        </List>
        
        
      </div>
    );
  }
  
}

export default App;
