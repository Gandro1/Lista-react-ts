import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/style.css'
import { TodoApp } from './components/todoApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TodoApp/>
  </StrictMode>,
)
