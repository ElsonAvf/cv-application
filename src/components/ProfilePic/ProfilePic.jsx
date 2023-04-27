import { useCVContext, useDispatchCVContext } from './../../context/CVContext.jsx'
import './ProfilePic.css'

export default function ProfilePic() {
  const { profilePic } = useCVContext()
  const dispatchCV = useDispatchCVContext()
  
  function handleImageUpload(e) {
    const selectedImage = e.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(selectedImage)
    reader.onload = () => {
      dispatchCV({type: 'default', data: {profilePic: reader.result}})
    }
  }
  
  return (
    <label>
      <img id='profile-pic' src={profilePic} alt='Profile photo' />
      <input type='file' name='profilePic' accept='image/*' onChange={handleImageUpload} hidden />
    </label>
  )
}