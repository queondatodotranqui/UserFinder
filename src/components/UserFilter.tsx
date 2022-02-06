import React from 'react';
import { PropsGenderFilter } from '../models/userModel';

const UserFilter = (props:PropsGenderFilter) => {

    return (
        <div>
            <button onClick={()=>{
                props.handleGender('male')
            }}>Male</button>
            <button onClick={()=>{
                props.handleGender('female')
            }}>Female</button>
        </div>
    );
};

export default UserFilter;