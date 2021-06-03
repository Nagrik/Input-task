import {useState} from "react";
import TextArea from "./Components/TextArea";
import {useDispatch, useSelector} from "react-redux";
import {addTodo, chooseCouple, chooseUserLanguage} from "./redux/Actions";

const App = () => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch()

    const onChangeSelect = (e) => {
        setValue(e.target.value)
    }
    const onChangeChoose = (e) => {
        dispatch(chooseUserLanguage(e.target.value))
        dispatch(addTodo(e.target.value))
    }
    const onChangeCouple = (e) => {
        dispatch(chooseCouple(e.target.value))
        dispatch(addTodo(e.target.value))

    }

    const selectTotalPrice = ({InputReducer}) => InputReducer.totalPrice
    const totalPrice = useSelector(selectTotalPrice)

    const selectTotalTime = ({InputReducer}) => InputReducer.CompletionDate
    const CompletionDate = useSelector(selectTotalTime)


    return (
        <div>
            <form className='Form'>
                <div className='mainSelectWrapper'>
                    <select required onChange={onChangeSelect} className="select-css">
                        <option value="Послуга" hidden>Послуга &nbsp; ></option>
                        <option value="Редагування">Редагування</option>
                        <option value="Переклад">Переклад</option>
                    </select>
                    <div className='Price'><h1>{totalPrice}</h1><span> грн</span></div>
                    {
                        CompletionDate && <div className='Price'><h1>{CompletionDate.toString()}</h1></div>
                    }

                </div>
                <TextArea dispatch={dispatch}/>
                <div className='Form__language'>
                    {
                        value === 'Редагування' ?
                            <select className="select-css" onChange={onChangeChoose}>
                                <option value="Українська">Українська</option>
                                <option value="Російська">Російська</option>
                                <option value="Англійська">Англійська</option>
                                <option value="Англійська(носій)">Англійська(носій)</option>
                            </select>
                            :
                            <select disabled={value === ''} className="select-css" onChange={onChangeCouple}>
                                <option value="" hidden>Мовна пара</option>
                                <option value="Українська/російська - англійська">Українська/російська - англійська
                                </option>
                                <option value="Англійська - українська">Англійська - українська</option>
                                <option value="Англійська - російська">Англійська - російська</option>
                                <option value="Російська - українська">Російська - українська</option>
                                <option value="Українська - Російська">Українська - Російська</option>
                            </select>
                    }
                </div>
            </form>
        </div>
    );
};

export default App;
