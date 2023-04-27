export default function ExperienceInfoView({exp}) {
  return (
    <li>
      <div className='exp-date'>{exp.startDate} - {exp.endDate}</div>
      <div>{exp.company}</div>
      <div className='job-position'>{exp.jobPosition}</div>
    </li>
  )
}