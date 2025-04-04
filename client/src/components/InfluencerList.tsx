import { useEffect, useState } from "react";
import { Influencer } from "../types";
import { getInfluencers } from "../services/api";
import "./InfluencerList.css"; // Add a CSS file for styling

const InfluencerList = () => {
  const [influencers, setInfluencers] = useState<Influencer[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInfluencers = async () => {
      try {
        const response = await getInfluencers();
        setInfluencers(response.data as Influencer[]); // Explicitly cast response.data
      } catch (err) {
        setError("Failed to fetch influencers. Please try again later.");
      }
    };
    fetchInfluencers();
  }, []);

  return (
    <div className="influencer-list">
      <h2>Influencer List</h2>
      {error && <p className="error-message">{error}</p>}
      {influencers.length === 0 ? (
        <p>No influencers found.</p>
      ) : (
        <ul className="influencers">
          {influencers.map((influencer, index) => (
            <li key={index} className="influencer-item">
              <div className="influencer-details">
                <h3>
                  {influencer.firstName} {influencer.lastName}
                </h3>
                <ul className="social-accounts">
                  {influencer.socialAccounts.map((account, i) => (
                    <li key={i}>
                      {account.platform}: {account.username}
                    </li>
                  ))}
                </ul>
              </div>
              <button className="delete-btn">Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default InfluencerList;