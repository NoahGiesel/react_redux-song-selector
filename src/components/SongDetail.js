import React from "react"

import {connect} from "react-redux"

const SongDetail = ({mySelectedSong}) => {
    if(mySelectedSong == null){
        return <div>Select a song</div>
    }
    return (
        <div>
            <h2>Details for: </h2>
            <h5>{mySelectedSong.title}</h5>
            <p>{mySelectedSong.duration}</p>
        </div>    
    )
}



const mapStateToProps = state =>{
    return { mySelectedSong : state.selectedSong}
}

export default connect(mapStateToProps)(SongDetail)