import React, { useState, useEffect } from 'react';
import {useFetch} from './useFetch';

import {useParams} from 'react-router-dom';
const url = 'https://course-api.com/javascript-store-products';

const Cart=()=>{
     const {leo} = useParams();
     const {people} = useFetch(url);
    const [person,setPerson] = useState([]);

    useEffect(()=>{
        const newpop = people.filter((pe)=>pe.id===leo);
        console.log(leo);
        console.log(newpop);
        setPerson(newpop);
    });
    console.log(person);
    return(
        <section className="products1">
        {
            person.map((po)=>{
                const {fields,id} = po;
                const {name} = fields;
                let {price} = fields;
                price = price/100;
                const image = fields.image[0].url;
                return(
            <article key={id} className="product1">
            <img src={image} alt={name} />
             <h4>{name}</h4>
             <span>${price}</span>
        </article>
        );
            })
        }
        </section>
    );
}

export default Cart;