import React, { Component } from 'react';
import API from '../API';
import Party from '../components/Party';

class ViewParty extends Component {
    state = {
        isLoading: true,
        party: {}
    }

    componentDidMount() {
        const id = this.props.match.params.id;

        API.getParty(id)
            .then(party => {
                this.setState({
                    isLoading: false,
                    party: party.data
                })
            })
            .catch(error => console.log(`Error: ${error}`));
    }

    render() {
        return (
            <div className="dashboard">
                <div className="edit-board">
                    {
                        this.state.isLoading ?
                        <h2>Loading party...</h2> :
                        <Party key={ this.state.party[0].id} party={ this.state.party[0] } />
                    }
                </div>
            </div>
        )
    }
}

export default ViewParty;