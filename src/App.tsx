import {Accordion} from './components/accordion/index.tsx';
import {Stars} from './components/love/index.tsx';
import {ImageSlider} from './components/image-slider/index.tsx';
import { LoadMore } from './components/load-more/index.tsx';

function App() {
  return (
      <div className='main-container'>
        <div className='accordion-container'>
        {/* <Accordion/> */}
          {/* <Stars numOfStars={5}/> */}
          {/* <ImageSlider/> */}
          <LoadMore/>
        </div>
      </div>
  )
}

export default App
