import React from "react";
import "./result.css";

const ProgressBar = ({ resultData }) => {
  return (
    <div>
      <div className="prgress-row">
        {resultData.map((data, index) => (
          <div key={index} className="progress-bar">
            <div
              className="progress"
<<<<<<< HEAD
              style={{
                width: `${data.percentage}%`,
                background: data.color,
              }}
=======
              style={{ width: `${data.percentage}%`, background: data.color }}
>>>>>>> ecdb7a54ff64c740f74252557cb0104340d3c227
            >
              {data.label} ({data.percentage}%)
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default ProgressBar;
=======
export default ProgressBar;
>>>>>>> ecdb7a54ff64c740f74252557cb0104340d3c227
