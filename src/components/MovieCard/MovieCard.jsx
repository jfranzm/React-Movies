import { Link } from "react-router-dom";
import "./MovieCard.css"
export default function MovieCard(props) {
    return (
        <div className="card-template">
            <Link to={`/movies/${props.movie.title}`} className="movie-links">
                <div style={{'background': `url(${props.movie.posterPath}) no-repeat center center`, WebkitBackgroundSize: "cover"}} className="card-backdrop">
                    <div className="title-card">
                        <h1>{props.movie.title}</h1>
                        <h4>Released: {props.movie.releaseDate}</h4>
                    </div>
                </div>
            </Link>
        </div> 
    )
}