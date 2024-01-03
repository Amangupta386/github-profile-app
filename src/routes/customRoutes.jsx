import {Routes, Route} from "react-router-dom"
import GitProfile from "../component/githubProfile/githubProfile";

function CustomRoutes(){
    return (

        <Routes>
            <Route path="/" element = {<GitProfile />}></Route>
        </Routes>


    )
}

export default CustomRoutes;