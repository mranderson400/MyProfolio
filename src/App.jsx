
import { BrowserRouter } from "react-router-dom";
import '../src/index.css';
import {About, Contact, Experience, Feedbacks,
    Hero, Tech, Works, NavAll, ComputersCanvas} from './components';

// const StarsCanvasMemo = React.memo(StarsCanvas);

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-cool-pattern bg-cover 
          bg-repeat bg-center  ">
        <div
          className=" bg-cover 
          bg-repeat bg-center "
     
        >
        <NavAll/>
          {/* <Hero /> */}
        </div>
        {/* <ComputersCanvas/> */}
        <About />
        {/* <Experience /> */}
        {/* <Tech /> */}
        <Works />
        {/* <Feedbacks /> */}
        <div className="relative z-0">
           <Contact />
          {/* <StarsCanvasMemo />  */}
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
