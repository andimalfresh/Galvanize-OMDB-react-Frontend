import React from "react"


const Movieform = props => {
    


    return (
        <div className="movieInputFormWrapper">
            <form className="movieInputForm" onSubmit={props.handleSubmit}>
                <label>
                    Title:
                </label>
                    <input type="text" name="name" onChange={props.getName} />
                <label>
                    Director:
                </label>
                    <input type="text" name="director" onChange={props.getDirector} />
                <label>
                    Year Released: 
                </label>
                    <input type="text" name="year" onChange={props.getYear} />
                <label>
                    Poster Url: 
                </label>
                    <input type="text" name="poster_url" onChange={props.getPoster} />
                    <input type="submit" onClick={props.postMovie} value="Submit" />
            </form>
        </div>
    )
}




export default Movieform