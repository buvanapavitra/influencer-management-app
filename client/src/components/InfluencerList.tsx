import React, { useState } from "react";
import { Influencer } from "../types";
import "./InfluencerList.css";
import InfluencerForm from "./InfluencerForm";

interface Props {
  influencers: Influencer[];
  onSearch: (name?: string) => void;
  onSave: () => void;
}

const InfluencerList = ({ influencers, onSearch, onSave }: Props) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <div className="influencer-list">
      <h1><center>Influencer Management Web Application</center></h1>
      <InfluencerForm onSave={async () => await onSave()} />

      <h2>Influencer List</h2>
      <div className="search-container">
  <input
    type="text"
    placeholder="Search by name"
    value={searchQuery}
    onChange={handleSearchChange}
    className="search-input"
  />
</div>
      {influencers.length === 0 ? (
        <p>No influencers found.</p>
      ) : (
        <ul className="influencers"><br />
          {influencers.map((influencer) => (
            <li key={influencer.id} className="influencer-item">
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
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default InfluencerList;
