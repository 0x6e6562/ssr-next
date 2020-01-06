import Zoom from 'react-medium-image-zoom';

// CSS loading commented out for now since we are just focussing on the
// pre-rendering of the React component
// import 'react-medium-image-zoom/dist/styles.css';

const Index = () => (
  <div>
    <Zoom>
      <img width='80px' height='160px' src='https://source.unsplash.com/KK8PSWsYknQ/800x1600'/>
    </Zoom>
  </div>
);

export default Index;