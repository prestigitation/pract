import React from "react";
import FirstBlock from "./components/FirstBlock";
import DepartmentHistoryBlock from "./components/DepartmentHistoryBlock";
import DescriptionDirections from "./components/DescriptionDirections";
import ListTeachers from "./components/ListTeachers";
import News from "./components/News";
import "./index.css";
import AnimateOpacity from "../components/gloabal/UI/AnimateOpacity";

const HomePage = () => {
    return (
        <div className={"wrapper-home-page"}>
            {/*<AnimateOpacity count={300}>*/}
                <FirstBlock/>
            {/*</AnimateOpacity>*/}
            {/*<AnimateOpacity count={500}>*/}
                <DepartmentHistoryBlock/>
            {/*</AnimateOpacity>*/}
            {/*<AnimateOpacity count={500}>*/}
                <DescriptionDirections/>
            {/*</AnimateOpacity>*/}
            {/*<AnimateOpacity count={500}>*/}
                <ListTeachers/>
            {/*</AnimateOpacity>*/}
            {/*<AnimateOpacity count={500}>*/}
                <News/>
            {/*</AnimateOpacity>*/}
        </div>
    );
};

export default HomePage;
