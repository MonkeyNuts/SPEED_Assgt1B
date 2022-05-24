import articles from "../dummydata/articles.js";
import Styles from "../components/tablestyle.js";
import Table from "../components/evidencetable.js";
import tablecolumns from "../components/tablecolumns.js";
import Dropdown from "../components/Dropdown.js";
import axios from "axios";
import { useState, useEffect } from "react";


const SEPractice = () => {

  const [datas, setData] = useState([]);

  useEffect(() => {
    const getDT = async () => {
      try {
        const data = await axios.get('http://localhost:5000/api/article');
        setData(data.data);

      } catch (error) {
        console.log(error);
      }
    }
    getDT();
  }, []);


  return (
    <div>
      <h2>Select SE Practice to get evidence for the claimed benefits</h2>
      <Dropdown />
      <Styles>
        <Table
          data={datas}
          columns={tablecolumns}
        />
      </Styles>
    </div>
  );
}

export default SEPractice; 