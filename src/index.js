import React, { Children } from "react";
import ReactDOM  from "react-dom/client";
import './index.css';

// ---------------------------------------------------------------

// const Image = () => {
//   return <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Tales_serial.jpg" />
// }

// const BookName = () => {
//   return <h5 style={{color:"red" , fontSize:"1rem"}}>Alexander</h5>;
//  }

// const Author = () => <h3>Not Today</h3>;

// const Book = () =>
// {
//   return <article className="book">
//     <Image />
//     <BookName />
//     <Author />
//   </article>
// }

// function BookList()
// {
//   return(
//     <div className="booklist">
//       <Book />
//       <Book />
//       <Book />
//       <Book />
//     </div>
//   );
// }

// -------------------------------------------------------------------------------------------------------------------------

// function BookList(){
//   return(
//    <Book/>
//   );
// }
// const title = 'Morgan Housel';
// const Author = 'Alexander';
// const Book = () =>
// {
//   return (
//   <article>
//     <h3>{title}</h3>
//     <h5>{Author.toUpperCase()}</h5>
//     <p>{25+25}</p>
//     <p>{25-25}</p>
//     <p>{25*25}</p>
//     <p>{25/25}</p>
//   </article>
//   );
// };

// -------------------------------------------------------------------------------------------------------------------------

// PROPS

// const img = 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Tales_serial.jpg';
// const title = 'Morgan Housel';
// const author = 'Alexander';
// const books = '20';

// function BookList(){
//     return(
//       <section className="book">
//         <Book job="Developer" />
//         <Book job="Designer" number={22} />
//       </section>
     
//     );
//   }
// const Book = (props) =>
// {
//   console.log(props);
//   return(
//    <article>
//     <img src={img}/>
//     <h1>{title}</h1>
//     <h2>{author}</h2>
//     <p>{books}</p>
//     <p>{props.job}</p>
//     <p>{props.number}</p>
//    </article>
//   )
// }

// -------------------------------------------------------------------------------------------------------------------------

// Props -2 

// const firstBook =
// {
//   img : "https://upload.wikimedia.org/wikipedia/commons/3/3c/Tales_serial.jpg",
//   title : 'Morgan Housel',
//   author : 'Alexander'
// };

// const secondBook =
// {
//   img : "https://upload.wikimedia.org/wikipedia/commons/3/3c/Tales_serial.jpg",
//   title : 'House of Dragons',
//   author : 'Got'
// };

// function BookList()
// {
//   return(
//     <section className="bookList">
//     <Book
//     img = {firstBook.img}
//     title = {firstBook.title}
//     author = {firstBook.author.toUpperCase()}
//     >
//     <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for 
//        previewing layouts and visual mockups.</p>
//     </Book>
//     <Book
//     img = {secondBook.img}
//     title = {secondBook.title}
//     author = {secondBook.author.toUpperCase()}
//     />
//     </section>
//   )
// }

// // const Book = (props) => {
// //     const{img, title, author} = props;
  
// //     return (
// //       <article className="book">
// //         <img src={img} alt="" />
// //         <h1>{title}</h1>
// //         <h4>{author}</h4>
// //       </article>
// //     );
// //   };
// // Another method to declare props

//   const Book = ({img, title, author, children}) => {
//     return (
//       <article className="book">
//         <img src={img} alt="" />
//         <h1>{title}</h1>
//         <h4>{author}</h4>
//         {children}
//       </article>
//     );
//   };

// -------------------------------------------------------------------------------------------------------------------------

// Simple List 

// const names = ["john", "susan", "peter"];

// const newNames = names.map((name) => {
//     console.log(name);
//   return <h1>{name}</h1>;
// });
// console.log(newNames);

// function BookList() {
//       return <section className="bookList">{newNames}</section>;
//     }

// Proper List 

// const books = [
//     {
//         id : 1,//id is given for mentioning it is unique for avoid warning
//         img : 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Tales_serial.jpg',
//         title : 'The Alchemist',
//         author : 'Paulo Coelho'
//     },

//     {
//         id :2,
//         img : 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Tales_serial.jpg',
//         title : 'Ikigai: The Japanese secret to a long and happy life',
//         author : 'Héctor García'
//     },

//     {
//         id : 3,
//         img : 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Tales_serial.jpg',
//         title : 'Pshycology of Money',
//         author : 'Morgan Housel'
//     }
// ];

// function BookList ()
// {
//     return(
//         <section className="bookList">
//             {
//                 books.map((book)=>{
//                 //const {img, title, author} = book;
//                 return <Book book={book} key={book.id} /> // using key is for id.
//                 //in this method we can also use {...book} for declaring book,
//                 //by giving like this we can remove props.book into simply props
//             })}
//         </section>
//     );
// }

// const Book = (props) =>
// {
//  const {img, title, author} = props.book; //remove book, props only after giving {...book} in the fragment.
 
//  return(
//     <article className="book">
//         <img src={img}/>
//         <h1>{title}</h1>
//         <h4>{author}</h4>
//     </article>
//  )
// };

// -------------------------------------------------------------------------------------------------------------------------

// Events

const books = [
        {
            img : 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Tales_serial.jpg',
            title : 'The Alchemist',
            author : 'Paulo Coelho'
        },
    
        {
            img : 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Tales_serial.jpg',
            title : 'Ikigai: The Japanese secret to a long and happy life',
            author : 'Héctor García'
        },
    
        {
            img : 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Tales_serial.jpg',
            title : 'Pshycology of Money',
            author : 'Morgan Housel'
        }
    ];
    
    function BookList ()
    {
        return(
            <section className="bookList">
                {
                books.map((book,index)=>{
                return <Book {...book} key={index} />
                })}
            </section>
        );
    }
    
    const Book = ({img, title, author}) =>
    { 
     const clickHandler = (e) =>
      {
        alert("Hello");
      }

      const Example2 = (author) =>
      {
        console.log(author);
      }

     return(
        <article className="book">
            <img src={img}/>
            <h1 onClick={() => console.log(title)}>{title}</h1>
            <h4>{author}</h4>
            <button onClick={clickHandler}>Example</button>
            <button onClick={() => Example2(author)}>Example2</button>
        </article>
     )
    };

// -------------------------------------------------------------------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList/>);
