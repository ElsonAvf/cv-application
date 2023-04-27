import LanguageInfoInput from './../LanguageInfoInput/LanguageInfoInput.jsx'
import { useDisplayTypeContext } from './../../context/DisplayTypeContext.jsx'
import { useCVContext, useDispatchCVContext } from './../../context/CVContext.jsx'

export default function Language() {
  const {language} = useCVContext()
  const displayType = useDisplayTypeContext()
  const dispatchCV = useDispatchCVContext()
  
  function addLanguage() {
    dispatchCV({type: 'add-language'})
  }
  
  return (
    <section id='language'>
      <h3>Language</h3>
      <hr/>
      <ul>
        {
          displayType === 'input'
          ? <>
              {
                language.map((lang, index) => <LanguageInfoInput key={lang.id} lang={lang.language} index={index} />)
              }
              <button className='button' type='button' onClick={addLanguage}>Add</button>
            </>
          : <>
              { language.map(lang => <li key={lang.id}>{lang.language}</li>) }
            </>
        }
      </ul>
    </section>
  )
}