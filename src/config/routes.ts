import Home from '../Pages/Home'
import CandlesChart from '../Pages/CandlesChart'
import Learn from '../Pages/Learn'


interface RouteType {
    path: string,
    component: () => JSX.Element,
    name: string,
    protected: boolean
}

const routes: RouteType[] = [
    {
      path: "",
      component: Home ,
      name: "Home Screen",
      protected: false,
    },
    {
      path: "/CandlesChart",
      component: CandlesChart,
      name: "Candlestick Chart",
      protected: true,
    },
    {
      path: "/Learn",
      component: Learn,
      name: "Learn",
      protected: false,
    },
  ];
  
  export default routes