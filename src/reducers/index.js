import { combineReducers } from "redux"


//static list of songs 

//for me the reducers are like state containers and 
//filters for the actions . the action folder meanwhile
//is more like a creator for the possible actions to do

const songReducer = () => { 
    return [
        {
            title : "No Scrubs",
            duration : "4:05"
        },
        {
            title : "Macarena",
            duration : "2:25"
        },
        {
            title : "All Star",
            duration : "3:11"
        },
        {
            title : "Zucchero",
            duration : "1:44"
        }
    ]
}

// Reducer for song selecter

const selectedSongReducer = (selectedSong = null , action) => {
    if(action.type === "SONG_SELECTED") {
        return action.payload
    }

    return selectedSong;
}



export default combineReducers({ 
    songs: songReducer,
    selectedSong : selectedSongReducer
})