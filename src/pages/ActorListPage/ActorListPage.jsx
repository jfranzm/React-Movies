import ActorCard from "../../components/ActorCard/ActorCard"
import './ActorListPage.css'
export default function ActorsListPage({movies}) {
    const actorList = movies.reduce((actors, movie) => {
        movie.cast.forEach((actor) => {
            if(!actors.includes(actor)) actors.push(actor);
        });
        return actors;
    }, [])
    return (
        <div className="container">
            {actorList.map((actor) => {
                return <ActorCard key={actor} actor={actor} />
            })}
        </div>
    )
}