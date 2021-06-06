const {addTodo, chooseUserLanguage, chooseCouple} = require("./Actions");
const {InputReducer} = require("./InputReducer");


describe("Data update comes to the state", () => {
    let state = {
        text: ' ',
        chooseLanguage: 'Англійська',
        chooseCouple: 'Українська/російська - англійська'
    }
    test('new text should be added', () => {
        let action = addTodo("HELLO WORD")
        let newState = InputReducer(state, action)
        expect(newState.text).toBe('HELLO WORD')
    })

    test('new language should be update', () => {
        let action = chooseUserLanguage("Українська")
        let newState = InputReducer(state, action)
        expect(newState.chooseLanguage).toBe('Українська')
    })

    test('new couple should be update', () => {
        let action = chooseCouple("Англійська - українська")
        let newState = InputReducer(state, action)
        expect(newState.chooseCouple).toBe('Англійська - українська')
    })
})

