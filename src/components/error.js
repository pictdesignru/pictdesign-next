'use client' // компоненты `Error` должны быть клиентскими

const Error = ({
    error,
    reset
}) => {
    return (
        <>
        <div>Что-то пошло не так</div>
        <button onClick={reset}>try again</button>
        </>
    )
}

export default Error;