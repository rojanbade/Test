import React from "react";
import { YOUTUBE_DATA } from "../dummy";
import './youtube.css';

class Youtube extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterdata: null
        }
    }

    handleClick = () => {
        const filtered = YOUTUBE_DATA.filter((data) => {
            if (data.title === 'Esport') {
                return data;
            }
        })

        this.setState({
            filterdata: filtered
        })
    }

    render() {
        return (
            <div>
                <h1>Youtube</h1>
                {
                    this.state.filterdata ? this.state.filterdata.map((youtube) => {
                        return (
                            <div key={youtube.id} className="card">
                                <h3>{youtube.title}</h3>
                                <p>{youtube.channelName}</p>
                            </div>
                        )
                    }) : YOUTUBE_DATA.map((youtube) => {
                        return (
                            <div key={youtube.id} className="card">
                                <h3>{youtube.title}</h3>
                                <p>{youtube.channelName}</p>
                            </div>
                        )
                    })
                }

                <button onClick={this.handleClick}>Filter</button>
            </div>
        )
    }

}

export default Youtube;