import { useEffect, useState } from "react";

const ResidentDetails = ({ residentUrl }) => {
    const [residentData, setResidentData] = useState(null);
    useEffect(() => {
      const fetchResidentData = async () => {
        try {
          const response = await fetch(residentUrl);
          const data = await response.json();
          setResidentData(data);
        } catch (error) {
          console.error('Error');
        }
      };
  
      fetchResidentData();
    }, [residentUrl]);
    return (
      <div className="planet-residents">
        {residentData ? (
          <div className="peopledetails">
            <p>Name: {residentData.name}</p>
            <p>gender: {residentData.gender}</p>
            <p>Height: {residentData.height}</p>
            <p>Mass: {residentData.mass}</p>
          </div>
        ) : (
          <p>Loading resident data...</p>
        )}
      </div>
    );
  };
  
  export default ResidentDetails;