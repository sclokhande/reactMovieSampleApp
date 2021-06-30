const initState = {
        movies:[{
            'id': 1,
            'name': "Avatar",
            'artists': ['Neytiri', 'Jake Sully', 'Tsutey', 'Colonel Miles Quaritch'],
            'genres': ['Action', 'Adventure', 'Fantasy'],
            'bannerURL': "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSuXjP4Qmkq8tTwPyjffwgMQZ7sxtLoCDaKx6R5GQ4SkXgk9sct-Y4KCsN79PmhQ9A3AY&usqp=CAU",
            'description': 'Avatar is a 2009 American epic science fiction film directed, written, produced, and co-edited by James Cameron and starring Sam Worthington, Zoe Saldana,'
        },
        {
            'id': 2,
            'name': "Deadpool",
            'artists': ['Ryan Reynolds', 'Karan Soni', 'Ed Skrein', 'Michael Benyaer', 'Ayzee'],
            'genres': ['Action', 'Adventure', 'Comedy'],
            'bannerURL': "https://contentserver.com.au/assets/557638_p11098044_p_v8_af.jpg",
            'description': 'Deadpool is a 2016 American superhero film based on the Marvel Comics character of the same name. Distributed by 20th Century Fox, it is the eighth film in the '
        }]
    }
;

//Define Actions
const movieReducer = (state = initState, action) => {
    console.log("state:::",state);
    console.log("action:::",action);
    switch (action.type) {
        case 'ADD_MOVIE':
            return {
                ...state,
                movies: [...state.movies,action.payload]
            }
        case 'UPDATE_MOVIE':
            return state.movies.map((item, i) => {
                
                
                if(item.id == action.payload.id){
                    console.log("state.movies[i]:::",state.movies[i]);
                    console.log("action.payload:::",action.payload);
                    return {...action.payload}
                }else{
                    return {...item}
                }
            })
        default:
            return state
    }
}

export default movieReducer;