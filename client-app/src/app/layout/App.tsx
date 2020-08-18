import React, { useState, useEffect, Fragment } from "react";

//import { cars } from './demo'; /// import karapu ts file eka
//import CarItem from './CarItem'; //car item eka export karaganne mehamai

import { Container } from "semantic-ui-react"; //sematic eka import dana eka.

import { IActivity } from "../models/Activity";
import { NavBar } from "../../features/nav/NavBar";
import { ActivityDashboard } from "../../features/activities/dashboard/ActivityDashboard";
import agent from "../api/agent";

const App = () => {
  //set data activities ,setactivities meka use karanne activity ekak set karanna. 
  const [activityState, setActivity] = useState<IActivity[]>([]);
  //get specific data selectedActivity kiyana eka.
  const [SelectedActivityState, SetSelectedActivity] = useState<IActivity | null>(null);
   
  const [modeState, setMode] = useState(false);

  const HandleSelectedActivity = (id: string) => {
    SetSelectedActivity(activityState.filter(a => a.id === id)[0]);
    setMode(false);
  }




  //create activity button ekata handle ekak hadana eka karanne.
  const HandleOpenCreateForm = () => {
    SetSelectedActivity(null);
    setMode(true);
  }

  //create an activity ekata handle ekak use karanna eka karanne
  //mekedi spread operator eka use karala tina hinda activityState eka change wenawa meka use karana hinda.
  const handleCreateActivity = (activity: IActivity) => {
    setActivity([...activityState, activity]);
    SetSelectedActivity(activity);
    setMode(false);

  }

  //edit ekata handle method ekak use karanawa. 
  // meke handle eken wenne api parameter ekak ekka tina activity eka hara athi okkoma filter karala aran ekata ara edit 
  // karana handle eka dana eka thama karanne. 
  const handleEditActivity = (activity: IActivity) => {
    setActivity([...activityState.filter(a => a.id !== activity.id), activity]);
    //medeka dammahama detalis eke edit karama eka pennanawa.
    SetSelectedActivity(activity);
    setMode(false);
  }

  const HandleDeleteActivity=(id:string)=>{
    setActivity([...activityState.filter(a=> a.id !== id)])
  }



  useEffect(() => {
  agent.Activities.list()
      .then((Response) => {
        //date eka split karanna use kranne.
        let activityState:IActivity[]=[]; //state ma wenna one naha kamathi ekak use kranna puluwan.
        Response.forEach((activity)=>{  
          activity.date=activity.date.split('.')[0];
          activityState.push(activity);
        });
        setActivity(activityState);
      });
  }, []);

  return (
    <Fragment>
      <NavBar OpenCreateForm={HandleOpenCreateForm} ></NavBar>

      <Container style={{ marginTop: "7em" }}>

        <ActivityDashboard
          activityStateDashbord={activityState}

          selectActivity={HandleSelectedActivity}

          SelectedActivityState={SelectedActivityState}

          modeState={modeState}

          setMode={setMode}

          SetSelectedActivity={SetSelectedActivity}

          createActivity={handleCreateActivity}

          editActivity={handleEditActivity}

          deleteActivity={HandleDeleteActivity}


        />

      </Container>

    </Fragment>
  );
};
export default App;
