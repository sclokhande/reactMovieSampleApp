const initState = [
    {
        'id': 1,
        'name': "Avatar",
        'artists': ['Neytiri', 'Jake Sully', 'Tsutey', 'Colonel Miles Quaritch'],
        'genres': ['Action', 'Adventure', 'Fantasy'],
        'banner': "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSuXjP4Qmkq8tTwPyjffwgMQZ7sxtLoCDaKx6R5GQ4SkXgk9sct-Y4KCsN79PmhQ9A3AY&usqp=CAU",
        'description': ''
    },
    {
        'id': 2,
        'name': "Deadpool",
        'artists': ['Ryan Reynolds', 'Karan Soni', 'Ed Skrein', 'Michael Benyaer', 'Ayzee'],
        'genres': ['Action', 'Adventure', 'Comedy'],
        'banner': "https://contentserver.com.au/assets/557638_p11098044_p_v8_af.jpg",
        'description': ''
    }
];

//Define Actions
const movieReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SERACH_MOVIE':
            return {
                ...state,
                name: action.payload
            }
        case 'ADD_MOVIE':
            return action.payload
        //Movie list
        default:
            return state
    }
}

export default movieReducer;