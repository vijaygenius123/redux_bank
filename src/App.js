import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NavBar from 'components/NavBar'
import Account from "components/Account";
import {Container} from "react-bootstrap";

function App() {

    return (
        <>
            <Router>
                <NavBar/>
                <Container>
                    <Switch>
                        <Route to="/" exact component={Account}/>
                    </Switch>
                </Container>
            </Router>
        </>
    );
}

export default App;
