import { Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Newsfeed from "./Newsfeed";
import Overview from "./Overview";
import ProfileTimeline from "./ProfileTimeline";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/">
          <Route index element={<ProfileTimeline />} />
          <Route path="newsfeed" element={<Newsfeed />} />
          <Route path="overview" element={<Overview />} />
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
