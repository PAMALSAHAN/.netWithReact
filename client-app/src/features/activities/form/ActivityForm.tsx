import React, { useState,  FormEvent, useContext } from 'react'
import { Segment, Form, Button } from 'semantic-ui-react'
import { IActivity } from '../../../app/models/Activity'
import { v4 as uuid } from 'uuid';
import ActivityStore from "../../../app/stores/activityStore";

import { observer } from 'mobx-react-lite';

interface IProp {
   
    

    SelectedActivityState: IActivity; //activity kiyana eka
    // createActivity: (activity: IActivity) => void;
    // editActivity: (activity: IActivity) => void;
    // submitting:boolean;
}

const ActivityForm: React.FC<IProp> = ({  SelectedActivityState:initialFormState }) => {

    const activityStore = useContext(ActivityStore);
    const {createActivity,editActivity,submitting,cancelFormOpen}=activityStore;

    const initializedForm = () => {
        if (initialFormState) {
            return initialFormState
        }
        else {
            return {
                id: '',
                title: '',
                category: '',
                description: '',
                date: '',
                city: '',
                venue: '',

            }
        }
    };

    //activity eka form eke tina kiyana adahasa tinne. activity, setActivity  ActivityFormState
    const [SelectedActivityState, setSelectedActivityState] = useState<IActivity>(initializedForm);

    const HandleChangeInput = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.currentTarget;
        setSelectedActivityState({ ...SelectedActivityState, [name]: value })
    } 

    //submit ekata handle ekak gahanwa.  meke create ekai edit ekai dekama karaganna one. eka hinda 
    // karanne check karala balanawa id eka null da kiyala e kiyanne alith activty ekak create karanna one.
    // id eka null naththam karannne edit. ethakota submit button eka click karanna tinne ethakota. 
    const handleSubmit = () => {
        if (SelectedActivityState.id.length===0){
            let newActivity ={
                ...SelectedActivityState,
                id:uuid()
            }
            createActivity(newActivity);
        }
        else{
            editActivity(SelectedActivityState);
        }

        console.log(SelectedActivityState);
    }


    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit} >
                <Form.Input
                    onChange={HandleChangeInput}
                    name="title"
                    placeholder="Title"
                    value={SelectedActivityState?.title} />

                <Form.TextArea
                    rows={2}
                    onChange={HandleChangeInput}
                    name="description"
                    placeholder="Description"
                    value={SelectedActivityState?.description} />

                <Form.Input
                    placeholder="Category"
                    name="category"
                    onChange={HandleChangeInput}
                    value={SelectedActivityState?.category} />

                <Form.Input
                    type="datetime-local"
                    name="date"
                    onChange={HandleChangeInput}
                    placeholder="Date"
                    value={SelectedActivityState?.date} />

                <Form.Input
                    placeholder="City"
                    name="city"
                    onChange={HandleChangeInput}
                    value={SelectedActivityState?.city} />

                <Form.Input
                    placeholder="Venue"
                    name="venue"
                    onChange={HandleChangeInput}
                    value={SelectedActivityState?.venue} />

                <Button
                    loading={submitting}
                    floated='right'
                    type="Submit"
                    content="Submit"
                    positive />

                <Button
                    onClick={cancelFormOpen}
                    floated='right'
                    content="Cancel" />

            </Form>
        </Segment>
    )
}

export default  observer (ActivityForm); 
