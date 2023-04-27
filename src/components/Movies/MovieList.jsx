import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";

const  MovieList = () =>{
    const [movies,setMovies] = useState([])

    useEffect(()=>{
        axios.get('https://api.themoviedb.org/3/tv/popular?api_key=0f01cf1b9c94cc1fec1e6d03f64956d5&language=enUS&page=1').then(response=>{
            setMovies(response.data.results)
        }).catch(err=>(console.log(err)))
    },[])

    return <div className="flex pb-10 px-10 overflow-x-auto">
            {movies.map((movie,index) => {
                    return <MovieCard key={index} {...movie} />
            })}
    </div>
}

export default MovieList

