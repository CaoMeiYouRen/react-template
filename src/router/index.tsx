import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
function router(props: any) {
    return (
        <Router>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
        </Router>
    )
}
export default router