import Layout from "./components/layout";
import Home from "./pages/home";

import Global from "./styles/global";


const App: React.FC = () => {
  return (
    <div>
      <Global />
      <Layout>
        <Home />
      </Layout>
    </div>
  )
}
export default App;
