import React from 'react';
import { Link } from 'react-router-dom';

const Jobs = props => {
  return (
      <div>
       <script type='text/javascript' id='jovscript' src='//s3.amazonaws.com/jotrack-staging/rg7s/job-view.js'></script>  
    <div>
      <h3>Job View</h3>
      <Link to="/jobs/apply-start"> Apply for this job </Link>
    </div>
    </div>
  );
};

export default Jobs;