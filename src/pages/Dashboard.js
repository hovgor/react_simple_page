import { Link } from "react-router-dom"

const DashboardPage = () => {
    return (
        <div className="App-header">
            <h1>this is a dashboard page</h1>
            <h3>login</h3>
            <Link to="/login">Sign in</Link>
            <br/>
            <h3>register</h3>
            <Link to="/register">Sign up</Link>
        </div>
    )
}
export {DashboardPage}