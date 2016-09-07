var React = require('react')

var MovieSelect = React.createClass({

  getInitialState: function(){
    return { selectedIndex: null }
  },

  // handleChange: function(event){
  //   var newIndex = event.target.value
  //   this.setState( {selectedIndex: newIndex} )
  //   this.props.setCurrentMovie( this.props.movies[newIndex] )
  // },

  render: function(){
    var movies = this.props.movies.map(function(movie, index){
      return(
        <img src={movie.poster} value={index} key={index}/>
      )
    }.bind(this))

    return(
      <div value={this.state.selectedIndex} onChange={this.handleChange}>
        {movies}
      </div>
    )
  }
})

module.exports = MovieSelect