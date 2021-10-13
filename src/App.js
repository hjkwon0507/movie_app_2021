import React from "react";
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () => { // 비동기 함수, 기다려
    const {
      data: {
        data: {movies}
      } 
    }= await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating") // axios를 기다려야 해
    this.setState({ movies, isLoading: false })
  }
  async componentDidMount(){
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <div>
        {isLoading
          ? "Loading..." 
          : movies.map(movie => (
            <Movie 
              key={movie.id}
              id={movie.id} 
              year={movie.year} 
              title={movie.title} 
              summary={movie.summary} 
              poster={movie.medium_cover_image}
            />
        ))}
      </div>
    );
  }
}

export default App;
