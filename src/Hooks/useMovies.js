import { useState, useEffect } from "react"
import MoviesResult from '../../mocks/movieResults.json'

const key = '17cfee0f'
const url = `https://www.omdbapi.com/?apikey=`+{key}+`&s=`

function getMovies(){
    const [data,setData] = []
    return data
}

function useMovies(){

    const movs = MoviesResult?.Search
    
    const [movies,setMovies] = useState(movs)

    const mappedMovies = movies?.map((mov) => ({
        id: mov.imdbID,
        title: mov.Title,
        year: mov.Year,
        poster: mov.Poster,
    }))
    return{movies: mappedMovies}
}

export { useMovies }