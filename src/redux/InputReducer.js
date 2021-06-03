import moment from "moment";
import 'moment/locale/ru'  // without this line it didn't work
moment.locale('ru')
const initialState = {
    text: ' ',
    fixedEngPrice: 120,
    fixedRuPrice: 50,
    CompletionDate: '',
    endPoint: 0,
    totalPrice: 0,
    chooseLanguage: 'Англійська',
    chooseCouple: 'Українська/російська - англійська'
}
export const InputReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_INPUT_VALUE':
            //Меньше 1000 символов ENG words
            if (state.text.length <= 1000 && state.chooseCouple === 'Англійська - російська') {
                state.totalPrice = state.fixedEngPrice
                //Больше 1000 символов ENG words
            } else if (state.text.length <= 1000 && state.chooseCouple === 'Англійська - українська') {
                state.totalPrice = state.fixedEngPrice
                //Больше 1000 символов ENG words
            } else if (state.text.length > 1000 && state.chooseCouple === 'Англійська - українська') {
                state.totalPrice = (state.text.length * 0.12).toFixed(2)
                //Меньше 1000 символов RU/UKR words

            } else if (state.text.length > 1000 && state.chooseCouple === 'Англійська - російська') {
                state.totalPrice = (state.text.length * 0.12).toFixed(2)
                //Меньше 1000 символов RU/UKR words

            } else if (state.text.length <= 1000 && state.chooseCouple === 'Українська/російська - англійська') {
                state.totalPrice = state.fixedRuPrice
                //Больше 1000 символов RU/UKR words
            } else if (state.text.length <= 1000 && state.chooseCouple === "Російська - українська") {
                state.totalPrice = state.fixedRuPrice
                //Больше 1000 символов RU/UKR words
            } else if (state.text.length <= 1000 && state.chooseCouple === "Українська - Російська") {
                state.totalPrice = state.fixedRuPrice
                //Больше 1000 символов RU/UKR words

            } else if (state.text.length > 1000 && state.chooseCouple === 'Українська/російська - англійська') {
                state.totalPrice = (state.text.length * 0.05).toFixed(2)

            } else if (state.text.length > 1000 && state.chooseCouple === "Російська - українська") {
                state.totalPrice = (state.text.length * 0.05).toFixed(2)

            } else if (state.text.length > 1000 && state.chooseCouple === "Українська - Російська") {
                state.totalPrice = (state.text.length * 0.05).toFixed(2)
            }


            if (state.chooseLanguage === 'Українська') {
                state.endPoint = Math.floor(state.text.length / 1333) * 30
            }
            if (state.chooseLanguage === 'Російська') {
                state.endPoint = Math.floor(state.text.length / 1333) * 30
            }
            if (state.chooseLanguage === 'Англійська') {
                state.endPoint = Math.floor(state.text.length / 333) * 30
            }
            if (state.chooseLanguage === 'Англійська(носій)') {
                state.endPoint = Math.floor(state.text.length / 333) * 30
            }

            let time = moment().add(90 + state.endPoint, 'minutes')
            state.CompletionDate = moment(time, "hh:mm:ss").format("dddd, MMMM Do YYYY, HH:mm a")
            return {
                ...state,
                text: action.text,
                totalPrice: state.totalPrice,
                CompletionDate: state.CompletionDate
            }
        case 'CHOOSE_USER_LANGUAGE':
            return {
                ...state,
                chooseLanguage: action.value,
            }
        case 'CHOOSE_COUPLE':
            return {
                ...state,
                chooseCouple: action.value,
            }
        default:
            return state
    }
}
