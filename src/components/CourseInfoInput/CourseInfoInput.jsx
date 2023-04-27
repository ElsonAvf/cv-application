import { useDispatchCVContext } from './../../context/CVContext.jsx'

export default function CourseInfo({course, index}) {
  const dispatchCV = useDispatchCVContext()
  
  function handleChange(e) {
    dispatchCV({type: 'edu', data: {[e.target.name]: e.target.value}, index: index})
  }
  
  function deleteSelf() {
    dispatchCV({type: 'delete-course', index: index})
  }
  
  return (
    <li className='li-input'>
      <fieldset>
        <input
          type='number'
          name='date'
          value={course.date}
          placeholder='Date'
          onChange={handleChange}
        />
        <input
          type='text'
          name='course'
          value={course.course}
          className='course'
          placeholder='Course'
          onChange={handleChange}
        />
        <input
          type='text'
          name='institution'
          value={course.institution}
          placeholder='Institution'
          onChange={handleChange}
        />
      </fieldset>
      <button className='button' type='button' onClick={deleteSelf}>Remove</button>
    </li>
  )
}