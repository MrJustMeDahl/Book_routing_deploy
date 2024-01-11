import BookFacade from '/src/BookFacade.js'
import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

const Index = () => {

    const { getBooks } = BookFacade;

    return (
        <>
            <ul>
                <nav>
                {getBooks().map((book) => (
                    <NavLink to={"/" + book.id}><li>{book.title}</li></NavLink>
                ))}
                </nav>
            </ul>
            <Outlet />
        </>
    )

};

export default Index;