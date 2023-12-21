// StartupCard.js
import React, {useState} from 'react';

const StartupCard = ({filteredStartups, onClick}) => {
  //console.log(filteredStartups);
  const data = filteredStartups;
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 12;
  const totalPages = Math.ceil(data.length / perPage); // Calculate total pages

  const sliceStart = (currentPage - 1) * perPage;
const sliceEnd = sliceStart + perPage;
const currentPageData = data.slice(sliceStart, sliceEnd);

const handlePreviousClick = () => {
  //count=count-10;
  setCurrentPage(Math.max(1, currentPage - 1));
};

const handleNextClick = () => {
  //count=count+10;
  setCurrentPage(Math.min(totalPages, currentPage + 1));
};

const pageNumbers = [...Array(totalPages).keys()].map((i) => i + 1);
const visiblePageNumbers = pageNumbers.slice(
  Math.max(currentPage - Math.floor(perPage / 2), 1),
  Math.min(currentPage + Math.floor(perPage / 2), totalPages)
);

  return (
    <div>
    <div className="grid grid-cols-3 gap-4" style={{padding:20}}>
    {/* {filteredStartups.map((startup) =>( */}
    {currentPageData.map((startup) => (
    <div key={startup._id} className="bg-white p-4 rounded shadow cursor-pointer" id='indv' onClick={() => onClick(startup)}>
      <h2 className="text-lg font-bold mb-2">{startup.StartupName}</h2>
      <p>{`City: ${startup.CityLocation}`}</p>
      
      <p>{`Investors Name: ${startup.InvestorsName}`}</p>
      <p>{`Funding Amount: ${startup.AmountInUSD}`}</p>
    </div>
    ))}
    </div>

    <div className="" style={{ display: "flex", justifyContent: "center" }}>
      <button className="pbtn" style={{borderTopLeftRadius:10, borderBottomLeftRadius:10}} onClick={handlePreviousClick}>Previous</button>
      {visiblePageNumbers.map((pageNumber) => (
        <button className="pbtn"
          key={pageNumber}
          style={{
            
          }}
          onClick={() => setCurrentPage(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}
      <button className="pbtn" style={{borderTopRightRadius:10,borderBottomRightRadius:10}} onClick={handleNextClick}>Next</button>
    </div>

    </div>
  );
};



export default StartupCard;
