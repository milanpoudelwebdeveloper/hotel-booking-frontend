import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ISearch {
  destination: string
  date: {
    startDate: Date
    endDate: Date
    key: 'selection'
  }[]
  options: {
    adult: number
    children: number
    rooms: number
  }
}

const initialState = {
  destination: '',
  date: [{ startDate: new Date(), endDate: new Date(), key: 'selection' }],
  options: { adult: 0, children: 0, rooms: 0 },
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    searchQuery: (state, action: PayloadAction<ISearch>) => {
      return { ...state, ...action.payload }
    },
  },
})

export const { searchQuery } = searchSlice.actions

export default searchSlice.reducer
