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
    chooseLanguage: "",
    chooseCouple: ""
}
export const InputReducer = (state = initialState, action) => {
    switch (action.type) {
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
        case 'ADD_INPUT_VALUE':
            //Меньше 1000 символов Пары
            if (state.text.length <= 1000 && state.chooseCouple === 'Англійська - російська') {
                state.totalPrice = state.fixedEngPrice

            } else if (state.text.length <= 1000 && state.chooseCouple === 'Англійська - українська') {
                state.totalPrice = state.fixedEngPrice

            } else if (state.text.length <= 1000 && state.chooseCouple === 'Українська/російська - англійська') {
                state.totalPrice = state.fixedRuPrice

            } else if (state.text.length <= 1000 && state.chooseCouple === "Російська - українська") {
                state.totalPrice = state.fixedRuPrice

            } else if (state.text.length <= 1000 && state.chooseCouple === "Українська - Російська") {
                state.totalPrice = state.fixedRuPrice

                //Больше 1000 символов Пары
            } else if (state.text.length > 1000 && state.chooseCouple === 'Англійська - українська') {
                state.totalPrice = (state.text.length * 0.12).toFixed(2)

            } else if (state.text.length > 1000 && state.chooseCouple === 'Англійська - російська') {
                state.totalPrice = (state.text.length * 0.12).toFixed(2)

            } else if (state.text.length > 1000 && state.chooseCouple === 'Українська/російська - англійська') {
                state.totalPrice = (state.text.length * 0.05).toFixed(2)

            } else if (state.text.length > 1000 && state.chooseCouple === "Російська - українська") {
                state.totalPrice = (state.text.length * 0.05).toFixed(2)

            } else if (state.text.length > 1000 && state.chooseCouple === "Українська - Російська") {
                state.totalPrice = (state.text.length * 0.05).toFixed(2)
            }

            // Меньше 1000 символов
            if (state.text.length <= 1000 && state.chooseLanguage === 'Українська') {
                state.totalPrice = state.fixedRuPrice
                state.endPoint = Math.floor(state.text.length / 1333) * 30

            } else if (state.text.length <= 1000 && state.chooseLanguage === 'Російська') {
                state.totalPrice = state.fixedRuPrice
                state.endPoint = Math.floor(state.text.length / 1333) * 30

            } else if (state.text.length <= 1000 && state.chooseLanguage === 'Англійська') {
                state.totalPrice = state.fixedEngPrice
                state.endPoint = Math.floor(state.text.length / 333) * 30

            } else if (state.text.length <= 1000 && state.chooseLanguage === 'Англійська(носій)') {
                state.totalPrice = state.fixedEngPrice
                state.endPoint = Math.floor(state.text.length / 333) * 30
            }

            // Больше 1000 символов
            if (state.text.length > 1000 && state.chooseLanguage === 'Українська') {
                state.totalPrice = (state.text.length * 0.05).toFixed(2)
                state.endPoint = Math.floor(state.text.length / 1333) * 30

            } else if (state.text.length > 1000 && state.chooseLanguage === 'Російська') {
                state.totalPrice = (state.text.length * 0.05).toFixed(2)
                state.endPoint = Math.floor(state.text.length / 1333) * 30

            } else if (state.text.length > 1000 && state.chooseLanguage === 'Англійська') {
                state.totalPrice = (state.text.length * 0.12).toFixed(2)
                state.endPoint = Math.floor(state.text.length / 333) * 30

            } else if (state.text.length > 1000 && state.chooseLanguage === 'Англійська(носій)') {
                state.totalPrice = (state.text.length * 0.12).toFixed(2)
                state.endPoint = Math.floor(state.text.length / 333) * 30
            }

            state.CompletionDate = moment().add(90 + state.endPoint, 'minutes').format("MMMM Do YYYY, HH:mm a")
            return {
                ...state,
                text: action.text,
                totalPrice: state.totalPrice,
                CompletionDate: state.CompletionDate,
            }

        default:
            return state
    }
}
