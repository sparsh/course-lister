import { createStore } from "redux";
const SET_SECTION_NAME = 'SET_SECTION_NAME';
const initalState = 0;


// action.js
export const setSectionName = (sectionName) => ({
    type: SET_SECTION_NAME,
    payload : sectionName
});


// reducer.js
const reducer = (state = initalState, action) => {
    switch(action.type) {
        case SET_SECTION_NAME : return action.payload;
        default : return state;
    }
}


// store.js
const store = createStore(reducer);

export default store;