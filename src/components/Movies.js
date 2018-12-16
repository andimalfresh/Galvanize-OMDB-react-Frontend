import React from "react"

const Movies = props => {
    return (
        <div className="movieWrapper">
            <div className="movieListWrapper">
                <ul className="movieList">
                    <li className="titleText">{props.info.title}</li>
                    <li className="yearText"> {props.info.year}</li>
                    <li className="directorText"> {props.info.director}</li>
                    <li><img className="movieImg" alt="Movie Poster for Title" src={props.info.poster_url} /></li>
                </ul>
            </div>
        </div>
    )

}



export default Movies