
import { useState } from 'react';
import Nav from './components/Nav'
import  MainRoutes from "./routes/MainRoutes";
import Loader from './components/Loader';

const App = () => {
    const [loaded, setLoaded] = useState(false);

  return (
    <div className='relative'>
      <Nav/>
      {/* {!loaded && <Loader onComplete={() => setLoaded(true)} />}
      {loaded && <MainRoutes />} */}
      <MainRoutes />
    </div>
  )
}

export default App
