import axios, { AxiosResponse } from 'axios';
import { IActivity } from "../models/Activity";

axios.defaults.baseURL = "https://localhost:5001/api/";

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
    get: (url: string) =>axios  .get(url).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body) .then(responseBody),
    put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
    del: (url: string) =>axios.delete(url).then(responseBody),
  };

const Activities = {
    list: () => axios.get('/activities').then(responseBody),
    details: (id: string) => requests.get(`/activities/${id}`),
    create: (activity: IActivity) => requests.post('/activities', activity),
    update: (activity: IActivity) =>requests.put(`/activities/${activity.id}`, activity),
    delete: (id: string) => requests.del(`/activities/${id}`),
    attend: (id: string) => requests.post(`/activities/${id}/attend`, {}),
    unattend: (id: string) => requests.del(`/activities/${id}/attend`)
  };

  export default {Activities};