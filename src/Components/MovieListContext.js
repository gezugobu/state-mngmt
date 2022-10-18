
//MovieListContext.js
import React,{useState,createContext} from "react";
export const MovieListContext= createContext();
export const MovieProvider = (props)=>{
    const [movies,setMovies] = useState([
        {
        name: 'HarryPotter',
        price: '$10',
        id: 23124,
    },
    {
        name: 'Game of Thrones',
        price: '$10',
        id: 2566124,
    },
    {
        name: 'Incepcion',
        price: '$10',
        id: 23524
    }
    ]); 
    return(
    <MovieListContext.Provider value={[movies,setMovies]}>
        {props.children}
    </MovieListContext.Provider>
    );
}