import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        items: []
    }, 
    reducers: {
        addContact(state, {payload}) {
state.items = [...state.items, payload]
        },
        deleteContact(state, { payload }) {
            
        }
    }
}

)
export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;