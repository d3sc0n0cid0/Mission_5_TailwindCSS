import './App.css'
//Imagenes:
import burgerImg from './assets/img/Kirby_Cafe_Summer_Kirby_hamburger_&_Lemon_cream_pasta.jpg'
import burgerImg2 from './assets/img/Kirby_Cafe_Waddle_Dee_Hamburger_and_Meat_Sauce_Pasta_with_steamed_vegetables_2021.jpg'
import curry from './assets/img/Kirby_Cafe_Popstar_Curry_Tailored_with_Plenty_of_Seafood.jpg'
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

        <section className="relative">
          <h1 className="text-3xl font-bold text-center p-10 ">
            PLATOS POPULARES
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-fils-3 gap-4 ">
              <div className="bg-cream/75 dark:bg-dream-bg/80 p-5 rounded-lg">
                <h1 className="font-bold text-left p-2 text-pink dark: text-pink-dark">
                  Summer Kirby Burger & Lemon Cream Pasta
                </h1>
                <div flex flex-col sm:flex-row items-center gap-4 >
                  <p className=" text-cocoa dark:text-cream " >
                   The familiar Kirby burger is ready for summer too!
                    A stylish, juicy burger topped off with sunglasses, served with refreshing lemon and rich gorgonzola pasta. This is a dish that lets you enjoy summer in Dream Land.</p>
                  <img className="block mx-auto" src={burgerImg}/>
                </div>
              </div>

              <div className="bg-cream/75 dark:bg-dream-bg/80 p-5 rounded-lg">
                <h1 className="font-bold text-left p-2 text-pink dark: text-pink-dark">
                  Waddle Dee Hamburger & Meat Sauce Pasta with steamed vegetables
                </h1>
                <div flex flex-col sm:flex-row items-center gap-4 >
                  <p className=" text-cocoa dark:text-cream " >
                   The hardworking Waddle Dees have finally appeared as a Kirby Café burger! This is a healthy dish that's easy on the stomach, made with soy meat and avocado.</p>
                  <img className="block mx-auto" src={burgerImg2}/>
                </div>
              </div>

              <div className="bg-cream/75 dark:bg-dream-bg/80 p-5 rounded-lg">
                <h1 className="font-bold text-left p-2 text-pink dark: text-pink-dark">
                  Popstar Curry Tailored with Plenty of Seafood
                </h1>
                <div flex flex-col sm:flex-row items-center gap-4 >
                  <p className=" text-cocoa dark:text-cream " >
                    This squid-ink seafood curry is perfect for summer. Turmeric rice and rice flour are used to portray Popstar with two "rings".                  
                  </p>
                  <img className="block mx-auto" src={curry}/>
                </div>
              </div>
          </div>
        </section>
      </main>
{/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
      <footer className="bg-cocoa">
        <div className="min-h-[100px]">
          <p>Pipipipipi</p>
        </div>
      </footer>
    </>
  )
}

export default App
