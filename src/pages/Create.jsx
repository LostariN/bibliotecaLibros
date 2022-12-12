import React, { useState } from 'react'
import { useAppContext } from '../store/Store';
import Layaout from '../components/layaout';
import { useNavigate } from 'react-router-dom';

function Create() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('')
    const [cover, setCover] = useState('');
    const [intro, setIntro] = useState('');
    const [completed, setCompleted] = useState(false);
    const [review, setReview] = useState('')
    const navigate = useNavigate()
    const store = useAppContext();
    function handleChange(e) {
        const name = e.target.name;
        const valor = e.target.value;

        switch (name) {
            case "title":
                setTitle(valor)
                break;
            case "author":
                setAuthor(valor)
                break;
            case "cover":
                setCover(valor)
                break;
            case "intro":
                setIntro(valor)
                break;
            case "completed":
                setCompleted(e.target.checked)
                break;
            case "review":
                setReview(valor)
                break;

            default:
                break;
        }
    }
    function handleChangeFile(e) {

        const element = e.target;
        const file = element.files[0];
        const reader = new FileReader()

        reader.readAsDataURL(file)
        reader.onloadend = function () {
            setCover(reader.result.toString())
        }

    }
    function handleSubmit(e) {
        e.preventDefault();

        const newBook = {
            id: crypto.randomUUID(),
            title,
            author,
            cover,
            intro,
            completed,
            review,
        }

        store.createItem(newBook)
        navigate("/")
    }
    return (
        <Layaout>
            <form onSubmit={handleSubmit}>
                <div>
                    <p>Title</p>
                    <input type="text" name='title' onChange={handleChange} value={title} />
                </div>

                <div>
                    <p>Author</p>
                    <input type="text" name='author' onChange={handleChange} value={author} />
                </div>

                <div>
                    <p>Cover</p>
                    <input type="file" name='cover' onChange={handleChangeFile} />
                    <div>
                        {cover ? <img src={cover} width="200" alt='preview' /> : ""}
                    </div>
                </div>

                <div>
                    <p>Introduccion</p>
                    <input type="text" name='intro' onChange={handleChange} value={intro} />
                </div>
                <div>
                    <p>Completed</p>
                    <input type="checkbox" name='completed' onChange={handleChange} value={completed} />
                </div>

                <div>
                    <p>Review</p>
                    <input type="text" name='review' onChange={handleChange} value={review} />
                </div>
                <button >Registar</button>
            </form>
        </Layaout>
    )
}

export default Create