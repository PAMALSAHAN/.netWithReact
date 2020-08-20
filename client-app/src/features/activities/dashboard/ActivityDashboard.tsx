import React, { SyntheticEvent, useContext } from "react";
import { Grid } from "semantic-ui-react";
import { IActivity } from "../../../app/models/Activity";
import  ActivityList  from "./ActivityList";
import ActivityDetails from "../details/ActivityDetails"
import ActivityForm from "../form/ActivityForm"
import { observer } from "mobx-react-lite";
import  ActivityStore  from "../../../app/stores/activityStore"; 

interface IProp { 
    // activityStateDashbord: IActivity[];
    // selectActivity: (id: string) => void;
    // SelectedActivityState: IActivity | null;
    // modeState: boolean;
    // setMode: (modeState: boolean) => void;
    // SetSelectedActivity: (activity: IActivity | null) => void;
    // createActivity: (activity: IActivity) => void;
    // editActivity: (activity: IActivity) => void;
    // deleteActivity: (e:SyntheticEvent<HTMLButtonElement>,id: string) => void;
    // submitting:boolean; 
    // target:string;

    // selectActivity meka danna 

}
const ActivityDashboard: React.FC<IProp> = () => {
    
    const activityStore = useContext(ActivityStore);
    const {editMode,selectedActivity}=activityStore;  //meka dana kota prop wala tina mode eka ain karaganna one. mokada eka wenuwata thamai meka use karanne
    return (

        <Grid>

            <Grid.Column width={10}>
                <ActivityList 
                    // target={target}
                    // activityList={activityStateDashbord} 
                    // selectActivity={selectActivity} 
                    // deleteActivity={deleteActivity} 
                    // submitting={submitting} 
                    />
                {/* <List style={{ padding: "20px" }}>
                        {activityStateDashbord.map((activity) => (
                            <List.Item key={activity.id}>{activity.title} </List.Item>
                            
                        ))}
                    </List> */}
            </Grid.Column>

            <Grid.Column width={6}>
                    {/* selectedActivity & edit mode ekenn store eken */}
                {selectedActivity && !editMode && <ActivityDetails />}

                


                {activityStore.editMode && <ActivityForm
                
                    key={(selectedActivity && selectedActivity.id) || 0}
                    // setMode={setMode}
                    SelectedActivityState={selectedActivity!}
                    // createActivity={createActivity} 
                    // editActivity={editActivity} 
                    // submitting={submitting}

                />}

            </Grid.Column>

        </Grid>

    );
};

export default observer(ActivityDashboard);
