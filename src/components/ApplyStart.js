import React from 'react';
import { Link } from 'react-router-dom';


const ApplyStart = props => {
  return (
      <div>
       <script type='text/javascript' id='jovscript' src='//s3.amazonaws.com/jotrack-staging/rg7s/job-apply-start.js'></script>  
    <div>
      <h3>ApplyStart</h3>
      <p> Fill your details </p>
      <Link to="/jobs/apply-finish"> Apply Finish </Link>
    </div>
    </div>
  );
};

export default ApplyStart;