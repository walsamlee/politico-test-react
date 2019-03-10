import React, { Component } from 'react';

class PartyForm extends Component {
    state = {
        party: {}
    };

    valueChange = (event) => {
        const { name, value } = event.target;
        
        this.setState((prevState) => ({
            party: {
                ...prevState.party,
                [name]: value
            }
        }))
    }

    formSubmit = (event) => {
        event.preventDefault();

        console.log(this.state.party);
    }

    render() {
        return (
            <div className="dashboard">

                <div className="signup-form">

                    <h2>Party Form</h2>

                    <form onSubmit={this.formSubmit}  id="create-party" name="sign-up">
                        <table className="form-table">
                            <tbody>
                                <tr>
                                    <td className="label">
                                        
                                    </td>
                                    <td>
                                        <input onChange={this.valueChange} id="party-logo" type="file" accept="image/*" name="logoUrl" required/>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="label">
                                        
                                    </td>
                                    <td>
                                        <input onChange={this.valueChange} id="party-name" type="text" name="name" placeholder="Party Name" required/>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="label">
                                        
                                    </td>
                                    <td>
                                        <input onChange={this.valueChange} id="part-hq-address" type="text" name="hqAddress" placeholder="HQ Address" required/>
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>
                                        <input type="submit" className="btn btn-cart" value="Save" />
                                        <input type="reset" className="btn btn-cart" value="Reset" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </div>
            </div>
        );
    }
}

export default PartyForm;