import React, { useState, ChangeEvent, FormEvent } from 'react'
import { Segment, Form, Button } from 'semantic-ui-react'
import { IActivity } from '../../../app/models/Activity'

interface IProp {
    setMode: (modeState: boolean) => void;
    SelectedActivityState: IActivity | null;
    createActivity: (activity: IActivity) => void;
    editActivity: (activity: IActivity) => void;
}

const ActivityForm: React.FC<IProp> = ({ setMode, SelectedActivityState, createActivity, editActivity }) => {

    const initializedForm = () => {
        if (SelectedActivityState) {
            return SelectedActivityState
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

    //activity eka form eke tina kiyana adahasa tinne. activity, setActivity 
    const [ActivityFormState, setActivityForm] = useState<IActivity>(initializedForm);

    const HandleChangeInput = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.currentTarget;
        setActivityForm({ ...ActivityFormState, [name]: value })
    }

    //submit ekata handle ekak gahanwa.  meke create ekai edit ekai dekama karaganna one. eka hinda 
    // karanne check karala balanawa id eka null da kiyala e kiyanne alith activty ekak create karanna one.
    // id eka null naththam karannne edit. ethakota submit button eka click karanna tinne ethakota. 
    const handleSubmit = () => {
        if (ActivityFormState.id.length===0){
            let newActivity ={
                ...ActivityFormState,
                id:'guid'
            }
            createActivity(newActivity);
        }
        else{
            editActivity(ActivityFormState);
        }
    }


    return (
        <Segment clearing>
            <Form >
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
                    type="date"
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
                    floated='right'
                    type="Submit"
                    content="Submit"
                    positive />

                <Button
                    onClick={() => setMode(false)}
                    floated='right'
                    content="Cancel" />

            </Form>
        </Segment>
    )
}

export default ActivityForm
