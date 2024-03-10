import { useEffect } from "react";
import { useDispatch} from "react-redux";
import { API_OPTIONS } from '../utils/constant';
import { addNowPlayingMovies } from '../utils/moviesSlice';


const useNowPlayingMovies = ()=>{
    const dispath = useDispatch()

const getNowPlayingMovies =  async ()=>{
  const data = await fetch("https://moviesverse1.p.rapidapi.com/upcoming-movies", API_OPTIONS )
  const json = await data.json();
  console.log(json.movies)
  dispath(addNowPlayingMovies(json.movies))
};

useEffect(()=>{
getNowPlayingMovies()
},[])

}




export default useNowPlayingMovies;