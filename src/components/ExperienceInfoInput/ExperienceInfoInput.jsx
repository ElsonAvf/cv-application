import { useDispatchCVContext } from './../../context/CVContext.jsx'

export default function ExperienceInfo({ exp, index }) {
  const dispatchCV = useDispatchCVContext()

  function handleChange(e) {
    dispatchCV({ type: 'experience', data: { [e.target.name]: e.target.value }, index: index })
  }
  
  function delteSelf() {
    dispatchCV({type: 'delete-experience', index: index})
  }
  
  return (
    <li className='li-input'>
      <fieldset>
        <fieldset className='exp-date'>
          <input
            type='number'
            name='startDate'
            value={exp.startDate}
            placeholder='Start date'
            onChange={handleChange}
          />
          -
          <input
            type='number'
            name='endDate'
            value={exp.endDate}
            placeholder='End date'
            onChange={handleChange}
          />
        </fieldset>
        <input
          type='text'
          name='company'
          value={exp.company}
          placeholder='Company name'
          onChange={handleChange}
        />
        <input
          type='text'
          name='jobPosition'
          value={exp.jobPosition}
          className='job-position'
          placeholder='Job position'
          onChange={handleChange}
        />
      </fieldset>
      <button className='button' type='button' onClick={delteSelf}>Remove</button>
    </li>
  )
}