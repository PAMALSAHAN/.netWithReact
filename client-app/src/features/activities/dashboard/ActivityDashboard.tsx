import React from "react";
import { Grid } from "semantic-ui-react";
import { IActivity } from "../../../app/models/Activity";
import { ActivityList } from "./ActivityList";
import ActivityDetails from "../details/ActivityDetails"
import ActivityForm from "../form/ActivityForm"

interface IProp {
    activityStateDashbord: IActivity[];
    selectActivity:(id:string)=>void;
    SelectedActivityState:IActivity |null; 

}
export const ActivityDashboard: React.FC<IProp> = ({ activityStateDashbord,selectActivity,SelectedActivityState}) => {
    return (

            <Grid>

                <Grid.Column width={10}>
                    <ActivityList activityList={activityStateDashbord} selectActivity={selectActivity}  /> 
                    {/* <List style={{ padding: "20px" }}>
                        {activityStateDashbord.map((activity) => (
                            <List.Item key={activity.id}>{activity.title} </List.Item>
                            
                        ))}
                    </List> */}
                </Grid.Column>

                <Grid.Column  width={6}>
                    { SelectedActivityState && <ActivityDetails Activity={SelectedActivityState} />  }
                
                    <ActivityForm />
                </Grid.Column>

            </Grid>

    );
};
