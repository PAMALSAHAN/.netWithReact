import React from 'react'
import { Item, Button, Label, Segment } from "semantic-ui-react";
import { IActivity } from '../../../app/models/Activity';

interface IProp {
    activityList: IActivity[];
    selectActivity:(id:string)=>void;
    deleteActivity:(id:string)=>void;

}
export const ActivityList: React.FC<IProp> = ({ activityList ,selectActivity,deleteActivity}) => {
    return (

        <Segment clearing>
            <Item.Group divided>
                {activityList.map(activity => (
                    <Item key= {activity.id}>
                        <Item.Content >
                            <Item.Header as='a'> {activity.title}   </Item.Header>
                            <Item.Meta>{activity.date}</Item.Meta>
                            <Item.Description>
                                <div>{activity.description}</div>
                                <div>{activity.city},{activity.venue}</div>
                            </Item.Description>

                            <Item.Extra>
                                <Button onClick={()=>selectActivity(activity.id)} floated="right" content="view" color="blue"></Button>
                                <Button onClick={()=>deleteActivity(activity.id)} floated="right" content="delete" color="red"></Button>
                                <Label basic content={activity.category}></Label> 
                            </Item.Extra> 
                        </Item.Content>
                    </Item>
                ))}

            </Item.Group>



        </Segment>

    )
}

export default ActivityList;


