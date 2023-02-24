
const ADD_MESSAGE = "messages/ADD-MESSAGE";

const time = new Date().toLocaleTimeString().slice(0, -3);
let initialState: InitialStateType = {
    friends: [
        {id: 1, name: "Dima"},
        {id: 2, name: "EyeDoom"},
        {id: 3, name: "Dawa"},
        {id: 4, name: "Anatolij"},
        {id: 5, name: "Valja"},
        {id: 6, name: "Art"},
        {id: 7, name: "Gregor"},
        {id: 8, name: "Karina"},
        {id: 9, name: "Io"},
        {id: 10, name: "Mei"},
    ],
    friendMessages: [
        {id: 1, message: "Hello, friend <3", time: time},
        {id: 2, message: "Let's go hang out on this weekends?", time: time},
    ],
    myMessages: [
        {id: 1, message: "Hello-hello!", time: time},
        {id: 2, message: "Yes, of course!", time: time},
    ]
}

const messagesReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case ADD_MESSAGE:
            let time = new Date().toLocaleTimeString().slice(0, -3);
            let push = {id: state.myMessages.length + 1, message: action.setMessage, time: time};
            return {
                ...state,
                myMessages: [...state.myMessages, push],
            }
        default:
            return state;
    }
}

export const setNewMessage = (setMessage: string) => ({type: ADD_MESSAGE, setMessage})

export default messagesReducer;

export type InitialStateType = {
    friends: { id: number, name: string }[],
    friendMessages: { id: number, message: string, time: string }[],
    myMessages: {id: number, message: string, time: string}[],
}
// type ActionType = InferActionsTypes<typeof actions>