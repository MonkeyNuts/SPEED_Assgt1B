import Styles from "../components/tablestyle.js";
import Table from "../components/evidencetable.js";
import tablecolumns from "../components/tablecolumns.js";
import Dropdown from "../components/Dropdown.js";
import axios from "axios";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";


const SEPractice = () => {

  const [datas, setData] = useState([]);
  const { register, handleSubmit } = useForm();

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


  const searchByTitle = async (datas) => {
    try {
      const searchResult = await axios.get(`http://localhost:5000/api/search/${datas.searchTitle}/false/false`);
      setData(searchResult.data);

    } catch (error) {
      console.log(error);
    }
  }


  /// Dropdown component handler
  const handleDropdown = async (event) => {
    // console.log("Event value: ", event.target.value);
    try {
      const data = await axios.get('http://localhost:5000/api/article');
      const articles = data.data;

      const filtered = articles.filter((article) => {
        const isTDD = (event.target.value === "TDD" ? "tdd" : "mob");
        return article.sepractice === isTDD
      });

      setData(filtered);

    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div>
      <h2>Select SE Practice to get evidence for the claimed benefits</h2>
      <div className="inline">
        <Dropdown handleDropdown={handleDropdown} />
        <form onSubmit={handleSubmit(searchByTitle)}>
          <input {...register("searchTitle")} className="search" type="text" placeholder="Search Title.." required />
        </form>
      </div>
      <Styles>
        <Table
          data={datas}
          columns={tablecolumns}
          userType="pub"
        />
      </Styles>
    </div>
  );
}

export default SEPractice; 