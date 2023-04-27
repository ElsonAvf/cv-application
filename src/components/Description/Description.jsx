import { useDisplayTypeContext } from './../../context/DisplayTypeContext.jsx'
import { useCVContext, useDispatchCVContext } from './../../context/CVContext.jsx'
import './Description.css'

export default function DescriptionFieldset() {
  const {name, job} = useCVContext()
  const displayType = useDisplayTypeContext()
  const dispatchCV = useDispatchCVContext()
  
  function handleChange(e) {
    dispatchCV({
      type: 'default', data: {[e.target.name]: e.target.value}
    })
  }
  
  return (
    <>
      {
        displayType === 'input'
        ? <fieldset id='description'>
            <input type='text' name='name' value={name} onChange={handleChange} placeholder='Name'/>
            <input type='text' name='job' value={job} onChange={handleChange} placeholder='Job'/>
          </fieldset>
        : <section>
            <h1>{name}</h1>
            <h2>{job}</h2>
          </section>
      }
    </>
  )
}