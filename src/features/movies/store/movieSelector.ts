import type { RootState } from '@/app/store'

export const selectSelectedMovieId = (state: RootState) => state.movie.selectedMovieId
