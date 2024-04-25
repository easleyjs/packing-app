import { Form } from "react-router-dom";

// Container
/*
    name
    desc
*/

function NewContainerForm() {

    return (
            <Form method='post'>
                <label htmlFor="name">
                Name:
                    <input name="name" 
                           id="name" 
                           type="text" 
                           placeholder='(Ex. "Grey plastic bin", "Treasure Chest", etc.)'
                    />
                </label>
                <label htmlFor="description">
                Description:
                    <input name="description" 
                           id="description" 
                           type="text" 
                           placeholder='S/n:#####, covered with stickers, etc.'
                    />
                </label>
                <button>Create</button>
            </Form>
    )
}

export default NewContainerForm;