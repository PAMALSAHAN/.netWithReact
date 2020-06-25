import React, { useState } from 'react'
import { Segment, Form, Button } from 'semantic-ui-react'
import { IActivity } from '../../../app/models/Activity'

interface IProp{
    setMode:(modeState:boolean)=>void; 
    SelectedActivityState:IActivity|null ; 
}

const ActivityForm :React.FC<IProp> = ({setMode,SelectedActivityState}) => {

    const initializedForm=()=>{
        if (SelectedActivityState) {
            return SelectedActivityState
        }
        else{
            return{
                id:'',
                title:'',
                category:'',
                description:'',
                date:'',
                city:'',
                venue:'',

            }
        }
    };

    const [ActivityForm, setActivityForm] = useState<IActivity>(initializedForm);


    return (
        <Segment  clearing>
            <Form >
                <Form.Input placeholder="Title" value={SelectedActivityState?.title}  />
                <Form.TextArea rows={2} placeholder="Description" value={SelectedActivityState?.description}/>
                <Form.Input placeholder="Category" value={SelectedActivityState?.category}/>
                <Form.Input type="date" placeholder="Date" value={SelectedActivityState?.date}/>
                <Form.Input placeholder="City" value={SelectedActivityState?.city}/>
                <Form.Input placeholder="Venue" value={SelectedActivityState?.venue}/> 
                <Button floated='right' type="Submit" content="Submit" positive/>  
                <Button onClick={()=>setMode(false)} floated='right' content="Cancel"/>  

            </Form>
        </Segment>
    )
}

export default ActivityForm
