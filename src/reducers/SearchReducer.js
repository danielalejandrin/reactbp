export default (state = '', action ) => {
    if(action.type === 'POKE_SEARCH'){
        return state + action.payload;
    }
    return state;
};