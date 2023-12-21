// StartupDetailModal.js
import React from 'react';

const StartupDetailModal = ({ startup, onClose }) => {
  return (
    <div className="absolute" style={{left: 300, top:100, backgroundColor: '#f5f5f5'}}>
      <div className=" p-8 rounded shadow">
        <button onClick={onClose} className="absolute top-0 right-0 p-4">&times;</button>
        <div style={{border: 'solid 1px grey', backgroundColor:'#ffffff', borderRadius:10, width:600, height:200}}>
          <div>
        <h2 className="text-lg font-bold mb-4">{startup.StartupName}</h2>
        </div>
        <hr/>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <div id='modal'>
        <div>City: <b>{startup.CityLocation}</b></div>
        <hr/>
        <div>Date: <b>{startup.Date}</b></div>
        <hr/>
        <div>Remarks: <b>{startup.Remarks}</b></div>
        
        </div>
        
        <div id='modal'>
        <div>Industry Vertical: <b>{startup.IndustryVertical}</b></div>
        <hr/>
        <div>Investors Name: <b>{startup.InvestorsName}</b></div>
        <hr/>
        <div>Investment Type:<b>{startup.InvestmentType}</b></div>
        <hr />
        </div>
        
        <div id='modal'>
        <div>Sub Vertical: <b>{startup.SubVertical}</b></div>
        <hr/>
        <div>Investment Amount: <b>{startup.AmountInUSD}</b></div>
        <hr/>
        </div>
        </div>
        </div>
        {/* Display other startup details here */}
      </div>
    </div>
  );
};

export default StartupDetailModal;
