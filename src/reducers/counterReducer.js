export const counterReducer = (state = 0, action) => {
    switch(action.type) {
        case "INCREMENT":
            return state+1;
        case "DECREMENT":
            return state-1;
        case "USER_NUMBER":
            return state + Number(action.num);
        default:
            return state;
    }
}
