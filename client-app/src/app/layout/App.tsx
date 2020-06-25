import React, { useState, useEffect, Fragment } from "react";

//import { cars } from './demo'; /// import karapu ts file eka
//import CarItem from './CarItem'; //car item eka export karaganne mehamai
import axios from "axios";
import { Container } from "semantic-ui-react"; //sematic eka import dana eka.

import { IActivity } from "../models/Activity";
import { NavBar } from "../../features/nav/NavBar";
import { ActivityDashboard } from "../../features/activities/dashboard/ActivityDashboard";

const App = () => {
  //set data
  const [activityState, setActivity] = useState<IActivity[]>([]);
  //get specifi data
  const [SelectedActivityState, SetSelectedActivity] = useState<IActivity | null>(null);

  const HandleSelectedActivity = (id: string) => {
    SetSelectedActivity(activityState.filter(a => a.id === id)[0]);
  }

  const [modeState, setMode] = useState(false);

  //create activity button ekata handle ekak hadana eka karanne.
  const HandleOpenCreateForm = () => {
    SetSelectedActivity(null);
    setMode(true);
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

        />

      </Container>

    </Fragment>
  );
};
export default App;
