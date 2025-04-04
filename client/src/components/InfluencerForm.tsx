import { useState } from "react";
import { SocialMediaAccount, Influencer } from "../types";
import { createInfluencer } from "../services/api";
import "./InfluencerForm.css"; // Add a CSS file for styling

const InfluencerForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [accounts, setAccounts] = useState<SocialMediaAccount[]>([]);
  const [platform, setPlatform] = useState<"Instagram" | "TikTok">("Instagram");
  const [username, setUsername] = useState("");
  const [error, setError] = useState<string | null>(null);

  const addAccount = () => {
    if (!username) {
      setError("Username cannot be empty");
      return;
    }
    if (accounts.some(a => a.platform === platform)) {
      setError("Cannot add duplicate platform account");
      return;
    }
    setAccounts([...accounts, { platform, username }]);
    setUsername("");
    setError(null);
  };

  const handleSubmit = async () => {
    if (firstName.length > 50 || lastName.length > 50) {
      setError("First name or last name is too long");
      return;
    }
    if (accounts.length === 0) {
      setError("Please add at least one social media account");
      return;
    }
    const newInfluencer: Influencer = { firstName, lastName, socialAccounts: accounts };
    await createInfluencer(newInfluencer);
    alert("Influencer added");
    setFirstName("");
    setLastName("");
    setAccounts([]);
    setError(null);
  };

  const removeAccount = (index: number) => {
    setAccounts(accounts.filter((_, i) => i !== index));
  };

  return (
    <div className="influencer-form">
      <h2>Add Influencer</h2>
      <form>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            value={firstName}
            placeholder="First Name"
            onChange={e => setFirstName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            value={lastName}
            placeholder="Last Name"
            onChange={e => setLastName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Social Media Account</label>
          <select value={platform} onChange={e => setPlatform(e.target.value as any)}>
            <option>Instagram</option>
            <option>TikTok</option>
          </select>
          <input
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <button type="button" onClick={addAccount} className="add-account-btn">
            Add Account
          </button>
        </div>
        {error && <p className="error-message">{error}</p>}
        <ul className="accounts-list">
          {accounts.map((acc, i) => (
            <li key={i}>
              {acc.platform}: {acc.username}
              <button type="button" onClick={() => removeAccount(i)} className="remove-btn">
                Remove
              </button>
            </li>
          ))}
        </ul>
        <button type="button" onClick={handleSubmit} className="submit-btn">
          Save
        </button>
      </form>
    </div>
  );
};

export default InfluencerForm;