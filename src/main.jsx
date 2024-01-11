import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { 
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route, } from 'react-router-dom'
import AddBook from './components/AddBook.jsx'
import Index from './components/Index.jsx'
import FindBook from './components/FindBook.jsx'
import BookDetail from './components/BookDetail.jsx'


const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element= {<App />}>
      <Route path='/' element= {<Index />} >
        <Route path=':id' element= {<BookDetail />} />
      </Route>
      <Route path='addBook' element= { <AddBook /> }/>
      <Route path='findBook' element= { <FindBook />}/>
    </Route>
  ));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>,
)
