import { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const movies = [
    {
        id: 1,
        name: "Avengers: Endgame",
        genre: "Action / Adventure",
        rating: "8.4",
        image: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg"
    },
    {
        id: 2,
        name: "Interstellar",
        genre: "Sci-Fi / Drama",
        rating: "8.7",
        image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBv1.jpg"
    },
    {
        id: 3,
        name: "Joker",
        genre: "Crime / Drama",
        rating: "8.1",
        image: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"
    },
    {
        id: 4,
        name: "The Batman",
        genre: "Action / Crime",
        rating: "7.8",
        image: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg"
    }
];

const events = [
    {
        id: 1,
        name: "Live Music Concert",
        category: "Music",
        image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=600"
    },
    {
        id: 2,
        name: "Comedy Night",
        category: "Comedy",
        image: "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?w=600"
    },
    {
        id: 3,
        name: "Drama & Theatre",
        category: "Cinemas",
        image: "https://images.unsplash.com/photo-1503095396549-807759245b35?w=600"
    }
];

function Home() {
    const [search, setSearch] = useState("");

    const filteredMovies = movies.filter((movie) =>
        movie.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="home-page">

            {/* Hero Section */}
            <section className="home-hero">
                <div className="hero-content">
                    <span className="hero-tag">WELCOME TO PICKMYSHOW</span>

                    <h1>
                        Your Show,
                        <span> Your Experience.</span>
                    </h1>

                    <p>
                        Discover movies, book your favourite shows,
                        and experience unforgettable entertainment.
                    </p>

                    <div className="hero-buttons">
                        <Link to="/Movies" className="hero-btn">
                            Explore Movies
                        </Link>

                        <Link to="/Cinemas" className="hero-outline-btn">
                            Explore Cinemas
                        </Link>
                    </div>
                </div>
            </section>

            {/* Search Section */}
            <section className="home-search">
                <h2>Find Your Next Experience</h2>
                <p>Search for your favourite movies.</p>

                <div className="search-box">
                    <span>⌕</span>
                    <input
                        type="text"
                        placeholder="Search movies by name..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <Link to="/Movies">Explore</Link>
                </div>
            </section>

            {/* Featured Movies */}
            <section className="home-section">
                <div className="section-heading">
                    <div>
                        <span className="section-label">NOW SHOWING</span>
                        <h2>Featured Movies</h2>
                        <p>Discover movies worth watching.</p>
                    </div>

                    <Link to="/Movies" className="view-all">
                        View All →
                    </Link>
                </div>

                <div className="movie-grid">
                    {filteredMovies.length > 0 ? (
                        filteredMovies.map((movie) => (
                            <div className="home-movie-card" key={movie.id}>
                                <div className="movie-image">
                                    <img
                                        src={movie.image}
                                        alt={movie.name}
                                    />
                                    <span className="movie-rating">
                                        ★ {movie.rating}
                                    </span>
                                </div>

                                <div className="movie-info">
                                    <h3>{movie.name}</h3>
                                    <p>{movie.genre}</p>

                                    <Link to="/Movies" className="book-btn">
                                        Book Tickets
                                    </Link>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="no-movies">No movies found.</p>
                    )}
                </div>
            </section>

            {/* Trending Section */}
            <section className="trending-section">
                <div className="trending-content">
                    <span className="section-label">TRENDING NOW</span>
                    <h2>Entertainment That Brings Us Together</h2>
                    <p>
                        From blockbuster movies to exciting live events,
                        find everything you love in one place.
                    </p>

                    <Link to="/Movies" className="hero-btn">
                        Discover More
                    </Link>
                </div>
            </section>

            {/* Upcoming Events */}
            <section className="home-section events-section">
                <div className="section-heading">
                    <div>
                        <span className="section-label">EXPERIENCE LIVE</span>
                        <h2>Upcoming Events</h2>
                        <p>Make memories beyond the movies.</p>
                    </div>

                    <Link to="/Cinemas" className="view-all">
                        Explore More →
                    </Link>
                </div>

                <div className="event-grid">
                    {events.map((event) => (
                        <div className="event-card" key={event.id}>
                            <img src={event.image} alt={event.name} />

                            <div className="event-info">
                                <span>{event.category}</span>
                                <h3>{event.name}</h3>
                                <Link to="/Cinemas" className="explore-btn">
                                    Explore Event →
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="why-section">
                <span className="section-label">WHY PICKMYSHOW</span>
                <h2>Everything You Love, One Destination</h2>

                <div className="why-grid">
                    <div className="why-card">
                        <div>🎬</div>
                        <h3>Easy Booking</h3>
                        <p>Book your favourite movies and shows easily.</p>
                    </div>

                    <div className="why-card">
                        <div>🔒</div>
                        <h3>Secure Payments</h3>
                        <p>Enjoy a simple and secure booking experience.</p>
                    </div>

                    <div className="why-card">
                        <div>🎟️</div>
                        <h3>Best Experiences</h3>
                        <p>Discover entertainment for every occasion.</p>
                    </div>
                </div>
            </section>

            {/* Bottom Banner */}
            <section className="home-banner">
                <h2>Ready for Your Next Show?</h2>
                <p>Don't miss out on amazing movies and live experiences.</p>
                <Link to="/Movies">Book Your Tickets</Link>
            </section>

        </div>
    );
}

export default Home;