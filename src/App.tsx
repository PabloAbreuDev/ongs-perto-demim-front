import Layout from "./components/layout";
import OngsProvider from "./context/ongs";
import Home from "./pages/home";

import Global from "./styles/global";


const App: React.FC = () => {
  return (
    <OngsProvider>
      <div>
        <Global />
        <Layout>
          <Home />
        </Layout>
      </div>
    </OngsProvider>
  )
}
export default App;
