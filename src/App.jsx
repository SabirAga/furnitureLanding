import { Advantages } from './components/Advantages'
import { Footer } from './components/Footer'
import { Header } from './components/header/Header'
import { Products } from './components/Products'
import './index.css'

function App() {
  return (
    <div className='overflow-x-auto'>
      <Header />
      <Advantages />
      <Products />
      <Footer />
    </div>
  )
}

export default App
