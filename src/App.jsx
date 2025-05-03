import './App.css'
import {BookForm} from "./component/BookForm.jsx";
import {useState} from "react";
import {Filter} from "./component/Filter.jsx";


function App() {
    const [book, setBook] = useState([])
    const[filt, setFilt] = useState('Все')

    function filterFunc(fil) {
        setFilt(fil)
    }
  return (
    <>
      <h1>📚 Трекер книг</h1>
      <BookForm />
        <Filter  filterFunc={filterFunc}/>
    </>
  )
}

export default App
