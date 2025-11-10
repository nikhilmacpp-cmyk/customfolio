
import BuildPortFolio from "../components/BuildPortFolio"
import { PortfolioForm } from "../components/PortfolioForm"
import { useDispatch, useSelector } from "react-redux"
import { setAboutYou, setActiveView, setFirstName, setLastName, setMiddleName } from "../redux/viewSlice"
import { useEffect } from "react"
export const Home = () => {
  const initialState = useSelector((state) => state.view);
  const Dispatch = useDispatch()
  const { activeView = '' } = initialState;

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
    const { type = '', payload = 'form' } = act;
    switch (type) {
      case 'FORM-EDIT':
        Dispatch(setActiveView(payload))
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
        Dispatch(setAboutYou(payload))
        break;
      default:
        console.log('Unknown action', act);
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