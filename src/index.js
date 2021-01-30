import React from 'react';
import ReactDom from 'react-dom';

// CSS
import './index.css';


import SpecificBook from './Book'


function BookList() {
  return (
    <section >
        <SpecificBook ></SpecificBook>
    </section>
  );
}



ReactDom.render(<BookList />, document.getElementById('root'));
