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
    modeState:boolean;
    setMode:(modeState:boolean)=>void; 
    SetSelectedActivity:(activity:IActivity |null)=>void;
    createActivity:(activity:IActivity)=>void;
    editActivity:(activity:IActivity)=>void;
    

}
export const ActivityDashboard: React.FC<IProp> = ({ activityStateDashbord,selectActivity,SelectedActivityState,modeState,setMode,SetSelectedActivity,createActivity,editActivity}) => {
    return (

            <Grid>

                <Grid.Column width={10}>
                    <ActivityList activityList={activityStateDashbord} selectActivity={selectActivity}    /> 
                    {/* <List style={{ padding: "20px" }}>
                        {activityStateDashbord.map((activity) => (
                            <List.Item key={activity.id}>{activity.title} </List.Item>
                            
                        ))}
                    </List> */}
                </Grid.Column>

                <Grid.Column  width={6}>

                    { SelectedActivityState && !modeState && <ActivityDetails Activity={SelectedActivityState} setMode={setMode} SetSelectedActivity={SetSelectedActivity} />  }
                    
                    { modeState && <ActivityForm 
                        setMode={setMode} 
                        SelectedActivityState={SelectedActivityState}
                        createActivity={createActivity}
                        editActivity={editActivity}
                        />}
                    
                </Grid.Column>

            </Grid>

    );
};
