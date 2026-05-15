import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

interface MoviesState {
    selectedMovieId: number | null
    watchlistSelectedMovieId: number | null
}

const initialState: MoviesState = {
    selectedMovieId: null,
    watchlistSelectedMovieId: null,
}

const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        setSelectedMovieId: (state, action: PayloadAction<number | null>) => {
            state.selectedMovieId = action.payload
        },
    },
})

export const { setSelectedMovieId } = movieSlice.actions
export default movieSlice.reducer
