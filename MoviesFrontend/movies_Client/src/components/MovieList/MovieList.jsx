import { useEffect} from "react";
import MovieCard from "./MovieCard";
import {useDispatch, useSelector} from 'react-redux';
import { fetchMovies } from "../../Redux/movieSlice";

const MovieList = () => {
    const dispatch = useDispatch();
    const {items: movies, loading, error} = useSelector((state) => state.movies)

    useEffect(() => {
        dispatch(fetchMovies());
    }, [dispatch]);

    if (loading) return <h1>Cargando películas...</h1>;
    if (error) return <h1>Error al cargar las películas: {error}</h1>;

    return (
        <div className="movie-list">
            {movies && movies.content && movies.content.map((movie) => (
                <MovieCard
                key={movie.movieId}
                movieId={movie.movieId} // Pasamos el movieId al MovieCard
                title={movie.title}
                genre={movie.genre.name}
                price={movie.price}
                poster={movie.poster}
                />
            ))}
        </div>
    );
};

export default MovieList;