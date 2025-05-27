import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Books from './Pages/Books.jsx'
import Root from './Layout/Root.jsx'
import Members from './Pages/Members.jsx'
import Login from './Pages/Login.jsx'
import Register from './Pages/Regster.jsx'
import Borrowed from './Pages/Borrowed.jsx'
import {Toaster} from 'react-hot-toast'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ProtectedRoute from './Routes/ProtecedRoute.jsx'
import AddBook from './Pages/AddBooks.jsx'
import MyBooks from './Pages/MyBooks.jsx'
const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Toaster/>
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Root />} >
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/books" element={<ProtectedRoute>
          <Books />
        </ProtectedRoute>} />
        <Route path="/members" element={<Members/>} />
        <Route path="/borrowed" element={<Borrowed/>} />
        <Route path="/login" element={<Login/>} />
        <Route path='/add-books' element={<AddBook/>}/>
        <Route path='/my-book' element={<MyBooks/>}/>
        {/* <Route path="*" element={<div>404 Not Found</div>} /> */}
        <Route path='/register' element={<Register/>} />
              </Route>
                  </Routes>
    </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
)
