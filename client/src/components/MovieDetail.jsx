var React = require('react')

var MovieDetail = function(props){
  if(!props.movie)
    return(
      <h4>No movie selected yet!</h4>
    )
  return(
    <div>
      <p>Runtime: {props.movie.runtime}</p>
      <p>Summary: {props.movie.summary}</p>
      <p>Cast: {props.movie.show_cast}</p>
      <p>Release Year: {props.movie.release_year}</p>
    </div>
  )
}

module.exports = MovieDetail