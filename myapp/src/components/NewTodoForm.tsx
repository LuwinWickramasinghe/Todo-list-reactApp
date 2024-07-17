import React, {useState} from 'react';

export const NewTodoForm: React.FC<{addTodo : Function}> = (props) => {
    const [assingned, setAssinged] = useState("");
    

    const [description, setDescription] = useState("");

    const submitTodo = () => {
        if (description !== "" && assingned !== ""){
            props.addTodo(description,assingned);
            setAssinged('');
            setDescription('');
        }

    }


    return(
        <div className='mt-5'>
            <form>
                <div className='mb-5'>
                    <label className='form-lable'>Assinged</label>
                    <input type='text' className='form-control' onChange={e => setAssinged(e.target.value)} value={assingned} required></input>
                </div>
                <div className='mb-5'>
                    <label className='form-lable'>Description</label>
                    <textarea  className='form-control' rows={3} onChange={e => setDescription(e.target.value)} value={description} required></textarea>
                </div>
                <button type='button' className='btn btn-primary mt-3' onClick={submitTodo}>Add new todo</button>

            </form>
        </div>
    )
}

