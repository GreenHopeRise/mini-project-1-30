
import './App.css'
import FlipCard from './components/FlipCard'
import FormValidation from './components/FormValidation'
import Modal from './components/Modal'
import OpenCloseBtn from './components/OpenCloseBtn'
import OtpInput from './components/OtpInput'
import Practice1 from './components/Practice1'
import Practice2 from './components/Practice2'
import Practice3 from './components/Practice3'
import Tabs from './components/Tabs'
import TempConverter from './components/TempConverter'
import ToggleTextToInput from './components/ToggleTextToInput'
import UndoRedoApp from './components/UndoRedoApp'

function App() {


  return (
    <>
      {/* <UndoRedoApp/> */}
      <Practice1/>

      {/* -----------<>----------- */}

      {/* <OpenCloseBtn/> */}
      <Practice2/>

      {/* -----------<>----------- */}

      {/* <ToggleTextToInput/> */}
      <Practice3/>

      {/* -----------<>----------- */}

      <TempConverter/>
      {/* <prctice4/> */}

      {/* -----------<>----------- */}
      <OtpInput/>

      
      {/* -----------<>----------- */}
      <FlipCard/>

      {/* -----------<>----------- */}
      <Tabs/>

      {/* -----------<>----------- */}
      <FormValidation/>

      {/* -----------<>----------- */}
      <Modal/>
    </>
  )
}

export default App
