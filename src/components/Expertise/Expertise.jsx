import ExpertiseInfoInput from './../ExpertiseInfoInput/ExpertiseInfoInput.jsx';
import { useDisplayTypeContext } from './../../context/DisplayTypeContext.jsx'
import { useCVContext, useDispatchCVContext } from './../../context/CVContext.jsx';
import './Expertise.css'

export default function Expertise() {
  const { expertise } = useCVContext()
  const displayType = useDisplayTypeContext()
  const dispatchCV = useDispatchCVContext()
  
  function addExpertise() {
    dispatchCV({type: 'add-expertise'})
  }
  
  return (
    <section id='expertise'>
      <h3>Expertise</h3>
      <hr/>
      <ul>
        {
          displayType === 'input'
          ? <>
              {
                expertise.map((exp, index) => <ExpertiseInfoInput key={exp.id} expertise={exp.expertise} index={index} />)
              }
              <button className='button' type='button' onClick={addExpertise}>Add</button>
            </>
          : <>
              { expertise.map(exp => <li key={exp.id}>{exp.expertise}</li>) }
            </>
        }
      </ul>
    </section>
  )
}