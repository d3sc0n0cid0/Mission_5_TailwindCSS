import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav class="flex items-center justify-between p-4 bg-white shadow" >
        <span class="text-xl font-bold">Kirby caffe</span>
        <ul class="flex gap-6">
          <li>
            <a href="#" class="hover:text-blue-600">Teléfono: 699 XX XX XX</a>
          </li>
          <li><a href="#" class="hover:text-blue-600">Iniciar Sessión</a></li>
        </ul>
      </nav>

      <header>

      </header>

      <body>
        <h1 class="text-2xl md:text-3xl lg:text-5xl font-bold"> Título responsivo </h1>
        <section>

        </section>
      </body>
      <footer>

      </footer>
    </>
  )
}

export default App
