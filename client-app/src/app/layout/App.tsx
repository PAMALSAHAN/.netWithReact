import React, { useState, useEffect } from 'react';
import logo from './logo.svg';

//import { cars } from './demo'; /// import karapu ts file eka 
//import CarItem from './CarItem'; //car item eka export karaganne mehamai
import axios from 'axios';
import { Header, Icon, List } from 'semantic-ui-react' //sematic eka import dana eka.

import { IActivity } from '../models/Activity'


const App = () => {

  //set data
  const [activityState, setActivity] = useState<IActivity[]>([]);

  useEffect(() => {
    axios.get<IActivity[]>('https://localhost:5001/api/activity')
      .then((Response) => {
        
        setActivity(Response.data);

      })
  },[])
  


  return (

    <div >

      <Header as='h2'>
        <Icon name='users' />
        <Header.Content>Value list</Header.Content>
      </Header>

      <List>

        {activityState.map((val) => (

          <List.Item key={val.id}>{val.title} </List.Item>

        ))}

      </List>

    </div>
  );

  // }

}

export default App;
