import React from 'react';
import { Edit2, Trash2 } from "react-feather";
import nuggets from '../images/nugg.png';
import fries from '../images/fries.png';


const B = () => {
    // Mock data
    const menuItems = [
        {
          image: {fries}, // Replace with actual image URLs
          name: "Crispy Fries",
          description: "Crispy, golden brown fries...",
          category: "Starters",
          price: "₹60",
        },
        {
          image: {nuggets}, // Replace with actual image URLs
          name: "Chicken Nuggets",
          description: "Chicken nuggets are bite-sized...",
          category: "Starters",
          price: "₹80",
        },
      ];
  return(
    <div>
        <div className='menu-navigation'>
            Menu
            <div className='categories'>
                <button style={{backgroundColor: '#1ABC9C', color: 'white', border: 'none'}}>Starters</button>
                <button>Drinks</button>
                <button>Desserts</button>
                <button>Main Course</button>
                <button>All Items</button>
            </div>
            <button style={{fontSize:'22px', backgroundColor: '#1ABC9C', color: 'white', border: 'none', borderRadius:'49%', padding: '5px', marginRight:'10px'}}>+</button>
        </div>

        <div style={{ padding: "20px" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid #ddd" }}>

                <th style={tableHeaderStyle}>Name</th>
                <th style={tableHeaderStyle}>Description</th>
                <th style={tableHeaderStyle}>Category</th>
                <th style={tableHeaderStyle}>Price</th>
                <th style={tableHeaderStyle}>Action</th>
              </tr>
            </thead>
            <tbody>
                {menuItems.map((item, index) => (
                <tr key={index} style={rowStyle}>
             
                  <td style={tableDataStyle}>{item.name}</td>
                  <td style={tableDataStyle}>{item.description}</td>
                  <td style={tableDataStyle}>{item.category}</td>
                  <td style={tableDataStyle}>{item.price}</td>
                  <td style={{marginTop:'10px', display:'flex'}}>
                    <Edit2 style={{ cursor: "pointer", marginRight: "10px" }} />
                    <Trash2 style={{ color: "red", cursor: "pointer" }} />
                  </td>
                </tr>
              ))}
            </tbody>
        </table>
        </div>
    </div>
  );
};

// Define table styles
const tableHeaderStyle = {
    textAlign: "left",
    padding: "12px",
    fontSize: "14px",
    fontWeight: "bold",
    backgroundColor: "#f9f9f9",
  };
  
  const tableDataStyle = {
    padding: "12px",
    textAlign: "left",
    verticalAlign: "middle",
    borderBottom: "1px solid #ddd",
  };
  
  const rowStyle = {
    borderBottom: "1px solid #ddd",
  };

export default B;
