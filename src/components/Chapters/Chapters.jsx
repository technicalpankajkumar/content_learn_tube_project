/*
    1. List of Chapters
    2. Every Chapter have an inside breakdown topics
    3. Clicking on Chapter will expand the inside Topics
*/ 

import React, { useState, memo } from 'react'
import { chapters } from './chapters';
import './Chapter.css'
import Topics from '../Topics/Topics';

const Chapters = () => {

    const [chapterData, setChapterData] = useState(chapters);

    return (
        <>
            {
                chapterData.map((element)=>(
                    <div key={element.id} className='chapterContainer'>
                        <Topics title={element.title} innerTitles={element.innerTitles}/>
                    </div>
                ))
                
            }
        </>
    )
}

export default memo(Chapters)