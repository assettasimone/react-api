export default function ActorCard({ actors }) {


    return (
        <>
            {
                actors.map(actor => (
                    <div key={actor.id} className="col-3 mb-4">
                        <div className="card"  >
                            <div className='object-fit-cover'
                                style={{
                                    backgroundImage: `url( ${actor.image})`,
                                    height: '250px',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }} ></div>

                            <div className="card-body">
                                <h3 className="card-title">{actor.name}</h3>
                                <p className='card-text'><i class="bi bi-cake"></i> Birth: {actor.birth_year}</p>
                                <p className='card-text'> {actor?.death_year ? <><i className="bi bi-x-lg"></i> Death: {actor.death_year}</> : 'Still Alive'}</p>
                            </div>
                        </div>
                    </div>
                ))
            }

        </>
    )


}