import React from 'react';
import styled from 'styled-components';


const SettingsContainer = styled.div`
margin: 20px;
margin-top: 200px;
border: 1px solid black;
background-color: white;
width: 200px;
height: 150px;
`

function Settings() {
    return (
        <SettingsContainer>
            <form>
                <label>
                    Email?
                    <input
                        name='Email?'
                        type="checkbox" />
                </label><br />
                <label>
                    Text?
                    <input
                        name='Text?'
                        type="checkbox" />
                </label><br />
                <input
                    name='content'
                    type="text"
                /><br />
                <div className="Payment-info">
                    <h3>Email</h3>
                    <input
                        type="text"
                        name="Email"
                    /><br />
                    <h3>Phone</h3>
                    <input
                        type="number"
                        name="Phone"
                    /><br />
                </div>

                <button>
                    Save
                </button>
            </form>
        </SettingsContainer>
    );
}

export default Settings;