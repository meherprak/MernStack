import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './assets/css/styles.css'
import { Toster } from 'sonner'
createRoot(document.getElementById('root')).render(
  <>
    <App />
    <Toster richColors />
  </>
)