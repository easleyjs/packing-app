import { redirect, json } from "react-router-dom";
import store from '../store/index';
import { containerActions } from "../store/container-slice.js";

import NewContainerForm from "../components/NewContainerForm/NewContainerForm.jsx";

function NewContainerPage() {
    return <NewContainerForm />
}

export default NewContainerPage;

export const createContainer = async ({ request, params }) => {
    const data = await request.formData();
    
    const eventData = {
        name: data.get("name"),
        description: data.get("description"),
        owner: "josh"
    }

    //fetch('url', { 
    //    method: 'POST',
    //    headers: {
    //        'Content-Type': 'application/json'
    //    },
    //    body: JSON.stringify( eventData )
    //});
    
    
    //if (!response.ok) {
    //    throw json({ message: 'Could not save container.', status: 500 })
    //}
    
        //const fd = new FormData(e.target);
        //const data = Object.fromEntries(fd.entries());

    //dispatch( containerActions.add(eventData) );
    
    store.dispatch(containerActions.add(eventData));

    return redirect('/containers');
}