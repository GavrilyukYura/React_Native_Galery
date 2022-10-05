import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getPictures } from "../../api";


const initialState = {
  pictures: [],
  selectedPictures: [],
  loading: false,
}

const picturesSlice = createSlice({
  name: 'pictures',
  initialState,
  reducers: {
    setSelectedPictures: (state, action) => {
      state.selectedPictures = action.payload;
    },
    clearSelectedPictures: (state) => {
      state.selectedPictures = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(init.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(init.fulfilled, (state, action) => {
      state.pictures = action.payload;
      state.loading = false;
    });
  },
});

export default picturesSlice.reducer;
export const { setSelectedPictures, clearSelectedPictures } = picturesSlice.actions;

export const init = createAsyncThunk('pictures/fetch', () => {
  return getPictures();
});