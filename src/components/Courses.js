  import React, {useState} from 'react';
import styled from 'styled-components';
import ReactHtmlParser from 'react-html-parser'; 

const CoursesTitle = styled.div`
  font-size: 70px;
  color: #1A1930;
  margin-bottom:50px;
`

const CoursesTypes = styled.div``;

const CourseType = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 0px 0px #6F2CFF;
  border-radius: 30px;
  font-size: 15px;
  line-height: 15px;
  color: #6F2CFF;
  padding:11px 45px 14px 45px;
  &.active{
    background: #6F2CFF;
    color:#fff;
  }
`;    

const Courses = () => {
  const [filter, setFilter] = useState("lecture");  
  const lectureData = [
    "https://docs.google.com/presentation/d/139N5GWxUB_-Vi-__pzbWiQcJwDFK_bQXW2oPubJ-ctA/edit#slide=id.g876f26f387_0_0",
    "https://docs.google.com/presentation/d/1K0HMZiAZwCcH7UQTTwWDn7dPNYYiVHJz1YdBk-vDHoM/edit#slide=id.g11522a282ca_0_149",
    "https://docs.google.com/presentation/d/11KiNqaqAg_ebkp98OiKQL6K55JFeSysHlUn1U-DVfhM/edit#slide=id.g115abbcef71_0_0",
    "https://docs.google.com/presentation/d/1jzGi90aeWbL-nRcROuqJDJI0_fQl0FQHa6J-fQAkr0k/edit",
  ]

  const videoData = [
    '<iframe width="500" height="315" src="https://www.youtube.com/embed/IzYK8bEmGqk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    '<iframe width="500" height="315" src="https://www.youtube.com/embed/3NToNut7ZQw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    '<iframe width="500" height="315" src="https://www.youtube.com/embed/unm0zAR8f6E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    '<iframe width="500" height="315" src="https://www.youtube.com/embed/_5An5ROamYE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'

  ]

  return (
    <div style={{background: "#F5F5F5"}}>
      <div className='container'>
        <CoursesTitle>
          Courses
        </CoursesTitle>
        <CoursesTypes className='d-flex justify-content-center gap-5'>
          <CourseType onClick={() => setFilter("lecture")} className={filter === "lecture" ? "active" : ""}>
            Lecture
          </CourseType>
          <CourseType onClick={() => setFilter("video")} className={filter === "video" ? "active" : ""}>  
            Video
          </CourseType> 
        </CoursesTypes>
        <div className='d-flex justify-content-center flex-wrap gap-5 mt-5 pb-5'>
        {
          filter === "lecture" ? lectureData.map((item, index) => (
            <a href={item} target="_blank" rel="noreferrer"> 
              <img src={`images/lecture-${index+1}.jpg`} width={500}/>
            </a> 
          )) : videoData.map(item => (
            <>
              { ReactHtmlParser(item) }
            </>
          )) 
        }
        </div>
      </div>
    </div>
  )
}

export default Courses