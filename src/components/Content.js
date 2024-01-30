

import LineChart from "./Chart/LineChart";
import PieChart from "./Chart/PieChart";
import FaceBook from './icons/facebook.svg'
import Instagram from './icons/instagram.svg'
import Twitter from './icons/twitter.svg'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
const Content = () => {
  const [tableData, setTableData] = useState([]);
  const [Pdata, setPdata] = useState([]);
  const [lineData, setLineData] = useState([]);
  
  //table chart
  const fetchTableData = async () => {
    try {

      const response = await axios.get('http://localhost:3001/api/table');
      console.log(response,"response table")

      setTableData(response.data);
    } catch (error) {
      
      console.error('Error fetching data:', error);
    }
  };
  //pie chart fetching
  const fetchPieData = async () => {
    try {

      const response = await axios.get('http://localhost:3001/api/pie-chart');
      console.log(response.data,"response pie..... ")

      setPdata(response.data);
    } catch (error) {
      
      console.error('Error fetching data:', error);
    }
  };


  const fetchLineData = async () => {
    try {

      const response = await axios.get('http://localhost:3001/api/graph');
      console.log(response.data,"responselineeeeeeeeeeeeeeee..... ")

      setLineData(response.data);
    } catch (error) {
      
      console.error('Error fetching data:', error);
    }
  };



  useEffect(() => {
    fetchPieData()
    fetchLineData();
    fetchTableData();
  }, []); 
  const data = [12, 19, 3, 5, 2, 3];
  const labels = ["January", "February", "March", "April", "May", "June"];

  // const Pdata = [30, 20, 15, 10, 25];
  // const Plabels = ["Red", "Blue", "Yellow", "Green", "Purple"];

 
  return (
    <div className="content">
      <div className="chart">
        <div className="chart-container">
          <LineChart data={lineData} labels={labels} chartId="chart12" />
        </div>
        <div className="chart-container__Analytics">
          <PieChart data={Pdata}  chartId="chart13" />
        </div>
      </div>
      <div className="table">
        {/* table starting */}
        <div className="table-container">
          <table className="striped-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th> Quantity</th>
                <th>Price</th>
                {/* Add more table headers based on your data */}
              </tr>
            </thead>
            <tbody>
              {tableData.map((item, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "even-row" : "odd-row"}
                >
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price}</td>
                  {/* Add more table data based on your data structure */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="profile-container">
          <img
            className="profile-image"
            src="https://images.unsplash.com/photo-1558730234-d8b2281b0d00?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbiUyMGJsYWNrJTIwYW5kJTIwd2hpdGV8ZW58MHx8MHx8fDA%3D"
            alt="profile"
          />
          <h6>John Doe</h6>
          <p>CEO</p>
          <div style={{ display: "flex", gap: "5px",width:'100%',alignItems:'center',justifyContent:'center' }}>
          <img style={{width:'18%'}} src={FaceBook} alt="facebook"/>
          <img style={{width:'18%'}} src={Instagram} alt="facebook"/>
          <img style={{width:'18%'}} src={Twitter} alt="facebook"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
