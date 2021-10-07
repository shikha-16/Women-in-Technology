import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import IndexPage from "./pages/index";
import ScholarshipPage from "./pages/scholarship";
import ResourcesPage from "./pages/resources";
import OrganisationComponent from "./pages/organization";
import inspirations from "./pages/inspirations";
import ArticlesPage from "./pages/articles";
// import infographics from "./pages/infographics";
import CommunityPage from "./pages/community";
import ContributingPage from "./pages/contributing";
import GithubPage from "./pages/github";
import EventsPage from "./pages/events";

import ScrollButton from "./components/Scroll/ScrollButton";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={IndexPage} />
          <Route path="/scholarship" exact component={ScholarshipPage} />
          <Route path="/resources" exact component={ResourcesPage} />
          <Route path="/organisation" exact component={OrganisationComponent} />
          {/* <Route path="/infographics" exact component={infographics} /> */}
          <Route path="/articless" exact component={ArticlesPage} />
          <Route path="/community" exact component={CommunityPage} />
          <Route path="/inspirations" exact component={inspirations} />
          <Route path="/contributing" exact component={ContributingPage} />
          <Route path="/github" exact component={GithubPage} />
          <Route path="/events" exact component={EventsPage} />
        </Switch>
        <Footer />
      </Router>
      <ScrollButton />
    </div>
  );
}

export default App;
