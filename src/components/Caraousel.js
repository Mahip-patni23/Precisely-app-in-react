import React, { useState, useEffect } from 'react';
/* import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa'; */
import dummyData from '../dummyData.js';
import './Caraousel.css';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import StarRoundedIcon from '@mui/icons-material/StarRounded';

function Caraousel() {
  const people = dummyData;
  const [index, setIndex] = useState(0);

  /* const { id, image, name, quote, title } = people[index]; */
  useEffect(() => {
    if(index<0){
      setIndex(people.length-1)
    }else if(index >= people.length)
    {
      setIndex(0);
    }
  }, [index, people])

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(index+1);
    }, 3000)
    return () => clearInterval(interval);
  }, [index])

  return (<>
    <main>
      <section className="section-center">
        {
          people.map((person, personIndex) => {
            const {id, name, image, title, rating } = person;
            let position = 'nextslide';
            if(personIndex===index)
            {
              position = 'activeslide';
            }
            if(personIndex === index-1 || (index===0 && personIndex===people.length-1))
            {
              position = 'lastslide';
            }
            return <article key={id} className={position}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <div className="profile-footer">
                  <div className = "rating" style={{color: "#e5c702"}}> 
                    <StarRoundedIcon />                  
                    <p> {rating}</p>
                  </div>
                  <a href="https://www.precisely.co.in/" className='send-request-link'>Send Request</a>
              </div>
            </article>
          })
        }
        <button className="prev c-btn" onClick={() => setIndex(index-1)}>
          <ChevronLeftIcon></ChevronLeftIcon>
        </button>
        <button className="next c-btn" onClick={() => setIndex(index+1)}>
          <ChevronRightIcon></ChevronRightIcon>
        </button>
      </section>
    </main>
    </>
    
  );
}

export default Caraousel;