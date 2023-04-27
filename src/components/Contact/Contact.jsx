import { useDisplayTypeContext } from './../../context/DisplayTypeContext.jsx'
import { useCVContext, useDispatchCVContext } from './../../context/CVContext.jsx'
import './Contact.css'

export default function Contact() {
  const {phone, email, adress} = useCVContext()
  const displayType = useDisplayTypeContext()
  const dispatchCV = useDispatchCVContext()
  
  function handleChange(e) {
    dispatchCV({ type: 'default', data: { [e.target.name]: e.target.value } })
  }
  
  return (
    <section id='contact'>
      <h3>Contact</h3>
      <hr/>
      {
        displayType === 'input'
        ? <fieldset>
            <label>
              Phone
              <input type='tel' name='phone' value={phone} placeholder='Phone' onChange={handleChange} />
            </label>
            <label>
              Email
              <input type='email' name='email' value={email} placeholder='Email' onChange={handleChange} />
            </label>
            <label>
              Adress
              <input type='text' name='adress' value={adress} placeholder='Adress' onChange={handleChange} />
            </label>
          </fieldset>
        : <>
            <article>
              <h4>Phone</h4>
              <div>{phone}</div>
            </article>
            <article>
              <h4>Email</h4>
              <div>{email}</div>
            </article>
            <article>
              <h4>Adress</h4>
              <div>{adress}</div>
            </article>
          </>
      }
    </section>
  )
}