import { Link, useParams } from "react-router-dom";

function ContainerDetail() {
    const params = useParams();

    return (
        <>
            <Link to=".." relative="path">Back</Link>
            <h1>Details:</h1>
            <p>{ params.containerId }</p>
        </>
    )
}

export default ContainerDetail;