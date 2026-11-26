import './App.css'

function App() {

  function toggleTema() {
    document.documentElement.classList.toggle('dark');
  }

  return (
    <>
      <nav className="
            flex items-center justify-between p-4 border-2  bg-pink shadow 
            dark:bg-pink-dark dark:text-cream dark:border-cocoa" 
            >

        <span className="text-xl font-bold">Kirby caffe</span>
        <ul className="flex gap-6">
          <li>
            <a href="#" className="hover:text-cream italic dark:hover:text-star">Teléfono: 699 XX XX XX</a>
          </li>
          <li><a href="#" className="hover:text-cream dark:hover:text-star font-bold">Iniciar Sessión</a></li>
          <li><a href="#" className="hover:text-cream dark:hover:text-star"><button onClick={toggleTema}>Cambiar Tema</button></a></li>
        </ul>
      </nav>
{/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
      <header 
        className="relative bg-header-kirby bg-cover bg-center bg-no-repeat min-h-[500px] flex flex-col items-center justify-center text-center p-10 shadow">
        {/*Capa semitransparente para que se vea el texto */}
        <div className="absolute inset-0 bg-cream/75 dark:bg-dream-bg/80"></div>
        {/* Contenido por encima de la capa*/}
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-3xl md:text-5xl font-bold text-pink dark:text-star">
            Bienvenido a la página web del Kirby café
          </h1>
          <p className="text-cocoa dark:text-dream-text p-10">
            Prueba un pedazo de dream land y relájate tomando platos basados en Kirby y sus aventuras
          </p>
        </div>

      </header>
{/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
      <main className="bg-stripePink bg-cream/10 dark:bg-dream-bg/30 bg-blend-overlay min-h-screen 
            bg-size-[100%_100%] bg-center bg-no-repeat p-6 md:p-12">        

        <section className="relative z-10 p-6 md:p-12">
          <p>Cosas</p>
        </section>
      </main>
{/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
      <footer>

      </footer>
    </>
  )
}

export default App
