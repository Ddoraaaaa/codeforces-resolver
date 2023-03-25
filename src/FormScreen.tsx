import React, { useState } from 'react';
import { useContestContext } from './ContestContext';
import applyEvents from './utils/ProcessEvents';

interface FormScreenProps {
  onSubmit: () => void;
}

export const FormScreen: React.FC<FormScreenProps> = ({ onSubmit }) => {
  const { contestInfo, setContestInfo } = useContestContext();
  const [formValues, setFormValues] = useState(contestInfo);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: name === 'contestLog' ? value : parseInt(value) });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    applyEvents(formValues);
    setContestInfo(formValues);
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Contest Log:
        <textarea name="contestLog" onChange={handleChange} />
      </label>
      <label>
        Domain accounts
        <textarea name="domainAcc" onChange={handleChange} />
      </label>
      <label>
        Freeze Time:
        <input type="number" name="freezeTime" onChange={handleChange} />
      </label>
      <label>
        Number of Gold:
        <input type="number" name="goldCount" min={1} max={5} onChange={handleChange} />
      </label>
      <label>
        Number of Silver:
        <input type="number" name="silverCount" min={1} max={5} onChange={handleChange} />
      </label>
      <label>
        Number of Bronze:
        <input type="number" name="bronzeCount" min={1} max={5} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};