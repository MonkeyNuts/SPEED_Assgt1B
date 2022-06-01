import React from "react";
import { NavLink } from 'react-router-dom'

const UserNavOptions = (props) => {

    const userType = props.UserType;

    if (userType === 'moderator') {
        return (<NavLink to="/ModeratorList">Moderator Article Queue</NavLink>);
    }
    else if (userType === 'analyst') {
        return (<NavLink to="/AnalystList">Analyst Article Queue</NavLink>);
    }
    else {
        return;
    }
}
export default UserNavOptions;