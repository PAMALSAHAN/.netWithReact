import React, { useState, useEffect, Fragment } from "react";

//import { cars } from './demo'; /// import karapu ts file eka
//import CarItem from './CarItem'; //car item eka export karaganne mehamai
import axios from "axios";
import { Container } from "semantic-ui-react"; //sematic eka import dana eka.

import { IActivity } from "../models/Activity";
import { NavBar } from "../../features/nav/NavBar";
import { ActivityDashboard } from "../../features/activities/dashboard/ActivityDashboard";

const App = () => {
  //set data activities ,setactivities meka use karanne activity ekak set karanna. 
  const [activityState, setActivity] = useState<IActivity[]>([]);
  //get specific data selectedActivity kiyana eka.
  const [SelectedActivityState, SetSelectedActivity] = useState<IActivity | null>(null);
   
  const [modeState, setMode] = useState(false);

  const HandleSelectedActivity = (id: string) => {
    SetSelectedActivity(activityState.filter(a => a.id === id)[0]);
  }



  //create activity button ekata handle ekak hadana eka karanne.
  const HandleOpenCreateForm = () => {
    SetSelectedActivity(null);
    setMode(true);
  }

  //create an activity ekata handle ekak use karanna eka karanne
  //mekedi spread operator eka use karala tina hinda activityState eka change wenawa meka use karana hinda.
  const handleCreateActivity = (activity: IActivity) => {
    setActivity([...activityState, activity])
  }

  //edit ekata handle method ekak use karanawa. 
  // meke handle eken wenne api parameter ekak ekka tina activity eka hara athi okkoma filter karala aran ekata ara edit 
  // karana handle eka dana eka thama karanne. 
  const handleEditActivity = (activity: IActivity) => {
    setActivity([...activityState.filter(a => a.id != activity.id), activity])
  }


  useEffect(() => {
    axios
      .get<IActivity[]>("https://localhost:5001/api/activity")
      .then((Response) => {
        setActivity(Response.data);
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


        />

      </Container>

    </Fragment>
  );
};
export default App;
