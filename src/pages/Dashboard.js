import React from "react"
import { Link } from "react-router-dom"
const DashboardPage = () => {
    return (
        <div className="App-header">
            <h1>this is a dashboard page</h1>
            <Link to='/:id'>{}</Link>
        </div>
    )
}
export {DashboardPage}