import { useDispatchCVContext } from './../../context/CVContext.jsx'

export default function LanguageInfo({ lang, index }) {
  const dispatchCV = useDispatchCVContext()

  function handleChange(e) {
    dispatchCV({
      type: 'lang', data: { language: e.target.value }, index: index
    })
  }
  
  function deleteSelf() {
    dispatchCV({type: 'delete-language', index: index})
  }
  
  return (
    <li className='li-input'>
      <input type='text' name='language' value={lang} placeholder='Language' onChange={handleChange} />
      <button className='button' type='button' onClick={deleteSelf}>Remove</button>
    </li>
  )
}