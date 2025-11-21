
import BuildPortFolio from "../components/BuildPortFolio"
import { PortfolioForm } from "../components/PortfolioForm"
import { useDispatch, useSelector } from "react-redux"
import { setTagLine, setActiveView, setFirstName, setLastName, setMiddleName, setIsShowMyWork, setAboutMeSection, setResume } from "../redux/viewSlice"
import { useEffect } from "react"
export const Home = () => {
  const initialState = useSelector((state) => state.view);
  const Dispatch = useDispatch()
  const { activeView = '', aboutMeSection } = initialState;

  const initialAboutMe = {
    designation: "",
    experienceAndIntrest: "",
    expertise: "",
    expertiseAndInterest: "",
    aboutYourRole: ""
  };

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
    const { type = '', payload = 'form', forValue = '' } = act;
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
        Dispatch(setResume(null))
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
        const temp =  URL.createObjectURL(payload?.[0]);
        console.log('temp',temp)
        Dispatch(setResume(payload?.[0]))
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