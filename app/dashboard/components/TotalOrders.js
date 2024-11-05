import React from 'react';
import { Edit2, Trash2 } from "react-feather";



const B = () => {
    // Mock data
    const menuItems = [
        {
          name: "Crispy Fries",
          qty: 50,
          price: "₹60",
        },
        {
          name: "Chicken Nuggets",
          qty: 30,
          price: "₹80",
        },
      ];
  return(
    <div>
        <div className='menu-navigation'>
            
            <div className='categories' style={{marginLeft:'32%'}}>
                <button style={{backgroundColor: '#1ABC9C', color: 'white', border: 'none'}}>Starters</button>
                <button>Drinks</button>
                <button>Desserts</button>
                <button>Main Course</button>
                <button>All Items</button>
            </div>
            
        </div>

        <div style={{ padding: "20px" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid #ddd" }}>

                <th style={tableHeaderStyle}>Name</th>
                <th style={tableHeaderStyle}>Price</th>
                <th style={tableHeaderStyle}>Total Quantity</th>
                <th style={tableHeaderStyle}>Action</th>
              </tr>
            </thead>
            <tbody>
                {menuItems.map((item, index) => (
                <tr key={index} style={rowStyle}>
             
                  <td style={tableDataStyle}>{item.name}</td>
                  <td style={tableDataStyle}>{item.price}</td>
                  <td style={tableDataStyle}>{item.qty}</td>
                  <td style={tableDataStyle}>
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
