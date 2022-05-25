import Styles from "../components/tablestyle.js";
import Table from "../components/evidencetable.js";
import tablecolumns from "../components/tablecolumns.js";
import Dropdown from "../components/Dropdown.js";
import axios from "axios";
import { useState, useEffect } from "react";


const AnalystList = () => {

  const [datas, setData] = useState([]);

  useEffect(() => {
    const getDT = async () => {
      try {
        const data = await axios.get('http://localhost:5000/api/analyst/article');
        setData(data.data);

      } catch (error) {
        console.log(error);
      }
    }
    getDT();
  }, []);

  return (
    <div>
      <h2>Submitted Articles awaiting Analyst Review</h2>
      <div className="inline">
      <Dropdown />
      <input className="search" type="text" placeholder="Search Title.."></input>
      </div>
      <Styles>
        <Table
          data={datas}
          columns={tablecolumns}
        />
      </Styles>
    </div>
  );
}

export default AnalystList; 