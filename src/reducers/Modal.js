import { createAction, createReducer } from "@reduxjs/toolkit"

export const MODAL = {
    OPEN: createAction('modal/open'),
    CLOSE: createAction('modal/close'),
}

const initialState = {
    title: '',
    isOpen: false,
}

const ModalReducer = createReducer(initialState, builder => {
    builder
        .addCase(MODAL.OPEN.toString(), (state, action) => ({
            isOpen: true,
            title: action.payload.title
        }))
        .addCase(MODAL.CLOSE.toString(), (state, action) => ({
            isOpen: false,
            title: ''
        }))
});

export default ModalReducer;