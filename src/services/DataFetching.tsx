import axios, { AxiosResponse } from 'axios';
import {useState, useEffect} from 'react';

const url = 'https://jsonplaceholder.typicode.com/'

type Props = {
    filter:string
};

type PostsData = {
    id: number,
    title: string,
    body: string,
    userId: number
}

export const DataFetching = (props: Props) => {

    const [posts, setPosts] = useState<any>()

    useEffect(()=>{
        const fetchData = () =>{
            axios.get(`${url}${props.filter}`)
            .then((value:AxiosResponse)=>{
                console.log(value.data)
                setPosts(value.data)
            })
        }
        fetchData()
    }, [])

    return (
        <div>
            <h3>{posts?.name}</h3>
            <p>{posts?.email}</p>
        </div>
    );
};