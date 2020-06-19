import React from 'react'
import { Item, Button, Label, Segment } from "semantic-ui-react";
import { IActivity } from '../../../app/models/Activity';

interface IProp {
    activityList: IActivity[]
}
export const ActivityList: React.FC<IProp> = ({ activityList }) => {
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
                                <Button floated="right" content="view" color="blue"></Button>
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


