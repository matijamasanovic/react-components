import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const BookList = () => {
  return <section className='booklist'>
    <Book/>
    <Book/>
    <Book/>
  </section>
}

const Book = () => {
  return <article className='book'>
    <Image/>
    <Title/>
    <Author/>
  </article>
}

const Image = () => <img src="https://m.media-amazon.com/images/I/914661eRCnL._AC_UL320_.jpg" alt="The Family Secret" />
const Title = () => <h2>The Family Secret</h2>
const Author = () => {
  return <h4 style={{fontSize:'14px', fontWeight:'300'}}>Kiersten Modglin</h4>
}

export default BookList

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

