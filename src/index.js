import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

function Booklist(){
  return<section className='booklist'>
    <Book/>
    <Book/>
    <Book/>
    <Book/>
    <Book/>
    <Book/>
    <Book/>
    </section>;
}

const Book= () =>{return(<article className='book'><Image/>
<Title/>
<Author/>
</article>);
};

const Image = () =>{
 return (<div className='image'><img src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51kfFS5-fnL._SX332_BO1,204,203,200_.jpg" alt="React"/></div>);  };
const Title = () =><h1>The Lord of the Rings</h1>;
const Author = () =><h4 style={{color:'grey', fontSize:'0.75rem', marginTop:'0.25rem'}}>J.RR Tonkin</h4>;

ReactDom.render(<Booklist/>, document.getElementById("root"))
 