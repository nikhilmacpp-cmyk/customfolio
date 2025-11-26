
import BuildPortFolio from "../components/BuildPortFolio"
import { PortfolioForm } from "../components/PortfolioForm"
import { useDispatch, useSelector } from "react-redux"
import { setTagLine, setActiveView, setFirstName, setLastName, setMiddleName, setIsShowMyWork, setAboutMeSection, setResume, setSkills, setProjectDetails } from "../redux/viewSlice"
import { useEffect } from "react"
export const Home = () => {
  const initialState = useSelector((state) => state.view);
  const Dispatch = useDispatch()
  const { activeView = '', aboutMeSection, skills, projectDetails } = initialState;

  const initialAboutMe = {
    designation: "",
    experienceAndIntrest: "",
    expertise: "",
    expertiseAndInterest: "",
    aboutYourRole: ""
  };
  const initialProjectState = { 'tagline': '', 'projectName': '', 'description': '', 'technology': '', 'link': '', 'projectImage': '' };

  useEffect(() => {
    if (activeView === "form") {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "lignt");
    } else {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    }
  }, [activeView])

  const handleBuildPortFolio = (act) => {
    console.log('act', act)
    const { type = '', payload = 'form', forValue = '', index = 0 } = act;
    switch (type) {
      case 'FORM-EDIT':
        Dispatch(setActiveView(payload))
        break;
      case 'RESET-FORM':
        Dispatch(setFirstName(''))
        Dispatch(setMiddleName(''))
        Dispatch(setLastName(''))
        Dispatch(setTagLine(''))
        Dispatch(setIsShowMyWork(false))
        Dispatch(setAboutMeSection(initialAboutMe))
        Dispatch(setProjectDetails([initialProjectState]))
        Dispatch(setResume(null))
        Dispatch(setSkills([
          { name: "", level: "", category: "" }, // default first row
        ]))
        break;
      case 'FIRST-NAME-CHANGE':
        Dispatch(setFirstName(payload))
        break;
      case 'MIDDLE-NAME-CHANGE':
        Dispatch(setMiddleName(payload))
        break;
      case 'LAST-NAME-CHANGE':
        Dispatch(setLastName(payload))
        break;
      case 'ABOUT-YOU-CHANGE':
        Dispatch(setTagLine(payload))
        break;
      case 'SHOW-MY-WORK':
        Dispatch(setIsShowMyWork(payload))
        break;
      case 'ADD-DESIGNATION':
      case 'EXPERIENCE-INTREST':
      case 'EXPERTISE-IN':
      case 'EXPERTISE-AND-INTREST':
      case 'ABOUT-YOUR-ROLE':
      case 'MANAGEMENT-EXPERIENCE':
        Dispatch(setAboutMeSection({
          ...aboutMeSection,
          [forValue]: payload
        }))
        break;
      case 'ATTATCH-RESUME':
        Dispatch(setResume(payload?.[0]))
        break;
      case 'ADD-SKILLS':
        const updated = [...skills, { name: "", level: "", category: "" }];
        Dispatch(setSkills(updated));
        break;
      case 'ADD-EDIT-SKILLS':
        const updatedEntry = skills?.map((item, ind) =>
          ind === index ? { ...item, [forValue]: payload } : item
        )
        Dispatch(setSkills(updatedEntry))
        break;
      case 'DELETE-SKILL':
        const updatedSkillField = skills?.filter((i, ind) => ind !== index) || [];
        if (updatedSkillField?.length) Dispatch(setSkills(updatedSkillField))
        break;
      case 'ADD-PROJECTS':
        const updatedProject = [...projectDetails, initialProjectState];
        Dispatch(setProjectDetails(updatedProject));
        break;
      case 'DELETE-PROJECT':
        const updatedProjectField = projectDetails?.filter((i, ind) => ind !== index) || [];
        if (updatedProjectField?.length) Dispatch(setProjectDetails(updatedProjectField))
        break;
      default:
        console.log('Unknown action type', act);
        break
    }
  }

  return activeView === 'form' ?
    <PortfolioForm
      action={handleBuildPortFolio}
    />
    :
    <BuildPortFolio
      action={handleBuildPortFolio}
    />
}