import {Accordion} from './components/accordion/index.tsx';
import {Stars} from './components/love/index.tsx';
import {ImageSlider} from './components/image-slider/index.tsx';
import { LoadMore } from './components/load-more/index.tsx';
import { Treeview} from './components/tree-view/index.tsx';
import {navigationData} from './components/tree-view/index.ts'

function App() {
  return (
      <div className='main-container'>
        <div className='accordion-container'>
        {/* <Accordion/> */}
          {/* <Stars numOfStars={5}/> */}
          {/* <ImageSlider/> */}
          {/* <LoadMore/> */}
          <Treeview node={navigationData}/>
          
        </div>
      </div>
  )
}

export default App
