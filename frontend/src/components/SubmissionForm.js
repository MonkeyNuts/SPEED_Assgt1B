import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const SubmissionForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const [result, setResult] = useState("");

  const onSubmit = async (data) => {
    // setResult(JSON.stringify(data));

    try {
      await axios.post('http://localhost:5000/api/article', {
        "title": data.title,
        "authors": data.authors,
        "source": data.source,
        "pubyear": data.pubyear,
        "doi": data.doi,
        "claim": data.claim==="" ? "product quality improvement" : data.claim,
        "evidence": data.evidence==="" ? "weak support" : data.evidence,
        "sepractice": data.sepractice==="" ? "tdd" : data.sepractice,
      });
      
    } catch (error) {
      console.log(error);
      setResult(error);
    }

    setResult("New Article created!");

    // Reset Form
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    
      <input {...register("title")} placeholder="Title" required />
      <p><input {...register("authors")} placeholder="Authors" required /></p>
      <p><input {...register("source")} placeholder="Source" required /></p> 
      <p><input {...register("pubyear")} placeholder="Publication Year" required /></p>
      <p><input {...register("doi")} placeholder="DOI" required /></p>

      <select {...register("claim")}>
        <option value="">Select Claim...</option>
        <option value="code quality improvement">Code Quality Improvement</option>
        <option value="product quality improvement">Product Quality Improvement</option>
      </select>
      <br/>
      <br/>

      <select {...register("evidence")} >
        <option value="">Select Evidence...</option>
        <option value="weak support">Weak Support</option>
        <option value="strong support">Strong Support</option>
        <option value="weak against">Weak Against</option>
        <option value="strong against">Strong Against</option>
      </select>
      <br/>
      <br/>

     
      <select {...register("sepractice")}>
        <option value="">Select SE practice...</option>
        <option value="tdd">TDD</option>
        <option value="mob">Mob Programming</option>
      </select>

      <p>{result}</p>

      <input className="submit" type="submit" />
    </form>
  );
}
export default SubmissionForm;