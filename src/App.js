import './App.css';
import CanvasEditor from './components/CanvasEditor/index'
import NodeViewBlock from './components/NodeView';

function App() {
  return (
    <>
      {/* <NodeViewBlock/> */}
      {/* minWeight = 794 */}
      <CanvasEditor width={ 900 } height={ 750 } margin={ '60px auto' } id={ 1 } />
    </>
  );
}

export default App;
