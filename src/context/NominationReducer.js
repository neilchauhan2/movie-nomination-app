export default (state, action) => {
    switch (action.type) {
        case "DELETE_NOMINATION":
            return {
                ...state,
                nominations: state.nominations.filter(
                    (nomination) => nomination.imdbId !== action.payload
                )
            };

        default:
            return state;
    }
};
