import './App.css'
import { useState } from 'react'
import TextArea from './components/TextArea'
import Preview from './components/Preview'

function App() {
  const [ textInput, setTextInput ] = useState('');
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-screen p-4">
      <div className="bg-gray-800 p-4">
        <TextArea setTextInput={setTextInput} />
      </div>
      <div className="bg-gray-800 p-4">
        <Preview textInput={textInput} />
      </div>
    </div>
  )
}

export default App
