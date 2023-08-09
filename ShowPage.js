import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ShowPage = () => {
  const { id } = useParams();
  const [showDetails, setShowDetails] = useState(null);

  useEffect(() => {
    fetchShowDetails();
  }, [id]);

  const fetchShowDetails = async () => {
    try {
      const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
      const data = await response.json();
      setShowDetails(data);
    } catch (error) {
      console.error("Error fetching show details:", error);
    }
  };

  if (!showDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <img
        src={showDetails.image.medium}
        alt={showDetails.name}
        className="w-72 h-auto"
      />
      <div
        dangerouslySetInnerHTML={{ __html: showDetails.summary }}
        className="mt-4"
      />
      <Link to="/">
        <button className="mx-2 border border-gray-300 rounded-md px-3 hover:bg-green-200 focus:outline-none focus:border-blue-500">
          Back
        </button>
      </Link>
    </div>
  );
};

export default ShowPage;
