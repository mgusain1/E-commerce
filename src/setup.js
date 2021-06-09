import React,{useState,useContext} from 'react';
import {useFetch} from './useFetch';
import {Link} from 'react-router-dom';

const url = 'https://course-api.com/javascript-store-products';
const mycontex = React.createContext();

const Setup =()=>{

    const {people,loading} = useFetch(url);
    const [count,setCount] = useState(0);

    const addit=(id)=>{    
        setCount(count+1);
    }

    const removeit=()=>{
        if(count===0){
            setCount(0);
        }
        else{
            setCount(count-1);
        }
        
    }
    return(
        <mycontex.Provider value={{people,addit,removeit}} >
            <h1>Our Commerce shop</h1>
            <h2>Cart:{count}</h2>
            {
                loading?
                <h2>...Loading</h2>:<Products people={people}/>
            }
        </mycontex.Provider>
    );
}



const Products = ()=>{

    const {people} = useContext(mycontex);
    const {addit} = useContext(mycontex);
    const {removeit} = useContext(mycontex);
     return (
    <section className='products'>
      {
      people.map((product) => {
          const {id,fields} = product;
          const {name} = fields;
        let {price} = fields;
        price = price/100;
        const image = fields.image[0].url;
        return(
            <article key={product.id} className="product">
            <img src={image} alt={name} />
             <h4>{name}</h4>
             <p>${price}</p>
             <button className="btn" onClick={()=>addit(id,image,name,price)}>Add</button>
             <button className="btn1" onClick={()=>removeit()}>Remove</button>
             <Link to={`/${product.id}`}>Learn More</Link>
        </article>
        );
      })
      }
    </section>
  )
}


export default Setup;
