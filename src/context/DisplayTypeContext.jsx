import { createContext, useContext, useState } from 'react'

const DisplayTypeContext = createContext(null)
const SetDisplayTypeContext = createContext(null)

export const useDisplayTypeContext = () => {
  return useContext(DisplayTypeContext)
}
export const useSetDisplayTypeContext = () => {
  return useContext(SetDisplayTypeContext)
}

export default function DisplayTypeProvider({ children }) {
  const [displayType, setDisplayType] = useState('input')
  return (
    <DisplayTypeContext.Provider value={displayType}>
      <SetDisplayTypeContext.Provider value={setDisplayType}>
        { children }
      </SetDisplayTypeContext.Provider>
    </DisplayTypeContext.Provider>
  )
}

