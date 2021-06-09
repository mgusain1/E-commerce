import React, {useState,useEffect} from 'react';

export const useFetch =(url)=>{

    const [loading,setLoading] = useState(true);
    const [people,setPeople] = useState([]);

    const setit = async()=>{
        const response = await fetch(url);
        const people = await response.json();
        setPeople(people);
    }

    const getit=()=>{
        setLoading(false);
    }
    useEffect(()=>{
        setit();
        setTimeout(()=>{
            getit();
        },2000);
    },[url])
    return {loading,people};
};

