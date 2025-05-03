import React from 'react';
import {useState} from "react";

export const BookForm = () => {
    const [text, seText] = useState('')
    return (
        <form>
            <input type="text"/>
            <select name="Автор" id="">
                <option value="Михаил Булгаков">Михаил Булгаков</option>
                <option value="Эрих Мария Ремарк">Эрих Мария Ремарк</option>
                <option value="Фёдор Достоевский">Фёдор Достоевский</option>
                <option value="Джордж Оруэлл">Джордж Оруэлл</option>
                <option value="Оскар Уайльд">Оскар Уайльд</option>
                <option value="Джек Лондон">Джек Лондон</option>
            </select>
            <button>Добавить книгу</button>

        </form>
    );
};

