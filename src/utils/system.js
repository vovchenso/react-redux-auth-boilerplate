
export const createConstants = (...constants) => constants.reduce((acc, constant) => {
    acc[constant] = constant;
    return acc;
}, {});

export const createReducer = (initialState, reducers) => (state = initialState, action) => {
    const reducer = reducers[action.type];

    return reducer
        ? reducer(state, action.payload)
        : state;
};
