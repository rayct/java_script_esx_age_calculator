// Version: 1.0
// An example of how the program can be written in JavaScript with React and JSX:
// Note that this program uses the moment library for date/time manipulation.

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';

function App() {
  const [birthdate, setBirthdate] = useState('');
  const [age, setAge] = useState(null);
  const [daysToNextBirthday, setDaysToNextBirthday] = useState(null);

  const handleInputChange = (event) => {
    setBirthdate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const now = moment();
    const birthdateMoment = moment(birthdate, 'DD/MM/YYYY');
    const ageYears = now.diff(birthdateMoment, 'years');
    const nextBirthday = birthdateMoment.add(ageYears + 1, 'years');
    const daysToNextBirthday = nextBirthday.diff(now, 'days');
    setAge(ageYears);
    setDaysToNextBirthday(daysToNextBirthday);
  };

  return (
    <div>
      <h1>Age Calculator</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your date of birth (format: DD/MM/YYYY):
          <input type="text" value={birthdate} onChange={handleInputChange} />
        </label>
        <br />
        <button type="submit">Calculate Age</button>
      </form>
      {age !== null && (
        <p>You are {age} years old.</p>
      )}
      {daysToNextBirthday !== null && (
        <p>There are {daysToNextBirthday} days until your next birthday.</p>
      )}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
