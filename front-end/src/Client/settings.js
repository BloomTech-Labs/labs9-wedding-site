import React from 'react';
import styled from 'styled-components';


const SettingsContainer = styled.div`
margin: 20px;
margin-top: 200px;
border: 1px solid black;
background-color: white;
display:flex;
justify-content: center;
align-items: center;
width: 700px;
height: 450px;
`

function Settings() {
    return (
        <SettingsContainer>
            <form>
                <div className="Payment-info">
                    <label>Email
                    <input
                            type="text"
                            name="Email"
                        />
                    </label><br />
                    <label>Phone
                    <input
                            type="number"
                            name="Phone"
                        />
                    </label>
                </div>

                <div className="Payment-info">
                    <input
                        type="text"
                        name="Partner Name"
                        placeholder="Partner Name"
                    /><br />
                    <input
                        type="text"
                        name="Partner Name"
                        placeholder="Partner Name"
                    />
                </div>

                <div>
                    <label>
                        Email?
                    <input
                            name='Email?'
                            type="checkbox" />
                    </label>
                    <label>
                        Text?
                    <input
                            name='Text?'
                            type="checkbox" />
                    </label>
                </div>
                <div>
                    <label>Wedding Date
                    <input
                            name="Wedding Date"
                            type="date"
                        />
                    </label>
                </div>

                <div className="Payment-info">
                    <label>Old Password
                    <input
                            type="old password"
                            name="password"
                        />
                    </label><br />
                    <label>New Password
                    <input
                            type="new password"
                            name="passworde"
                        />
                    </label><br />
                </div>
                <input
                    type="text"
                    name="Wedding Location"
                    placeholder="Wedding Location"
                /><br />
                <button>
                    Save
                </button>
            </form>
        </SettingsContainer>
    );
}

export default Settings;