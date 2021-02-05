import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends React.Component {

    renderList() {
        return this.props.songs.map(song => {
            return(
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button className="ui button primary" onClick={() => this.props.selectSong(song)}>
                            SELECT
                        </button>
                    </div>
                    <div className="content">
                        {song.title}
                    </div>
                </div>
            );
        })
    }

    render() {
        return(
            <div className="ui divided list">{this.renderList()}</div>
        );
    }
}

//The connect function uses this to link the state value to the props here
const mapStateToProps = (state) => {
    return {
        songs: state.songs
    };
}

//connect up to get access to 
export default connect(mapStateToProps, { selectSong })(SongList);