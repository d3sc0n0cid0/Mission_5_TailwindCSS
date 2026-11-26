import './App.css'

function App() {

  function toggleTema() {
    document.documentElement.classList.toggle('dark');
  }

  return (
    <>
      <nav className="
            flex items-center justify-between p-4 border-2  bg-kirby-pink shadow 
            dark:bg-kirby-pink-dark dark:text-kirby-cream" >

        <span className="text-xl font-bold">Kirby caffe</span>
        <ul className="flex gap-6">
          <li>
            <a href="#" className="hover:text-kirby-cream italic">Teléfono: 699 XX XX XX</a>
          </li>
          <li><a href="#" className="hover:text-kirby-cream font-bold">Iniciar Sessión</a></li>
          <li><a href="#" className="hover:text-kirby-cream"><button onClick={toggleTema}>Cambiar Tema</button></a></li>
        </ul>
      </nav>
{/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
      <header 
        className="relative bg-header-kirby bg-cover bg-center bg-no-repeat min-h-[500px] flex flex-col items-center justify-center text-center p-10 shadow">
        {/*Capa semitransparente para que se vea el texto */}
        <div className="absolute inset-0 bg-kirby-cream/75 dark:bg-dream-bg/80"></div>
        {/* Contenido por encima de la capa*/}
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-3xl md:text-5xl font-bold text-kirby-cocoa dark:text-dream-text">
            Bienvenido a Kirby Café
          </h1>
        </div>

      </header>
{/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
      <main>
        <section>

        </section>
      </main>
{/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
      <footer>

      </footer>
    </>
  )
}

export default App
