import './App.css'
import { useEffect } from "react";
//Imagenes:
import burgerImg from './assets/img/Kirby_Cafe_Summer_Kirby_hamburger_&_Lemon_cream_pasta.jpg'
import burgerImg2 from './assets/img/Kirby_Cafe_Waddle_Dee_Hamburger_and_Meat_Sauce_Pasta_with_steamed_vegetables_2021.jpg'
import curry from './assets/img/Kirby_Cafe_Popstar_Curry_Tailored_with_Plenty_of_Seafood.jpg'
import feast from './assets/img/Kirby_Cafe_Whispy_Woods_Feast_plate.jpg'
function App() {

  useEffect(() => {
    //Comprueba si el usuario había puesto o no el modo oscuro
      if (localStorage.getItem('tema') === 'dark') {
        document.documentElement.classList.add('dark')
      }
    }, [])
    function toggleTema() {
      const esOscuro = document.documentElement.classList.toggle('dark')
      localStorage.setItem('tema', esOscuro ? 'dark' : 'light')
    }
  return (
    <div className='max-w-10xl mx-auto'>
      <nav className="flex flex-wrap items-center justify-between p-4 border-b-2 border-cocoa/20 bg-pink shadow dark:bg-pink-dark dark:text-cream dark:border-cocoa">
        <span className="text-xl font-bold"> ★ Kirby caffe ★</span>
        <ul className="flex gap-6 flex-wrap">
          <li>
            <a href="#" className="hover:text-cream italic dark:hover:text-star">Teléfono: 699 XX XX XX</a>
          </li>
          <li><a href="#" className="hover:text-cream dark:hover:text-star font-bold">Iniciar Sessión</a></li>
          <li className="hover:text-cream dark:hover:text-star"><button onClick={toggleTema}>Cambiar Tema</button></li>
        </ul>
      </nav>
{/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
      <header 
        className="animate-float-in relative bg-header-kirby bg-cover bg-center bg-no-repeat min-h-[500px] flex flex-col items-center justify-center text-center p-10 shadow">
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
          <h2 className="text-3xl font-bold text-center p-10 font-display dark:text-cream ">
            ★ PLATOS POPULARES ★
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
              <div className="bg-cream/75 dark:bg-dream-bg/80 p-5 rounded-lg hover:scale-102 border-star hover:border-2">
                <h3 className="font-bold text-left p-2 text-pink dark:text-pink-dark">
                  Summer Kirby Burger & Lemon Cream Pasta
                </h3>
                <div className="flex flex-col sm:flex-row items-center gap-4" >
                  <p className=" text-cocoa dark:text-cream " >
                   The familiar Kirby burger is ready for summer too!
                    A stylish, juicy burger topped off with sunglasses, served with refreshing lemon and rich gorgonzola pasta. This is a dish that lets you enjoy summer in Dream Land.</p>
                  <img className="block max-w-full h-auto rounded-lg" src={burgerImg} alt="burger Kirby"/>
                </div>
              </div>

              <div className="bg-cream/75 dark:bg-dream-bg/80 p-5 rounded-lg hover:scale-102  border-star hover:border-2">
                <h3 className="font-bold text-left p-2 text-pink dark:text-pink-dark">
                  Waddle Dee Hamburger & Meat Sauce Pasta with steamed vegetables
                </h3>
                <div className="flex flex-col sm:flex-row items-center gap-4" >
                  <p className=" text-cocoa dark:text-cream " >
                   The hardworking Waddle Dees have finally appeared as a Kirby Café burger! This is a healthy dish that's easy on the stomach, made with soy meat and avocado.</p>
                  <img className="block max-w-full h-auto rounded-lg" src={burgerImg2} alt="burger Wadeldee"/>
                </div>
              </div>

              <div className="bg-cream/75 dark:bg-dream-bg/80 p-5 rounded-lg hover:scale-102  border-star hover:border-2">
                <h3 className="font-bold text-left p-2 text-pink dark:text-pink-dark">
                  Popstar Curry Tailored with Plenty of Seafood
                </h3>
                <div className="flex flex-col sm:flex-row items-center gap-4" >
                  <p className=" text-cocoa dark:text-cream " >
                    This squid-ink seafood curry is perfect for summer. Turmeric rice and rice flour are used to portray Popstar with two "rings".                  
                  </p>
                  <img className="block max-w-full h-auto rounded-lg" src={curry} alt="curry"/>
                </div>
              </div>

              <div className="bg-cream/75 dark:bg-dream-bg/80 p-5 rounded-lg hover:scale-102  border-star hover:border-2">
                <h3 className="font-bold text-left p-2 text-pink dark:text-pink-dark">
                  Whispy Woods' Energetic Feast Plate
                </h3>
                <div className="flex flex-col sm:flex-row items-center gap-4" >
                  <p className=" text-cocoa dark:text-cream " >
                    This plate is a hearty feast.
                    (Creamy spinach pasta, chicken teriyaki with apple ginger sauce, pilaf, potato salad, and a petit dessert.)
                  </p>
                  <img className="block max-w-full h-auto rounded-lg" src={feast} alt="feast" />
                </div>
              </div>
          </div>
        </section>
      </main>
{/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
      <footer className="bg-cocoa">
        <div className="min-h-[100px] text-cream flex items-center gap-6 justify-center text-center p-9 flex-col md:flex-row md:grid-cols-3">
          <div>
            <p className="text-lg font-bold text-pink">★ Kirby Café Madrid</p>
            <p className="opacity-85 mt-2">
             Gastronomía temática inspirada en el universo de Dream Land. Platos artesanales y dulces recién horneados.
            </p>
          </div>
          <div>
            <p className="font-semibold text-star uppercase tracking-wider text-xs">Visítanos</p>
            <p className="opacity-85 mt-2">Calle de la Estrella 67, 28004 Madrid</p>
            <p className="opacity-85 mt-1">Lunes a Domingo: 10:00 – 22:00</p>
          </div>
          <div>
            <p className="font-semibold text-star uppercase tracking-wider text-xs">Reservas y Contacto</p>
            <p className="opacity-85 mt-2">Tel: +34 699 00 00 00</p>
            <p className="opacity-85 mt-1">reservas@kirbycafemadrid.es</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
