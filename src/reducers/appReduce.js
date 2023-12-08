import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  editProfile: false,
  changePass: false,
  openModal: false,
  collapse: true,
  answered: false,
  tabs: [],
  call: false,
  formId: null,
};

const appReducer = createSlice({
  name: "app",
  initialState,
  reducers: {
    setEditProfile: (states, action) => {
      states.editProfile = action.payload;
    },
    setChangePass: (states, action) => {
      states.changePass = action.payload;
    },
    setOpenModal: (states, action) => {
      states.openModal = action.payload;
    },
    setCollapse: (states, action) => {
      states.collapse = action.payload;
    },
    setAnswered: (states, action) => {
      states.answered = action.payload;
    },
    setTab: (states, action) => {
      states.tabs = states.tabs.concat(action.payload);
    },
    setDeleteTab: (states, action) => {
      states.tabs = states.tabs.filter((item) => item.id !== action.payload);
    },
    setCall: (states, action) => {
      states.call = action.payload;
    },
    setFormId: (states, action) => {
      states.formId = action.payload;
    },
  },
});

export const {
  setEditProfile,
  setChangePass,
  setOpenModal,
  setCollapse,
  setAnswered,
  setTab,
  setCall,
  setDeleteTab,
  setFormId,
} = appReducer.actions;
export default appReducer.reducer;
