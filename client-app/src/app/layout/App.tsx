import React, { useState, useEffect, Fragment, SyntheticEvent, useContext } from "react";

//import { cars } from './demo'; /// import karapu ts file eka
//import CarItem from './CarItem'; //car item eka export karaganne mehamai

import { Container } from "semantic-ui-react"; //sematic eka import dana eka.
import { IActivity } from "../models/Activity";
import  NavBar  from "../../features/nav/NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import agent from "../api/agent";
import { LoadingComponent } from "../layout/LoadingComponent";
import  ActivityStore  from "../stores/activityStore";
import { observer } from "mobx-react-lite";

const App = () => {
  //activity store ekak use karanna tinne 
  // const activityStore = useContext(ActivityStore);
  const activityStore = useContext(ActivityStore);
  //set data activities ,setactivities meka use karanne activity ekak set karanna. 
  const [activityState, setActivity] = useState<IActivity[]>([]);
  //get specific data selectedActivity kiyana eka.
  const [SelectedActivityState, SetSelectedActivity] = useState<IActivity | null>(null);
  
  const [modeState, setMode] = useState(false);

  //loading componet eken meka fase karanne use effect ekedi api eken data fetch karana kota.
  const [loading, setLoading] = useState(true);

  //edit delete create karanakota use karanna puluwan state eka.button eka click karana eke name eka thami tinne. 
  const [submitting, setSubmitting] = useState(false);

  //target eka ganna hadana ekak
  const [target, setTarget] = useState('');

  // const HandleSelectedActivity = (id: string) => {
  //   SetSelectedActivity(activityState.filter(a => a.id === id)[0]);
  //   setMode(false);
  // }




  //create activity button ekata handle ekak hadana eka karanne.
  // const HandleOpenCreateForm = () => {
  //   SetSelectedActivity(null);
  //   setMode(true);
  // }

  //create an activity ekata handle ekak use karanna eka karanne
  //mekedi spread operator eka use karala tina hinda activityState eka change wenawa meka use karana hinda.
  // const handleCreateActivity = (activity: IActivity) => { 
  //   setSubmitting(true)
  //   agent.Activities.create(activity).then(()=>{
  //     setActivity([...activityState, activity]);
  //     SetSelectedActivity(activity);
  //     setMode(false);
  //   }).then(()=>setSubmitting(false));
    

  // }

  //edit ekata handle method ekak use karanawa. 
  // meke handle eken wenne api parameter ekak ekka tina activity eka hara athi okkoma filter karala aran ekata ara edit 
  // karana handle eka dana eka thama karanne. 
  // const handleEditActivity = (activity: IActivity) => {
  //   setSubmitting(true);
  //   agent.Activities.update(activity).then(()=>{
  //     setActivity([...activityState.filter(a => a.id !== activity.id), activity]);
  //     //medeka dammahama detalis eke edit karama eka pennanawa.
  //     SetSelectedActivity(activity);
  //     setMode(false);
  //   }).then(()=>setSubmitting(false));
  
  // }

  // const HandleDeleteActivity=(event:SyntheticEvent<HTMLButtonElement> ,id:string)=>{
  //   setSubmitting(true);
  //   //click kalama adala name eka ganna. 
  //   setTarget(event.currentTarget.name);
  //   agent.Activities.delete(id).then(()=>{
  //     setActivity([...activityState.filter(a=> a.id !== id)])
  //   }).then(()=>setSubmitting(false));
  
  // }



  useEffect(() => {
    activityStore.loadActivities(); //mobex exen gnalla danne
  }, [activityStore]);  //methana dependancy eka add karanna one aniwaryenma.

  if (activityStore.loadingInitial) {
    return <LoadingComponent content={"loading activities"} />
  }

  return (
    <Fragment>
      <NavBar 
      // OpenCreateForm={HandleOpenCreateForm} 
      />

      <Container style={{ marginTop: "7em" }}>
        
        <ActivityDashboard
          // activityStateDashbord={activityStore.activities}

          // selectActivity={HandleSelectedActivity}

          // SelectedActivityState={SelectedActivityState}

          // modeState={modeState}

          // setMode={setMode}

          // SetSelectedActivity={SetSelectedActivity}

          // createActivity={handleCreateActivity}

          // editActivity={handleEditActivity}

          // deleteActivity={HandleDeleteActivity}

          // submitting={submitting}

          // target={target}


        />

      </Container>

    </Fragment>
  );
};
export default observer (App);
