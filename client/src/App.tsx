import React from 'react';
import InfluencerForm from './components/InfluencerForm';
import InfluencerList from './components/InfluencerList';
function App() {
  return (
    <div>
      <h1>Influencer Management Web Application</h1>
      <InfluencerForm />
      <hr />
      <InfluencerList />
    </div>
  );
}
export default App;
