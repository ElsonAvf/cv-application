import CourseInfoInput from './../CourseInfoInput/CourseInfoInput.jsx'
import CourseInfoView from './../CourseInfoView/CourseInfoView.jsx'
import { useDisplayTypeContext } from './../../context/DisplayTypeContext.jsx'
import { useCVContext, useDispatchCVContext } from './../../context/CVContext.jsx'

export default function Education() {
  const { education } = useCVContext()
  const displayType = useDisplayTypeContext()
  const dispatchCV = useDispatchCVContext()
  
  function addCourse() {
    dispatchCV({ type: 'add-course' })
  }
  
  return (
    <section id='education'>
      <h3>Education</h3>
      <hr/>
      <ul>
        {
          displayType === 'input'
          ? <>
              {
                education.map((course, index) => <CourseInfoInput key={course.id} course={course} index={index} />)
              }
              <button className='button' type='button' onClick={addCourse}>Add</button>
            </>
          : <>
              {
                education.map(course => !!course.course? <CourseInfoView key={course.id} course={course}/> : null)
              }
            </>
        }
      </ul>
    </section>
  )
}