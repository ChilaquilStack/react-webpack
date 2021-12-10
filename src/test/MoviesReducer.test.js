import moviesReducer, { MOVIES }  from '../reducers/Movies.js'
import { Movie, Movie as movie} from  '../types/index.js'

describe("Test Reducer Movies", () => {

    it("Should return the initial state", () => {
        expect(moviesReducer(undefined, {})).toEqual(
            {
                movies: [], 
                error: '', 
                movie,
            }
        )
    })

    it('Add a movie', () =>  {
        
        const prevState = { 
            movies: [], 
            error: '', 
            movie
        };

        const newMovie = {
            title: 'some movie',
            poster_path: 'https://www.someurl.com',
            genres: ['comedi'],
            runtime: 90,
            overview: 'some overview',
            release_date: '2021',
        }

        expect(moviesReducer(prevState, MOVIES.ADD({movie: newMovie})))
        .toEqual({
            error: '',
            movie,
            movies: [newMovie]
        })
        
    })

})