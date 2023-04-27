import ProfilePic from './../ProfilePic/ProfilePic.jsx';
import Contact from './../Contact/Contact.jsx';
import Expertise from './../Expertise/Expertise.jsx';
import Language from './../Language/Language.jsx';
import './Aside.css';

export default function Aside() {
  return (
    <aside id='aside'>
      <ProfilePic/>
      <Contact />
      <Expertise />
      <Language />
    </aside>
  );
};