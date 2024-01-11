import { useParams } from 'react-router-dom';
import BookFacade from '/src/BookFacade.js'

const BookDetail = () => {

    const { findBook } = BookFacade;
    let {id} = useParams();
    const book = findBook(id);

    return (
        <>
            <table>
                <thead>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Info</th>
                </thead>
                <tbody>
                    <td>{book.id}</td>
                    <td>{book.title}</td>
                    <td>{book.info}</td>
                </tbody>
            </table>
        </>
    )
}

export default BookDetail;