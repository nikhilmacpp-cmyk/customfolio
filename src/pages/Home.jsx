
import BuildPortFolio from "../components/BuildPortFolio"
import { PortfolioForm } from "../components/PortfolioForm"
import { useDispatch, useSelector } from "react-redux"
import { setActiveView } from "../redux/viewSlice"
export const Home = () => {
  const initialState = useSelector((state) => state.view);
  const Dispatch = useDispatch()
  const { activeView = '' } = initialState;
  const handleBuildPortFolio = (act) => {
    const { type = '', payload = 'form' } = act;
    switch (type) {
      case 'FORM-EDIT':
        Dispatch(setActiveView(payload))
        break;
      default:
        console.log('Unknown action', act);
        break
    }
  }
  return activeView === 'form' ?
    <PortfolioForm />
    :
    <BuildPortFolio
      action={handleBuildPortFolio}
    />
}