import React, {  useContext } from "react";
import { Grid } from "semantic-ui-react";
import  ActivityList  from "./ActivityList";
import ActivityDetails from "../details/ActivityDetails"
import ActivityForm from "../form/ActivityForm"
import { observer } from "mobx-react-lite";
import  ActivityStore  from "../../../app/stores/activityStore"; 


const ActivityDashboard: React.FC = () => {
    
    const activityStore = useContext(ActivityStore);
    const {editMode,selectedActivity}=activityStore;  //meka dana kota prop wala tina mode eka ain karaganna one. mokada eka wenuwata thamai meka use karanne
    return (

        <Grid>

            <Grid.Column width={10}>
                <ActivityList/>
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
