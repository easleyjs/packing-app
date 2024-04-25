import { Link, useLoaderData } from "react-router-dom";
import store from '../store/index.js';
//import { containerActions } from "../store/container-slice.js";

function ContainersPage() {
    //const containers = useSelector((state) => state.containers.containerList);
    const containers = useLoaderData();

    return (
        <>
            <h1>Containers</h1>
            <Link to="/containers/new">New Container</Link>
            {
                containers?.length > 0 ?
                <ul>
                { containers.map(( container ) => (
                    <li key={ container.id }>
                        <Link to={`/containers/${ container.id }`}>{ container.name }</Link>
                    </li>
                    ))}
                    </ul> : null
            }
        </>
    )
}

export default ContainersPage;

export const containerLoader = async () => {
    const containers = await store.getState().containers.containerList;

    //dispatch will go here THEN return containers eventually.
    
    return containers;
};