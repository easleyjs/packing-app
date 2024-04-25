import { useSelector, useDispatch } from 'react-redux'
import NewContainerForm from '../components/NewContainerForm/NewContainerForm';
import { counterActions } from '../store/counter-slice'

function ContainerList() {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter.counter);
    const containers = useSelector((state) => state.containers.containerList);
  
    const incrementHandler = () => {
      dispatch(counterActions.increment());
    }
  
    const increaseHandler = () => {
      dispatch(counterActions.increase(10));
    }

    return (
        <>
            {
                containers.map((ctr, idx) => (
                    <p key={idx}>{ctr.name}</p>
                ))
            }
            <p>{ containers[0]?.name ?? null }</p>
            <NewContainerForm />
            <p>{ counter }</p>
            <button onClick={ incrementHandler }>Click Me</button>
        </>
    )
}