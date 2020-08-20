import { observable, action, computed } from "mobx";
import { createContext, SyntheticEvent } from "react";
import { IActivity } from "../models/Activity";
import agent from "../api/agent";

class ActivityStore {
    @observable activities: IActivity[] = [];
    @observable loadingInitial = false;

    //view button ekata
    @observable selectedActivity: IActivity | undefined;
    @observable editMode: boolean = false;

    //create button ekata
    @observable submitting = false;

    //observarable map use
    @observable activityRegistry = new Map();

    //delete activity
    @observable target='';

    //sort karanawa date eka ekka
    @computed get activitiesByDate() {
        // return this.activities.sort((a,b)=> Date.parse(a.date)-Date.parse(b.date));
        return Array.from(this.activityRegistry.values()).sort(
            (a, b) => Date.parse(a.date) - Date.parse(b.date)
        );
    }

    @action loadActivities = async () => {
        this.loadingInitial = true;

        try {
            const activities = await agent.Activities.list();
            activities.forEach((activity) => {
                activity.date = activity.date.split(".")[0];
                // this.activities.push(activity);
                this.activityRegistry.set(activity.id, activity);
            });

            this.loadingInitial = false;
        } catch (error) {
            console.log(error);
            this.loadingInitial = false;
        }

        // agent.Activities.list()
        // .then((Response) => {
        //   //date eka split karanna use kranne.
        // //   let activityState:IActivity[]=[]; //state ma wenna one naha kamathi ekak use kranna puluwan.
        //   Response.forEach((activity)=>{
        //     activity.date=activity.date.split('.')[0];
        //     this.activities.push(activity);
        //   });

        // }).finally(()=>this.loadingInitial=false);
    };

    @action selectActivity = (id: string) => {
        // this.selectedActivity = this.activities.find((a) => a.id == id);
        this.selectedActivity=this.activityRegistry.get(id);
        this.editMode = false;
        //meka hinda thamai undefined kiyala liyanne.
        console.log("select Activity");
    };

    @action createActivity = async (activity: IActivity) => {
        this.submitting = true;
        try {
            await agent.Activities.create(activity);
            // this.activities.push(activity);
            this.activityRegistry.set(activity.id, activity);
            this.editMode = false;
            this.submitting = false;
        } catch (error) {
            this.submitting = false;
            console.log(error);
        }
    };

    @action deleteActivity=async (event:SyntheticEvent<HTMLButtonElement>,id:string)=>{
        this.submitting=true;
        this.target=event.currentTarget.name;
        
        try {
            await agent.Activities.delete(id);
            this.activityRegistry.delete(id); //naththma filer karala ganna one
            this.submitting=false;
            this.target='';
        } catch (error) {
            console.log(error);
            this.submitting=false;
            this.target='';
        }


    }

    //create form eka click kalama enna thmai tinne.
    @action openCreateForm = () => {
        console.log("before ocy" + this.editMode);

        this.editMode = true;
        this.selectedActivity = undefined;

        console.log("Open create form");
        console.log("ocf" + this.editMode);
    };

    @action openEditForm=(id:string)=>{
        this.selectedActivity=this.activityRegistry.get(id);
        this.editMode=true;
    }

    @action cancelSelectedActivity=()=>{
        this.selectedActivity=undefined;
    }

    @action cancelFormOpen=()=>{
        this.editMode=false;
    }


    @action editActivity = async (activity: IActivity) => {
        this.submitting = true;
        try {
            agent.Activities.update(activity);
            this.activityRegistry.set(activity.id, activity);
            this.selectedActivity = activity;
            this.editMode = false;
            this.submitting = false;
        } catch (error) {
            this.submitting=false;
            console.log(error);
        }
    };
}

export default createContext(new ActivityStore());