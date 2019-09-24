import React, { Component } from "react"
import { connect } from "react-redux"
import { selectSong } from "../actions"

class SongList extends Component {

    renderList() { 
        return this.props.songs.map( (songs) => {
            return (
                <div className="item" key={songs.title} >
                    <div className="right floated content">
                        <button 
                        onClick={ () => this.props.selectSong(songs)}    
                        className="ui button primary">Select</button>
                    </div>
                    <div className="content">{songs.title}</div>
                </div>
            )
        })
    }
     
    render(){ 
        return (
            <div className="ui divided list"> 
                {this.renderList()}
            </div>
        )
    }
}

const mapStateToProps = ( state ) => { 
    return { songs : state.songs } // it kinda stores the fetched reducers into this own file .
}


export default connect(mapStateToProps, { selectSong })(SongList);