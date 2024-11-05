import React from 'react';

  // Static table data for now (remove setTables since it's not used)
const tables = [
    { id: 1, totalSeats: 4, availableSeats: 2, status: 'selected' },
    { id: 2, totalSeats: 4, availableSeats: 4, status: 'available' },
    { id: 3, totalSeats: 4, availableSeats: 0, status: 'booked' },
    { id: 4, totalSeats: 6, availableSeats: 2, status: 'selected' },
  ];

const A = () => {
  return( 
  <div>
    <section className="table-controls">
        <input type="text" placeholder="Search..." className="search-input" />
        <div className="table-status-labels">
          <div className="status-box available">
            <div className="status-indicator available-indicator"></div>
            <span>Table Available</span>
          </div>
          <div className="status-box booked">
            <div className="status-indicator booked-indicator"></div>
            <span>Table Booked</span>
          </div>
          <div className="status-box selected">
            <div className="status-indicator selected-indicator"></div>
            <span>Selected seat Available</span>
          </div>
        </div>
    </section>

    <section className="table-status-section">
        <div className="table-container">
          {tables.map((table) => (
            <div 
              key={table.id} 
              className={`table-box ${table.status}`}
            >
              <h3>0{table.id}</h3>
              {table.status === 'selected' && (
                <>
                  <p style={{marginBottom: '-10px'}}>Total Seats: {table.totalSeats}</p>
                  <p style={{marginBottom: '5px'}}>Available Seats: {table.availableSeats}</p>
                </>
              )}
            </div>
          ))}
        </div>
    </section>
  </div>
  );
};

export default A;
