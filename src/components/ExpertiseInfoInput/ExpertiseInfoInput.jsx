import { useDispatchCVContext } from './../../context/CVContext.jsx'

export default function ExpertiseInfo({ expertise, index }) {
  const dispatchCV = useDispatchCVContext()

  function handleChange(e) {
    dispatchCV({
      type: 'expertise', data: { [e.target.name]: e.target.value }, index: index
    })
  }
  
  function deleteSelf() {
    dispatchCV({type: 'delete-expertise', index: index})
  }
  
  return (
    <li className='li-input'>
      <input type='text' name='expertise' value={expertise} placeholder='Expertise' onChange={handleChange} />
      <button className='button' type='button' onClick={deleteSelf}>Remove</button>
    </li>
  );
};