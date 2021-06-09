import React,{useEffect, useState} from 'react';
import {useFetch} from './useFetch';

const Mycart =()=>{
    const[firstName,setFirstName] = useState('');
  const[phone,setPhone] = useState('');
  const[email,setEmail] = useState('');
  const[people,setPeople] = useState([]);
  const[password,setPasword] = useState('');

  const handle=(e)=>{
    e.preventDefault();
    if(firstName&&phone&&email&&password){
      const person = {id:new Date().getTime().toString(),firstName,phone,email,password};
    setPeople((people)=>{
      return [...people,person];
    })
    setFirstName('');
    setPhone('');
    setEmail('');
    setPasword('');
    }
    else{
      console.log("thats empty");
    }
  }

  const clickit=(e)=>{
    setFirstName(e.target.value);
  }


  const nickit =(e)=>{
    setEmail(e.target.value);
  }

  return (
    <>
    <form className="form" onSubmit={handle}>
      <div className="form-control">
        <label htmlFor="firstName">Name: </label>
        <input type="text" name="firstName" id="firstName" value={firstName} onChange={(e)=>clickit(e)}/>
      </div>
      <div className="form-control">
        <label htmlFor="phoneno.">Phone no.: </label>
        <input type="text" name="phoneno." id="phonenp." value={phone} onChange={(e)=>setPhone(e.target.value)}/>
      </div>
      <div className="form-control">
        <label htmlFor="email">Email: </label>
        <input type="text" name="email" id="email" value={email} onChange={(e)=>nickit(e)}/>
      </div>
      <div className="form-control">
        <label htmlFor="password">Password: </label>
        <input type="password" name="password" id="password" value={password} onChange={(e)=>setPasword(e.target.value)}/>
      </div>
      <button type="submit">Add Me</button>
    </form>
    
    <h2>Your Credentials are</h2>
    {
      people.map((person)=>{
        const{id,firstName,phone,email,password} = person;
        return(
          <div className="item" key={id}>
            <h3>{firstName}</h3>
            <p></p>
            <h3>{phone}</h3>
            <p></p>
            <h4>{email}</h4>
            <p></p>
            <h4>Password is _____</h4>
          </div>
        );
      })
    }
    </>
  );
   
}

export default Mycart;