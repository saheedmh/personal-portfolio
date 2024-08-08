
import Home from './home';
import Resume from './resume'
//import Nav from './navbar2';
import About from './about';
import Images from './images';
import Contact from './contact';
import Testimonia from './testimonial';
import Skill from './skill';
import Portfolio from './portfolio';
import Navbars from './component/navbar/navbars';

import Footer from './Footer';

//import '//App.css'
//import { useEffect, useMemo, useState } from "react";
//import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
//import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

const  App =() => {
  //const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  //useEffect(() => {
    //initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      //await loadSlim(engine);
      //await loadBasic(engine);
    //}).then(() => {
      //setInit(true);
    //});
 // }, []);

  //const particlesLoaded = (container) => {
  //  console.log(container);
  //};

  
  return( 
    <div className="App"> 
<div className='App__mainpage__content'>
<Navbars/>
<Home/>
<Resume/>
{/**<Nav/>**/}
<About/>
<Portfolio/>
<Testimonia/>
<Contact/>
<Skill/>
<Images/>
{/**

<Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/resume' element={<Resume/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/testimonial' element={<Testimonia/>} />
          <Route path='/contact' element={<Contact/>} />
          
          <Route  path='/portfolio' element={<Portfolio/>} />
          <Route  path='/skill' element={<Skill/>} />
        </Routes>

 */}


</div>

      <Footer/> 
    </div>
  );
}

export default App;
