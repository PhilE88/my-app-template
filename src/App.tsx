import './App.css'
import { MyRouter } from './Router'
import { LoadingLayout } from './layouts/LoadingLayout'
import { RouterProvider } from 'react-router-dom'

function App() {

  return (
    <RouterProvider router={MyRouter} fallbackElement={<LoadingLayout />} />
  )
}

export default App
