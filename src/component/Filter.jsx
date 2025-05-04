export const Filter = ({filterFunc}) => {
    return (
        <>
            <button onClick={() => filterFunc('Все')}>Все</button>
            <button onClick={() => filterFunc('Прочитанные')}>Прочитанные</button>
            <button onClick={() => filterFunc('Непрочитанные')}>Непрочитанные</button>
        </>
    );
};

