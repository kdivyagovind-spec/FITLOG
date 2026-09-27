import { useState } from "react";

function Calculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("female");

  const [bmi, setBmi] = useState(null);
  const [bmr, setBmr] = useState(null);

  function calculate() {
    const w = Number(weight);
    const h = Number(height);
    const a = Number(age);

    if (!w || !h || !a) {
      return;
    }

    const heightMeters = h / 100;

    const bmiValue =
      w / (heightMeters * heightMeters);

    let bmrValue;

    if (gender === "male") {
      bmrValue =
        10 * w +
        6.25 * h -
        5 * a +
        5;
    } else {
      bmrValue =
        10 * w +
        6.25 * h -
        5 * a -
        161;
    }

    setBmi(bmiValue.toFixed(1));
    setBmr(Math.round(bmrValue));
  }

  return (
    <div className="page">

      <div className="page-header">
        <p className="eyebrow">FITNESS CALCULATOR</p>
        <h1>Know your numbers.</h1>
        <p>
          Enter your basic details to calculate BMI and estimated BMR.
        </p>
      </div>

      <div className="calculator-layout">

        <div className="calculator-form">

          <div className="form-field">
            <label>Weight (kg)</label>

            <input
              type="number"
              placeholder="e.g. 60"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>

          <div className="form-field">
            <label>Height (cm)</label>

            <input
              type="number"
              placeholder="e.g. 165"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>

          <div className="form-field">
            <label>Age</label>

            <input
              type="number"
              placeholder="e.g. 20"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>

          <div className="form-field">
            <label>Gender</label>

            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="female">Female</option>
              <option value="male">Male</option>
            </select>
          </div>

          <button
            className="primary-btn full-btn"
            onClick={calculate}
          >
            Calculate
          </button>

        </div>

        <div className="calculator-results">

          <div className="result-card">
            <span>BMI</span>

            <strong>
              {bmi || "--"}
            </strong>

            <p>
              Body Mass Index
            </p>
          </div>

          <div className="result-card">
            <span>BMR</span>

            <strong>
              {bmr || "--"}
            </strong>

            <p>
              Estimated calories/day
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Calculator;