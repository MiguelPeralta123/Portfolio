import './App.css';
import AboutMe from './components/AboutMe';
import BackgroundImage from './components/BackgroundImage';
import TopNav from './components/TopNav';

function App() {
  return (
    <div className="App">
      <BackgroundImage />
      <div className='container'>
        <TopNav />
        <div className='portfolio-content'>
          <AboutMe />
        </div>
      </div>
    </div>
  );
}

export default App;
