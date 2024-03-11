import { createReducer,on } from "@ngrx/store";
import { AddBook,RemoveBook } from "./book.action";
import { Book } from "../models/book";
const initialState:Book[]=[]

export const BookReducer=createReducer(
    initialState,
    on(AddBook,(state,{id,title,author})=>{
        console.log('inside reducer addBook')
        return [...state,{id,title,author}]}),
    on(RemoveBook,(state,{bookId})=>state.filter(book=>book.id!==bookId))
)