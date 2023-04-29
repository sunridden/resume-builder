import React from "react";

class Job extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Place</h1>
                <h3>Role</h3>
                <p>Location</p>
                <p>Date</p>
                <ul>{this.props.data.map(item => (
                    item.jobInfo.map(attribute => (
                        <div>
                            <li>{attribute}</li>
                        </div>
                    ))
                ))}
                    
                </ul>
            </div>
        )
    }
}