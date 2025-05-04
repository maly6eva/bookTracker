import './App.css'
import {BookForm} from "./component/BookForm.jsx";
import {Filter} from "./component/Filter.jsx";
import {useState, useEffect} from "react";


function App() {
    const [book, setBook] = useState(() => {
        const saved = localStorage.getItem('book')
        return saved ? JSON.parse(saved) : []
    })

    const [filt, setFilt] = useState('Все')

    useEffect(() => {
        localStorage.setItem('book', JSON.stringify(book))
    }, [book])

    function filterFunc(fil) {
        setFilt(fil)
    }

    function resBook(book) {
        setBook((aut) => [book, ...aut])
    }

    function resiiputFilt(id) {
        setBook((book) =>
            book.map((b) => b.id === id ? {...b, com: !b.com} : b))
    }

    const filterTaskRes = book.filter((b) => {
            return (
                filt === 'Все' ||
                (filt === 'Прочитанные' && b.com) ||
                (filt === 'Непрочитанные' && !b.com)
            )
        }
    )

    function deleteBook(id) {
        setBook((book) => book.filter((b) => b.id !== id))
    }

    return (
        <>
            <h1>📚 Трекер книг</h1>
            <BookForm addtask={resBook}/>
            <Filter filterFunc={filterFunc}/>

            <ul>
                {filterTaskRes.map((b) => {
                    return (
                        <li key={b.id}>
                            <input type='checkbox' checked={b.com} onChange={() => resiiputFilt(b.id)}/>
                            <span>{b.text} - {b.autor}</span>
                            <button onClick={() => deleteBook(b.id)}>X</button>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default App
