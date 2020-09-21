import React from 'react';
import "./Note.css";

class Note extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inScale: false,
            fret: 0
        }
    }

    handleClick = () => {
        this.setState({ inScale: !this.state.inScale });
    }

    render() {
        return (
            <div className="Note">
                <div className={this.props.notes.includes(this.props.abs) ? "in" : "out"}>
                    {/* <h3>{this.props.notes}</h3> */}
                    <h3>{this.props.symbol}</h3>
                    {/* <h3>{this.props.value}</h3> */}
                    {/* <h3>{this.props.abs}</h3> */}
                    {/* <button type="button" onClick={this.handleClick}></button> */}
                </div>
            </div>
        )
    }
}
export default Note;