import React,{useState, memo, useCallback} from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Topics = ({title, innerTitles}) => {

  const [expandInnerTitle, setExpandInnerTitle] = useState(false);

  let generateTopics = useCallback((element)=>
  {
    return ( <div className='topicItem'>
          <video src="/video.mp4"/>
          <p key={element.id}>{element.title}</p>
      </div>)
  },[])

  return (
    <>
      <div className='chapterItem' onClick={()=>setExpandInnerTitle(!expandInnerTitle)}>
        <h3>{title}</h3>
        <ArrowDropDownIcon/>
      </div>
      <div>
      {
        expandInnerTitle && innerTitles.map((element)=>generateTopics(element))
      }
      </div>
    </>
  )
}

export default memo(Topics)