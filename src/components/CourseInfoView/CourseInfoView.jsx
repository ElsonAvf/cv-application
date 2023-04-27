export default function CourseInfoView({course}) {
  return (
    <li>
      <div>{course.date}</div>
      <div className='course'>{course.course}</div>
      <div>{course.institution}</div>
    </li>
  )
}