import React from 'react';

const AnalyticsDashboard = () => {
  
  const analyticsData = {
    totalPosts: 100,
    totalUsers: 500,
    totalComments: 1000,
  };

  return (
    <div>
      <h2>Analytics Dashboard</h2>
      <p>Total Posts: {analyticsData.totalPosts}</p>
      <p>Total Users: {analyticsData.totalUsers}</p>
      <p>Total Comments: {analyticsData.totalComments}</p>
    </div>
  );
};

export default AnalyticsDashboard;
