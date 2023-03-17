import React, {useState} from 'react';

export const NewTodoForm: React.FC<{addTodo: Function}> = (props) => {

    const [description, setDescription] = useState('');
    const [assigned, setAssigned] = useState('');

    // const descriptionChange = (event) => {
    //     console.log('description', event.target.value);
    //     setDescription(event.target.value);
    // }

    // const assignedChange = (event) => {
    //     console.log('assigned', event.target.value);
    //     setAssigned(event.target.value)
    // }

    const submitTodo = () =>{
        if(description != '' && assigned != ''){
            props.addTodo(description, assigned);
            setDescription("");
            setAssigned('');
        }
    }
    
    return (
        <div className='mt-5'>
            <form>
                <div className='mb-3'>
                    <label className='form-label'>Assigned</label>
                    <input 
                        type='text' 
                        className='form-control' 
                        required 
                        // onChange={assignedChange}
                        onChange={e=> setAssigned(e.target.value)}
                        value = {assigned}
                    ></input>
                </div>
                <div className='mb-3'>
                    <label className='form-control'>Description</label>
                    <textarea 
                        className='form-control' 
                        rows={3} 
                        required 
                        onChange={e => setDescription(e.target.value)} // can be done in either way by directly passing the function that grabs the event on change and set the description based on a target function of e.target.value by commenting method above 
                        value={description}
                    ></textarea>
                </div>
                <button 
                    type='button' 
                    className='btn btn-primary mt-3' 
                    onClick={submitTodo}
                >
                    Add Todo
                </button>
            </form>
        </div>
    )
}