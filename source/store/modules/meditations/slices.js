import { createSlice } from '@reduxjs/toolkit';

export const meditationsSlice = createSlice({
  name: 'meditations',
  initialState: {
    meditations: [
      {
        id: 12753,
        name: 'Introduction to meditation',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        sound: 'https://focusmind.net/dummy/voice.mp3',
        background: 'https://focusmind.net/dummy/as2.png',
      },
    ],
    meditation: {
      id: null,
      ms: 0,
      completed: false,
    },
  },
  reducers: {
    saveState: (state, action) => {
      state.meditation = action.payload;
    },
  },
});

export const { saveState } = meditationsSlice.actions;

export default meditationsSlice.reducer;
