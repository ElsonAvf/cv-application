import Curriculum from './components/Curriculum/Curriculum.jsx'
import { useDisplayTypeContext, useSetDisplayTypeContext } from './context/DisplayTypeContext.jsx';  
import './App.css'

function App() {
  const displayType = useDisplayTypeContext()
  const setDisplayType = useSetDisplayTypeContext()
  
  function handleSubmit(e) {
    e.preventDefault()
    setDisplayType('view')
  }
  
  return (
    <div id='app'>
      <Curriculum />
      {
        displayType === 'view' &&
        <button className='button' type='button' onClick={() => setDisplayType('input')}>Edit</button>
      }
      {
        displayType === 'input' &&
        <button className='button' type='submit' onClick={handleSubmit}>Submit</button>
      }
    </div>
  )
}

export default App
