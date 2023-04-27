const getPosterURL = (posterpath) =>{
    return `https://www.themoviedb.org/t/p/w440_and_h660_face${posterpath}`
}

const MovieCard = ({ poster_path, name, first_air_date, vote_average})=>{
    return <div className="flex flex-col pl-5  gap-2">
        <img src={getPosterURL(poster_path)} alt={name} className="h-[225px] w-[150px] shadow-sm rounded-md" />
        <div className="flex flex-col w-[150px] px-3">
            <h1 className="font-bold">{name}</h1>
            <p className="font-semibold text-slate-500">{first_air_date}</p>
            <p className="font-semibold text-slate-500">Rating: {vote_average}</p>
        </div>
    </div>
}

export default MovieCard;