import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchMovies, setQuery } from "../../Redux/searchSlice";
import MovieCard from "../MovieList/MovieCard";
import "./searchBar.css";

const SearchBar = () => {
    const dispatch = useDispatch();
    const { query, movie, loading, error } = useSelector((state) => state.search)

    const handleInputChange = async (e) => {
        const value = e.target.value;
        dispatch(setQuery(value)); // Actualiza el query en el estado global

        if (value.length > 3) {
            try {
                const response = await dispatch(searchMovies(value)).unwrap(); // Espera la resolución
                console.log('Películas encontradas:', response); // Verifica si obtienes los datos
            } catch (error) {
                console.error('Error al buscar películas:', error);
            }
        }
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Buscar peliculas..."
                value={query}
                onChange={handleInputChange}
            />
            {loading && <p>Cargando...</p>}
            {error && <p className="error">No se encontraron películas.</p>}
            <div className="movie-results">
                {movie && (
                    <MovieCard
                        key={movie.movieId}
                        movieId={movie.movieId}
                        title={movie.title}
                        genre={movie.genre.name}
                        price={movie.price}
                        poster={movie.poster}
                        discountPercentage={movie.discountPercentage}
                        stock={movie.stock}
                    />
                )}
            </div>
        </div>
    );
};

export default SearchBar;