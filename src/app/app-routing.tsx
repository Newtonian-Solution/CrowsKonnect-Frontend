import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import modules from './app-module'
import Nav from "../components/nav";

const AppRoute = () => {
    return (
        <>
            <Router>
            <Nav />
                <Routes>
                  
                    {modules.map(module => (
                        <Route key={module.name} {...module.routeProps} />
                    ))}
                </Routes>
            </Router>
        </>
    )
}
export default AppRoute