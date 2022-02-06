import axios from 'axios';
import {useState, useEffect} from 'react';

import { UserData, FetchingData} from '../models/userModel';


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

export const DataFetching = (props: FetchingData) => {

    const [user, setUser] = useState<UserData>()
    const [error, setError] = useState<any>(false)

    useEffect(()=>{
        const fetchData = async () =>{
            try{
                const data = await axios.get(`${props.url}`)
                setUser(data.data.results[0])
            }
            catch(error){
                console.log(error)
                setError(true)
            }
        }
        fetchData()
        return (()=>{
            setUser(initialValue)
        })
    }, [props.url])

    return (
        <div>
            {
                user && !error ? (
                    <div className='user'>
                        <img src={user.picture.thumbnail} alt="user pfp"/>
                        <div className='userInfo'>
                            <h3>{user?.name.first} {user?.name.last}</h3>
                            <p>{user?.email}</p>
                        </div>
                    </div>
                ) : 'No data yet!'
            }
        </div>
    );
};