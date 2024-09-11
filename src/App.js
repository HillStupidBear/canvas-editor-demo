import './App.css';
import CanvasEditor from './components/CanvasEditor/index'

function App() {
  return (
    <>
      {/* minWeight = 794 */}
      <CanvasEditor width={ 600 } height={ 750 } margin={ '60px' } id={ 1 } />
    </>
  );
}

export default App;
