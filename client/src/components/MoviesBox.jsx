var React = require('react')
var MovieSelect = require('./MovieSelect')
var MovieDetail = require('./MovieDetail')

var MoviesBox = React.createClass({

  getInitialState:function(){
    return { movies: [] }
  },

  setCurrentMovie: function(movie){
    this.setState( {currentMovie: movie})
  },

  componentDidMount: function(){
    console.log("componentDidMount...")
    var url = 'http://netflixroulette.net/api/api.php?director=Quentin%20Tarantino'
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = function () {
      if (request.status === 200) {
        var data = JSON.parse(request.responseText)
        this.setState({movies: data})
      }
    }.bind(this)
    request.send(null);
  },

  render: function(){
    console.log("Rendering...")
    return(
      <div>
      <h2>Quentin Tarantino Movies</h2>
        <MovieSelect movies={this.state.movies} />
        <MovieDetail movie={this.state.currentMovie}/>
      </div>
    )
  }
})

module.exports = MoviesBox