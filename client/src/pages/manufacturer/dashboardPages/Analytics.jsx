import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

function Analytics() {
  // State variables for tracking analytics data
  const [pageviews, setPageviews] = useState(0);
  const [users, setUsers] = useState([]);
  const [conversionRate, setConversionRate] = useState(0);
  const [timeOnPage, setTimeOnPage] = useState(0);
  const [bounceRate, setBounceRate] = useState(0);
  const [referralSources, setReferralSources] = useState([]);

  // Fetch analytics data from server
  useEffect(() => {
    fetch("/api/analytics")
      .then((res) => res.json())
      .then((data) => {
        setPageviews(data.pageviews);
        setUsers(data.users);
        setConversionRate(data.conversionRate);
        setTimeOnPage(data.timeOnPage);
        setBounceRate(data.bounceRate);
        setReferralSources(data.referralSources);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="bg-gray-300">
    <div className="mt-16 container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Analytics Dashboard</h1>

      {/* Pageviews chart */}
      <h2 className="text-2xl font-bold mb-4">Pageviews</h2>
      <div className="bg-white rounded-lg shadow p-8 mb-8">
        <LineChart width={500} height={300} data={pageviews}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="pageviews" stroke="#8884d8" />
        </LineChart>
      </div>

      {/* User demographics */}
      <h2 className="text-2xl font-bold mb-4">User Demographics</h2>
      <div className="bg-white rounded-lg shadow p-8 mb-8">
        <p className="font-bold mb-2">Age:</p>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.age}</li>
          ))}
        </ul>
        <p className="font-bold mb-2 mt-4">Gender:</p>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.gender}</li>
          ))}
        </ul>
      </div>

      {/* Conversion rate */}
      <h2 className="text-2xl font-bold mb-4">Conversion Rate</h2>
      <div className="bg-white rounded-lg shadow p-8 mb-8">
        <p>{conversionRate}%</p>
      </div>

      {/* Time on page */}
      <h2 className="text-2xl font-bold mb-4">Time on Page</h2>
      <div className="bg-white rounded-lg shadow p-8 mb-8">
        <p>{timeOnPage} seconds</p>
      </div>

      {/* Bounce rate */}
      <h2 className="text-2xl font-bold mb-4">Bounce Rate</h2>
      <div className="bg-white rounded-lg shadow p-8 mb-8">
        <p>{bounceRate}%</p>
      </div>

      {/* Referral sources */}
      <h2>Referral Sources</h2>
      <ul>
        {referralSources.map((source) => (
          <li key={source.id}>{source.name}</li>
        ))}
      </ul>
    </div>
    </div>
  );
}

export default Analytics;
