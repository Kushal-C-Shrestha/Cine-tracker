import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

interface MoviesState {
    selectedMovie: any | null
    watchlistSelectedMovie: any | null
}

const initialState: MoviesState = {
    selectedMovie: null,
    watchlistSelectedMovie: null,
}

const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        setSelectedMovie: (state, action: PayloadAction<any | null>) => {
            state.selectedMovie = action.payload
        },
    },
})

export const { setSelectedMovie } = movieSlice.actions
export default movieSlice.reducer
