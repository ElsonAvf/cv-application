import { createContext, useContext, useReducer } from 'react'
import uniqid from 'uniqid'

const CVContext = createContext(null)
const CVDispatchContext = createContext(null)

export const useCVContext = () => {
  return useContext(CVContext)
}
export const useDispatchCVContext = () => {
  return useContext(CVDispatchContext)
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'default':
      return { ...state, ...action.data }
    case 'edu':
      const edu = [...state.education]
      edu[action.index] = { ...edu[action.index], ...action.data }
      return { ...state, education: edu }
    case 'experience':
      const experience = [...state.experience]
      experience[action.index] = { ...experience[action.index], ...action.data }
      return { ...state, experience: experience }
    case 'expertise':
      const expertise = [...state.expertise]
      expertise[action.index] = {...expertise[action.index], ...action.data}
      return { ...state, expertise: expertise }
    case 'lang':
      const lang = [...state.language]
      lang[action.index] = {...lang[action.index], ...action.data}
      return { ...state, language: lang }
    case 'add-course':
      return {
        ...state,
        education: [...state.education, {date: '', course: '', institution: '', id: uniqid() }]
      }
    case 'add-experience':
      return {
        ...state,
        experience: [...state.experience, {startDate: '', endDate: '', company: '', jobPosition: '', id: uniqid() }]
      }
    case 'add-expertise':
      return {
        ...state, expertise: [...state.expertise, {expertise: '', id: uniqid() }]
      }
    case 'add-language':
      return {
        ...state, language: [...state.language, {language: '', id: uniqid()}]
      }
    case 'delete-course': {
      const updated = [...state.education]
      updated.splice(action.index,1)
      return {...state, education: updated}
    }
    case 'delete-experience': {
      const updated = [...state.experience]
      updated.splice(action.index,1)
      return {...state, experience: updated}
    }
    case 'delete-expertise': {
      const updated = [...state.expertise]
      updated.splice(action.index,1)
      return {...state, expertise: updated}
    }
    case 'delete-language': {
      const updated = [...state.language]
      updated.splice(action.index,1)
      return {...state, language: updated}
    }
  }
}

export default function CVProvider({ children }) {
  const [cv, dispatch] = useReducer(reducer, {
    name: '',
    job: '',
    profilePic: './src/assets/profile.png', 
    phone: '',
    email: '',
    adress: '',
    education: [],
    experience: [],
    expertise: [],
    language: []
  })
  return (
    <CVContext.Provider value={cv}>
      <CVDispatchContext.Provider value={dispatch}>
        {children}
      </CVDispatchContext.Provider>
    </CVContext.Provider>
  )
}