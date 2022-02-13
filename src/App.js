import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.scss";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Multipage from "./pages/Multipage";
import Bloglist2 from "./pages/Bloglist2";
import BlogDetails2 from "./pages/BlogDetails2";
import About from "./pages/About";
import Services from "./pages/Services";
import Resume from "./pages/Resume";
import Works from "./pages/Works";
import Contact from "./pages/Contact";
import WorkDetails2 from "./pages/WorkDetails2";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/bloglist" component={Bloglist2} exact />
        <Route path="/blog-details/:id/:title" component={BlogDetails2} />

        {/* For Multipage */}
        <Route path="/" component={Multipage} exact />
        <Route path="/about" component={About} exact />
        <Route path="/services" component={Services} exact />
        <Route path="/resume" component={Resume} exact />
        <Route path="/works" component={Works} exact />
        <Route path="/work-details/:id/:title" component={WorkDetails2} />
        <Route path="/contact" component={Contact} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
