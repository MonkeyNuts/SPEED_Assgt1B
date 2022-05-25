import React from "react";
import SubmissionForm from "../components/SubmissionForm.js";
const SubmitArticle = () =>  {
     return (
      <div className="flexp">
        <h2>Submit Article</h2>
            <p>
                Please use the form below to submit an article for our review. If the article
                meets our acceptance criteria, then it will be approved and available for viewing 
                on the site.
            </p>
            <SubmissionForm/>
        </div>
    );
}
 
export default SubmitArticle;