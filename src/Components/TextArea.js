import {addTodo} from "../redux/Actions";

const TextArea = ({dispatch}) => {

    const changeInputHandler = (event) => {
        dispatch(addTodo(event.target.value))
        event.preventDefault()
    }

    const changeFile = (event) => {
        const file = event.target.files[0]
    }

    return (
        <div className='Form__area'>
            <form>
            <textarea onChange={changeInputHandler}
                      name='area'>
            </textarea>
                <input name={'myFile'} type="file" onChange={changeFile} accept=
                    "application/msword, text/rtf, application/rtf, .docx" />

            <button type="submit">Відправити</button>
            </form>
        </div>
    );
};

export default TextArea;
