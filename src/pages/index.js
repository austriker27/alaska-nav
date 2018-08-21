import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    
    <Link to="/page-2/">Go to page 2</Link>
    <nav>
      <ul>
        <li>My Schedule & Bidding</li>
        <li>Safety</li>
          <ul>Reporting</ul>
              <li>I-21 Injury Reporting</li>
              <li>ASAP Reporting</li>
              <li>General ASAP Information</li>
              <li>Flight Attendant Incident Report</li>
          <li>Agriculture & Customs</li>
          <li>Known Crewmember</li>
          <li>Product Safety Data Search</li>
        <li>Training</li> 
        <ul>Administration</ul>
          <li>OJI and Leaves</li>
          <li>Pay and Benefits</li>
          <li>Performance</li>
          <li>Inflight Resource Directory</li>
          <li>Mobile and Web</li>
          <li>AFA</li>
        <li>Catering & Brand</li>
        <li>Hotels</li>
        <li>My Base</li>
        <li>Recognition</li>
        <li>My Leadership Team</li>
      </ul>
    </nav>
  </div>
)

export default IndexPage
