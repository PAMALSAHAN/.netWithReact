import React from 'react'
import { Card, Image, Button } from "semantic-ui-react";
import { IActivity } from '../../../app/models/Activity';

interface IProps{
    Activity:IActivity;
}

const ActivityDetails:React.FC<IProps> = ({Activity}) => {
    return (
        <Card fluid>
            <Image src={"/assets/category/"+Activity.category+".jpg"} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{Activity.title}</Card.Header>
                <Card.Meta>
                    <span>{Activity.date}</span>
                    <span>{Activity.category}</span>
                </Card.Meta>
                <Card.Description>
                    {Activity.description}

            </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group fluid>
                    <Button basic content="Edit" color="green" />
                    <Button basic content="Cancel" color="blue" /> 
                </Button.Group>
            </Card.Content>
        </Card>
    )
}

export default ActivityDetails
