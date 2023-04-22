export default function ActorCard({actor}) {
    function rng(min, max) {
        return Math.round(Math.random() * (max - min) + min);
      }
    let num = rng(1, 400);
    return (
        <div style={{background: `url(https://picsum.photos/seed/${num}/300/300) no-repeat center center`}} className="card-backdrop">
           <div className="title-card">
            <h1>{actor}</h1>
           </div>
        </div>
        
    )
}