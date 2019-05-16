import React, { Component } from 'react';
import { connect } from 'react-redux'
import mapReduxStateToProps from '../../Modules/mapReduxStateToProps'

class AddArtist extends Component {
    constructor(props){
        super(props);

        this.state = {
            enteredName :'',
        }
    }
    changeName = (event) => {
        console.log(event);
        const inputValue = event.target.value;
        this.setState({
            enteredName : inputValue,
        })
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    placeholder="Artist Name"
                    onChange={this.changeName}
                />
            </div>
        )
    }
}

export default connect(mapReduxStateToProps)(AddArtist);