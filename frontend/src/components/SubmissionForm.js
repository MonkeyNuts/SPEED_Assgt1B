import React, { useState } from "react";
import { useForm } from "react-hook-form";
const SubmissionForm = () => {
  const { register, handleSubmit } = useForm();
  const [result, setResult] = useState("");
  const onSubmit = (data) => setResult(JSON.stringify(data));
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    
      <input {...register("title")} placeholder="Title" />
      <p><input className="inputs" {...register("authors")} placeholder="Authors" /></p>
      <p><input className="inputs" {...register("source")} placeholder="Source" /></p> 
      <p><input className="inputs" {...register("pubyear")} placeholder="Publication Year" /></p>
      <p><input className="inputs" {...register("doi")} placeholder="DOI" /></p>
     
      <select {...register("sepractice")}>
        <option value="">Select SE practice...</option>
        <option value="TDD">TDD</option>
        <option value="Mob Programming">Mob Programming</option>
      </select>
      <p>{result}</p>
      <input type="submit" />
    </form>
  );
}
export default SubmissionForm;