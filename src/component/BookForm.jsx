import React from 'react';
import {useState} from "react";

export const BookForm = ({addtask}) => {
    const [text, seText] = useState('')
    const [autor, setAutor] = useState('')

    function handleSubmit(e) {
        e.preventDefault();
        if (!text.trim()) return

        const autorres = {
            id: Date.now(),
            text,
            autor,
            com: false
        }
        addtask(autorres)
        seText('')
        setAutor('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={(e) => seText(e.target.value)}/>
            <select name="Автор" value={autor} onChange={(e) => setAutor(e.target.value)}>
                <option value="">-выбрать автора-</option>
                <option value="Михаил Булгаков">Михаил Булгаков</option>
                <option value="Эрих Мария Ремарк">Эрих Мария Ремарк</option>
                <option value="Фёдор Достоевский">Фёдор Достоевский</option>
                <option value="Джордж Оруэлл">Джордж Оруэлл</option>
                <option value="Оскар Уайльд">Оскар Уайльд</option>
                <option value="Джек Лондон">Джек Лондон</option>
            </select>
            <button type='submit'>Добавить книгу</button>
        </form>
    );
};

