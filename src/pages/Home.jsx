
import BuildPortFolio from "../components/BuildPortFolio"
import { PortfolioForm } from "../components/PortfolioForm"
import { useSelector } from "react-redux"
export const Home = () => {
  const initialState = useSelector((state) => state.view);
  const { activeView = '' } = initialState;
  console.log('activeView', activeView)
  return (<>
    <PortfolioForm />
    <BuildPortFolio />
  </>
  )
}