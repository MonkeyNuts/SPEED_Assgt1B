import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";


const EditPage = () => {

    const location = useLocation();
    const navigate = useNavigate();

    // Get Article ID
    const { id } = useParams();
    const userType = location.state?.userType;
    const artitleTitle = location.state?.title;

    // console.log("Article ID: ", id);
    // console.log("UserType: ", userType);
    // console.log("Artitle: ", artitleTitle);


    /// Check whether : Moderator (mod) or Analyst (ana)
    const userTypeCheck = () => {
        //* If [userType] is Mod
        if (userType === "mod") {
            return { needModerator: false, needAnalyst: true };
        }

        //* Else, if [userType] is Ana
        return { needAnalyst: false };
    }


    /// Redirect [userType] to their reponsible page
    const userTypeRedirect = () => {
        if (userType === "mod") {
            navigate("/ModeratorList");
        }
        else {
            navigate("/AnalystList");
        }
    }


    /// If Click YES
    const handleYesApprov = async () => {

        const getUserType = userTypeCheck();

        try {
            await axios.patch(`http://localhost:5000/api/article/${id}`, { ...getUserType })
        } catch (error) {
            console.log(error);
        }

        userTypeRedirect();
    }


    /// If Click NO
    const handleNoApprov = async () => {
        try {
            await axios.delete(`http://localhost:5000/api/article/${id}`)
        } catch (error) {
            console.log(error);
        }

        userTypeRedirect();
    }


    return (
        <div className="flexp">
            <h2>Moderate Article?</h2>
            <p>
                Approving this <i>"{artitleTitle}"</i> aricle will send it to the {(userType==="mod") ? "Analyst Article Queue" : "Public Article list"}.
            </p>

            {/* Only Moderator should see the below part */}
            {(userType === "mod")
                && <p>Only Moderator should see this</p>
            }

            <p>Approval?</p>
            <button type="button" onClick={handleYesApprov}>Yes</button>
            <button type="button" onClick={handleNoApprov}>No</button>
        </div>

    );
}

export default EditPage;