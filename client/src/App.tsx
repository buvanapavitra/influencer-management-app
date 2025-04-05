import React, { useState, useEffect } from "react";
import InfluencerList from "./components/InfluencerList";
import { Influencer } from "./types";
import { getInfluencers } from "./services/api";

const App = () => {
  const [influencers, setInfluencers] = useState<Influencer[]>([]);

  const fetchInfluencers = async (name?: string) => {
    try {
      const response = await getInfluencers(name);
      setInfluencers(response.data as Influencer[]);
    } catch (err) {
      console.error("Failed to fetch influencers:", err);
    }
  };

  useEffect(() => {
    fetchInfluencers();
  }, []);

  return (
    <div>     
      <InfluencerList
        influencers={influencers}
        onSearch={fetchInfluencers}
        onSave={fetchInfluencers}
      />
    </div>
  );
};

export default App;
