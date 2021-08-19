
import './App.css';
import { useState } from 'react';
import { BsToggleOn } from 'react-icons/bs'
import { AiOutlineMenu } from 'react-icons/ai'
import {
  FaInstagram,
  FaFacebook, FaGithubAlt,
  FaLinkedinIn, FaTwitter,
  FaTimes
} from 'react-icons/fa'
import photo from './assets/img/photo.jpg'
import triangle from './assets/svg/triangle.svg'
import square from './assets/svg/square.svg';
import { BsFileCode, BsToggles, BsPhone, BsGrid1X2 } from 'react-icons/bs'
import { SectionGallery } from './sections/SectionGallery';
import { useSpring, animated ,config} from 'react-spring';

function App() {

  // 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

  const [sidebar, setSidebar] = useState(false)

  const showSidebar = (e) => {
    setSidebar(!sidebar);
    console.log(e);
  }

  const { number } = useSpring({
    from: { number: 89 },
    to: { number: 43 },
    delay: 1000,
    config: { duration: 2000 },
  }
  );

  const { numbertwo } = useSpring({
    from: { numbertwo: 20 },
    to: { numbertwo: 3 },
    delay: 1000,
    config: { duration: 2000 },
  }
  );

  const { numberthree } = useSpring({
    from: { numberthree: 234 },
    to: { numberthree: 30 },
    delay: 1000,
    config: { duration: 2000 },
  }
  );


  const springWidth = useSpring({

    from: {width:'100%'},
    to:{width:'50%'},
    reverse: !sidebar,
    config: config.wobbly,

  })
  return (
    <div className="body">
      <div className='container'>
          <div>
           <div className={sidebar ? 'menu-phone-div-hidden' : 'menu-phone-div'}>
             <div className='logo-div'>
              <a href="#home" className='name'>Code!.</a>
            </div>

            <div>
              <AiOutlineMenu className='menu-icon' onClick={showSidebar}/>
            </div>
           </div>


          <animated.nav className={sidebar ? 'navbar' : 'navbar-hidden'} style={springWidth}>
            
          <div className='navbar-top-items'>
            <div className='logo-div'>
              <a href="#home" className='name'>Happy Code!.</a>
            </div>
            <div className='div-menu-icon'>
              <FaTimes className='menu-icon' onClick={showSidebar} />
            </div>
          </div>
          <div className='list-div'>
            <ul className='list-menu phone-menu'>
              <li>Home</li>
              <li>Projects</li>
              <li>Contact</li>
              <li className='resume'>Resume</li>
            </ul>
          </div>
          </animated.nav>
          </div>
          


        {/* Primera seccion con foto, nombre y redes sociales */}

        <section className='text-gray section-top'>
          <div className='name-div pt-2'>
            <div className='hello-div'>
              <h2 className='hello'>Hello! I'm </h2>
            </div>
            <h2 className='text-white text-xl'>Axel Tinoco Mendoza</h2>
            <h2 className='text-m'>UI/UX Designer & Developer Web Full Stack</h2>

            <div className='social-div'>
              <FaInstagram className='' />
              <FaFacebook className='social-icon' />
              <FaGithubAlt className='social-icon' />
              <FaLinkedinIn className='social-icon' />
              <FaTwitter className='social-icon' />
            </div>

            <button className='btn-get p-1'>
              GET IN TOUCH
            </button>
            <div className='stats'>
              <div className='btn-div'>
                <BsToggleOn className='btn-toogle' />
              </div>

              <div className='w-4 div-numbers'>
                <animated.span className="number">
                  {number.to(n => n.toFixed(0))}
                </animated.span>
                <div className='letter-div'>
                  <h2>Happy</h2>
                  <h2>Clients</h2>
                </div>
              </div>

              <div className='w-4 div-numbers'>
                <animated.span className="number">
                  {numbertwo.to(n => n.toFixed(0))}
                </animated.span>
                <div className='letter-div'>
                  <h2>Years of Experience</h2>
                </div>
              </div>

              <div className='w-4 div-numbers'>
                <animated.span className="number">
                  {numberthree.to(n => n.toFixed(0))}
                </animated.span>
                <div className='letter-div'>
                  <h2>Projects Completed</h2>
                </div>
              </div>

            </div>


          </div>
          <div className='photo-div pt-2'>
            <div className='container-photo'>
              <img className='photo' src={photo} alt="me" />
              <img className='triangle' src={triangle} alt="triangle" />
              <img className='square' src={square} alt="square" />

              <div className='pattern-div'>
              </div>

              <div className='pattern-bot-div'>
              </div>
            </div>


          </div>
        </section>

        {/* Segunda seccion de habilidades */}
        <section className='performance-div'>
          <div className='abilities'>
            <div className='web-div'>
              <div className='top-div-abilities'>
                <div className='figures-div-icon'>
                  <h2 className='text-white'><BsFileCode className='icon' /></h2>
                </div>
                <div className='text-div-abilities'>
                  <h2 className='text-white title-abilities'>Web App</h2>
                </div>
              </div>
              <p className='text-gray'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta necessitatibus quam sed molestias.</p>
            </div>

            <div className='ui-div'>
              <div className='top-div-abilities'>
                <div className='figures-div-icon'>
                  <h2 className='text-white'><BsToggles className='icon' /></h2>
                </div>
                <div className='text-div-abilities'>
                  <h2 className='text-white title-abilities '>UI/UX Designer</h2>
                </div>
              </div>
              <p className='text-gray'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>

          </div>



          <div className='abilities'>

            <div className='mobile-div'>
              <div className='top-div-abilities'>
                <div className='figures-div-icon'>
                  <h2 className='text-white'><BsPhone className='icon' /></h2>
                </div>
                <div className='text-div-abilities'>
                  <h2 className='text-white title-abilities '>Mobile App</h2>
                </div>
              </div>
              <p className='text-gray'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, consectetur adipisicing elit</p>
            </div>



            <div className='proto-div'>
              <div className='top-div-abilities'>
                <div className='figures-div-icon'>
                  <h2 className='text-white'><BsGrid1X2 className='icon' /></h2>
                </div>
                <div className='text-div-abilities'>
                  <h2 className='text-white title-abilities'>Prototyping & WireFraming</h2>
                </div>
              </div>
              <p className='text-gray'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta necessitatibus quam sed molestias.</p>
            </div>

          </div>


          <div className='what-i-div'>
            <div className='what-text-container'>

              <h3 className='text-gray mb-2   '><span className='line-span'></span> WHAT I DO</h3>
              <h2 className='text-white text-l mb-1'>Better Design Better Experiences</h2>

              <p className='text-gray'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum reiciendis ullam molestiae dolorem alias temporibus corporis quaerat veniam. Quaerat cum eligendi pariatur incidunt eius mollitia quis neque placeat voluptatibus nulla?</p>

            </div>

          </div>


        </section>
        {/* Tercera seccion de proyectos */}
        <section className='project-div'>
          <h3 className='text-gray mb-2'><span className='line-span'></span>MY WORKS</h3>
          <p className='text-gray'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita</p>
          <SectionGallery />
        </section>


      </div>
    </div>
  );
}

export default App;
