import axios from 'axios';
import {useState, useEffect} from 'react';

import { UserData, Props } from '../models/userModel';

const url = 'https://randomuser.me/api/?inc=gender,name,picture,email'

const initialValue:UserData = {
    gender:'',
    name:{
        first:'',
        last:'',
        title:''
    },
    picture:{
        large:'',
        medium:'',
        thumbnail:''
    },
    email:''
}

export const DataFetching = (props: Props) => {

    const [user, setUser] = useState<UserData>()
    const [error, setError] = useState<any>(false)

    useEffect(()=>{
        fetchData()
        return (()=>{
            setUser(initialValue)
        })
    }, [])

    const fetchData = () =>{
        axios.get(`${url}`)
        .then((value:any)=>{
            if(value.data){
                console.log(value.data.results)
                setUser(value.data.results[0])
            }
        })
        .catch((error)=>{
            console.log(error)
            setError(true)
        })
    }

    return (
        <div>
            {
                user ? (
                    <div>
                        <h3>{user?.name.first} {user?.name.last}</h3>
                        <p>{user?.email}</p>
                    </div>
                ) : 'No data!'
            }
        </div>
    );
};