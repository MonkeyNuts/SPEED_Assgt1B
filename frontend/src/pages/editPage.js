import React from "react";
import { useParams } from "react-router-dom";

const EditPage = () => {

    // Get Article ID
    const { id } = useParams();

    console.log("Article ID: ", id);

    return (
        <div className="flexp">
            <h2>Moderate Article?</h2>
            <p>
                Approving this aricle will send it to the Analyst Article Queue.
            </p>
            <p>Approval?</p>
            <button type="button" onClick={() => {}}>Yes</button>
            <button type="button" onClick={() => {}}>No</button>
        </div>

    );
}

export default EditPage;