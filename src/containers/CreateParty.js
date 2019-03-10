import React, { Component } from 'react';
import PartyForm from './PartyForm';

class CreateParty extends Component {
    state = {
        creating: false,
        party: {
            name: '',
            hqAdress: '',
            logoUrl: ''
        }
    };

    render() {
        return (
            <div>
                <h2>Create Party Page</h2>
                
                <PartyForm party={this.state.party} />
            </div>
        );
    }
}

export default CreateParty;