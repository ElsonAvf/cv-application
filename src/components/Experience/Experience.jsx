import ExperienceInfoInput from './../ExperienceInfoInput/ExperienceInfoInput.jsx';
import ExperienceInfoView from './../ExperienceInfoView/ExperienceInfoView.jsx';
import { useDisplayTypeContext } from './../../context/DisplayTypeContext.jsx'
import { useCVContext, useDispatchCVContext } from './../../context/CVContext.jsx';
import './Experience.css'

export default function Experience() {
  const { experience } = useCVContext()
  const displayType = useDisplayTypeContext()
  const dispatchCV= useDispatchCVContext()
  
  function addExperience() {
    dispatchCV({type: 'add-experience'})
  }
  
  return (
    <section id='experience'>
      <h3>Experience</h3>
      <hr/>
      <ul>
        {
          displayType === 'input'
          ? <>
              {
                experience.map((exp, index) => <ExperienceInfoInput key={exp.id} exp={exp} index={index}/>)
              }
              <button className='button' type='button' onClick={addExperience}>Add</button>
            </>
          : <>
              {
                experience.map(exp => <ExperienceInfoView key={exp.id} exp={exp} />)
              }
            </>
        }
      </ul>
    </section>
  )
}