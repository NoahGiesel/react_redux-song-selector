import React from "react"

import SongList from "./SongList"
 import SongDetail from "./SongDetail"
//functional comp. because use of Redux
//store State into Redux !



const App = () => {
    return (
        <div className="ui container grid ">
            <div className="ui row"> 
                <div className="column eight wide"> 
                    <SongList/>
                </div>
                <div className="column eight wide"> 
                    <SongDetail />
                </div>
            </div>
        </div>
    )
}


export default App;