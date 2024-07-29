import { useEffect,useState } from "react";


function useCurrencyInfo(currency){
    //Taking here {}Null as kuch values ho sure me error na aaye
    const [data,setData]=useState({});

    useEffect(()=>{
            fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`)
            .then((response)=>response.json())
            .then((response)=>setData(response[currency]))
            .catch((error) => console.error('Error fetching data:', error));
    },[currency])
    //currency jab jab chnage ho tab tab ye api call ho
    console.log(data)
    return data;
}

export default useCurrencyInfo;

//NOTES
//Fetch kiyee wo string me aata hai usko json me convert kiyee first then se
//then me callback fn jaayega, can even use ()=>{} but fir return karna padega directly use ()=> for one liner
//2nd then me json me convert honee ke baad values ko set bhi to karna hoga na meri jaan
//response json hai usme se apni required currency ko do tarah se access kar skate haii
//1st by . method and 2nd by [] so response.${currency} shii nhii rehta so written response[cuurency]
//as cuurency is variable, aur ham yaha currency key ke saare cuurency ko access akr rahe hai
//sab values ko alag alag use karnge 

// now return karna padega na meri jaan app.jsx ko kyunki sab kuch whii se manage ho raha hai
//so question is what to return? and ans is pura hi retun akr do pura function

//AND THIS IS HOW A CUSTOM HOOK IS CREATED