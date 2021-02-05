import React from 'react';
import { connect } from 'react-redux';

const SongDetail = (props) => {

    if(!props.selectedSong) return <div><h3>Select a song on the left.</h3></div>
    
    return(
        <div>
            <h3>Details for:</h3>
            <br />
            <p>Title: {props.selectedSong.title}</p>
            <p>Artist: {props.selectedSong.artist}</p>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { selectedSong: state.selectedSong };
}

export default connect(mapStateToProps)(SongDetail);