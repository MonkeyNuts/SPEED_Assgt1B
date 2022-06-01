import { useState, useEffect } from "react";
import axios from "axios";


const ModEditPage = ({ articleID, handleYesApprov, handleNoApprov, userTypeRedirect }) => {

    /// Use this data statement to keep track of choosed Article datas
    const [datas, setData] = useState({});


    useEffect(() => {
        const getDt = async () => {
            try {
                const data = await axios.get(`/api/article/${articleID}`);
                // console.log("Datas: ", data.data);
                setData(data.data);
            } catch (error) {
                console.log(error);
            }
        }

        getDt();
    }, []);


    /// Update button logic
    const onSubmitForm = async (e) => {
        // console.log("Submiting: ", datas);
        e.preventDefault();

        try {
            const data = await axios.patch(`/api/article/${articleID}`, { ...datas });
            console.log("Datas: ", data.data);
            // setData(data.data);

        } catch (error) {
            console.log(error);
        }

        // Redirect back to Moderator List page
        userTypeRedirect();
    }


    return (
        <form onSubmit={onSubmitForm}>

            <input name="title" value={datas.title} placeholder="Title" onChange={(e) => setData({ ...datas, title: e.target.value })} required />
            <p><input name="authors" value={datas.authors} placeholder="Authors" onChange={(e) => setData({ ...datas, authors: e.target.value })} required /></p>
            <p><input name="source" value={datas.source} placeholder="Source" onChange={(e) => setData({ ...datas, source: e.target.value })} required /></p>
            <p><input name="pubyear" value={datas.pubyear} placeholder="Publication Year" onChange={(e) => setData({ ...datas, pubyear: e.target.value })} required /></p>
            <p><input name="doi" value={datas.doi} placeholder="DOI" onChange={(e) => setData({ ...datas, doi: e.target.value })} required /></p>

            <select name="claim" value={datas.claim} onChange={(e) => setData({ ...datas, claim: e.target.value })}>
                <option value="">Select Claim...</option>
                <option value="code quality improvement">Code Quality Improvement</option>
                <option value="product quality improvement">Product Quality Improvement</option>
            </select>
            <br />
            <br />

            <select name="evidence" value={datas.evidence} onChange={(e) => setData({ ...datas, evidence: e.target.value })}>
                <option value="">Select Evidence...</option>
                <option value="weak support">Weak Support</option>
                <option value="strong support">Strong Support</option>
                <option value="weak against">Weak Against</option>
                <option value="strong against">Strong Against</option>
            </select>
            <br />
            <br />


            <select name="sepractice" value={datas.sepractice} onChange={(e) => setData({ ...datas, sepractice: e.target.value })}>
                <option value="">Select SE practice...</option>
                <option value="tdd">TDD</option>
                <option value="mob">Mob Programming</option>
            </select>

            <div className="formbuttons">
            {/* UPDATE Button */}
            <button className="fbuttons" type="submit" >Update</button>

            {/* APPROVE Button */}
            <button className="fbuttons" type="button" onClick={handleYesApprov}>Approve</button>

            {/* DELETE Button */}
            <button className="fbuttons" type="button" onClick={handleNoApprov}>Delete</button>
            </div>
        </form>
    );
}

export default ModEditPage;