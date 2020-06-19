import React from "react";
import { List, Grid } from "semantic-ui-react";
import { IActivity } from "../../../app/models/Activity";
import { ActivityList } from "./ActivityList";

interface IProp {
    activityStateDashbord: IActivity[]
}
export const ActivityDashboard: React.FC<IProp> = ({ activityStateDashbord }) => {
    return (

            <Grid>
                <Grid.Column width={10}>
                    <ActivityList activityList={activityStateDashbord} ></ActivityList>
                    {/* <List style={{ padding: "20px" }}>
                        {activityStateDashbord.map((activity) => (
                            <List.Item key={activity.id}>{activity.title} </List.Item>
                            
                        ))}
                    </List> */}

                </Grid.Column>
            </Grid>

    );
};
