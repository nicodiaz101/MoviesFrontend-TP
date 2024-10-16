import Navbar from '../components/Navbar'
import MovieList from '../components/MovieList/MovieList'

const Home = () => {
    const movies = [ // Ejemplo de movies que se pueden agregar
        {
            id: 1,
            title: "El Padrino",
            genre: "Drama",
            poster: "src/img/elPadrino.jpg",
            description: "A great movie",
            price: 1999
        },
        {
            id: 2,
            title: "Titanic",
            genre: "Drama",
            poster: "src/img/TITANIC.jpg",
            description: "Another great movie",
            price: 2499
        },
        {
            id: 3,
            title: "Interstellar",
            genre: "Sci-fi",
            poster: "src/img/interstellar.jpg",
            description: "Another great movie!!",
            price: 2199
        }
    ];

    return (
        <>
            <Navbar></Navbar>
            <MovieList movies={movies}></MovieList>
        </>
    )
}

export default Home;