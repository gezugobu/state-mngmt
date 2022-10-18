
//Nav.js
import React, {useContext} from "react";
import { MovieListContext } from "./MovieListContext";
    const Nav = ()=> {
    const [movies,setMovies] = useContext(MovieListContext);
    return (
    <div className="navbar">
        <h5>Gezu Ed</h5>
        <h5>List of Movies: {movies.length}</h5>
    </div>
    )
}

export default Nav;