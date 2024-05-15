// Write your code here
import {AiFillCalendar} from 'react-icons/ai'

const ProjectTimeLineCard = props => {
  const {projectDetails} = props
  const {
    imageUrl,
    projectTitle,
    description,
    projectUrl,
    duration,
  } = projectDetails

  return (
    <div>
      <img src={imageUrl} alt="project" />
      <div>
        <h1>{projectTitle}</h1>
        <div>
          <AiFillCalendar color="#171f46" />
          <p>{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <a href={projectUrl}>Visit</a>
    </div>
  )
}
export default ProjectTimeLineCard
