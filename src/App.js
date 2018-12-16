import React, { Component } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Movies from './components/Movies'
import Movieform from './components/Movieform'





class App extends Component {

constructor() {
  super()
  this.state = {
    movieList: [],
    name: "",
    director: "",
    year: "",
    poster_url: "",

  }
}

handleName(e) {
  this.setState({name: e.target.value})
}
handleSubmit(e) {
  alert("Thank you for your submission !!")
  e.preventDefault()
}

async componentDidMount() {
  let responce = await fetch("https://galvanize-omdb.herokuapp.com/")
  let json = await responce.json()
  console.log("jsonlog", json)
  this.setState({
    movieList: json
  })
}

  render() {
    const pushMovies = this.state.movieList.map((movie, index) =>{
      return <Movies key={index} info={movie} />
    })
    return (
      <div className="App">
          <Navbar />
        <div className="pageWrapper">  
          <Movieform name={this.state.getName} director={this.state.getDirector} year={this.state.getYear} poster_url={this.state.getPoster} />
          {pushMovies}         
        </div>
      </div>
    );
  }
}

export default App
