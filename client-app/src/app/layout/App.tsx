import React, { useEffect, Fragment, useContext } from "react";
import { Container } from "semantic-ui-react"; //sematic eka import dana eka.
import  NavBar  from "../../features/nav/NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import { LoadingComponent } from "../layout/LoadingComponent";
import ActivityStore from "../stores/activityStore";
import { observer } from "mobx-react-lite";

const App = () => {    
  //activity store ekak use karanna tinne 
  const activityStore = useContext(ActivityStore);
  useEffect(() => {
    activityStore.loadActivities(); //mobex exen gnalla danne
  }, [activityStore]);  //methana dependancy eka add karanna one aniwaryenma.

  if (activityStore.loadingInitial) {
    return <LoadingComponent content={"loading activities"} />
  }

  return (
    <Fragment>
      <NavBar/>

      <Container style={{ marginTop: "7em" }}>
        
        <ActivityDashboard/>

      </Container>

    </Fragment>
  );
};
export default observer (App);
