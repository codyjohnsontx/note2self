// import { useState } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import { NewNote } from "./NewNote"
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"

type Note = {
  id: string
} & NoteData

type NoteData = {
  title: string
  markdown: string
  tags: Tag[]
}

type Tag = {
  id: string
  label: string
}

function App() {
  return (
    <Container class="my-4">
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/new" element={<NewNote />} />
        <Route path="/:id">
          <Route index element={<h1>Show</h1>} />
          <Route path="edit" element={<h1>Edit</h1>} />
        </Route>
        <Route path="/new" element={<h1>New</h1>} />
        <Route path="*" element={<Navigate to='/' />} />
      </Routes>
    </Container>
  );
}

export default App;
