import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        {
            title: 'Beamer Boy',
            artist: 'Lil Peep'
        },
        {
            title: 'Smells Like Teen Spirit',
            artist: 'Nirvana'
        },
        {
            title: 'Ride',
            artist: 'Fraxiom'
        },
        {
            title: 'Shed So Many Tears',
            artist: 'Tupac'
        },
        {
            title: 'Darkness',
            artist: 'Katie Dey'
        },

    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED') return action.payload;
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})