import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    
    <Link to="/page-2/">Go to page 2</Link>
    <nav>
      <div class="nav-mobile">
        <a id="nav-toggle" href="#!"><span></span></a>
      </div>
      <ul class="nav-list">
        <li><a href="#!">My Schedule & Bidding</a></li>
        <li><a href="#!">Safety</a></li>
          <ul class="nav-dropdown">
            <li><a href="#!">Reporting</a></li>
              <ul class="nav-dropdown">
                <li><a href="#!">I-21 Injury Reporting</a></li>
                <li><a href="#!">ASAP Reporting</a></li>
                <li><a href="#!">General ASAP Information</a></li>
                <li><a href="#!">Flight Attendant Incident Report</a></li>
              </ul>
            <li><a href="#!">Agriculture & Customs</a></li>
            <li><a href="#!">Known Crewmember</a></li>
            <li><a href="#!">Product Safety Data Search</a></li>
          </ul>
        <li><a href="#!">Training</a></li>
        <li><a href="#!">Administration</a></li>
          <ul class="nav-dropdown">
            <li><a href="#!">OJI and Leaves</a></li>
            <li><a href="#!">Pay and Benefits</a></li>
            <li><a href="#!">Performance</a></li>
            <li><a href="#!">Inflight Resource Directory</a></li>
            <li><a href="#!">Mobile and Web</a></li>
            <li><a href="#!">AFA</a></li>
          </ul>
        <li><a href="#!">Catering & Brand</a></li>
        <li><a href="#!">Hotels</a></li>
        <li><a href="#!">My Base</a></li>
        <li><a href="#!">Recognition</a></li>
        <li><a href="#!">My Leadership Team</a></li>
      </ul>
    </nav>

    <ul class="bottom-nav">
      <li><a href="#home" class="active">My Schedule & Bidding</a></li>
      <li><a href="#news">Safety</a></li>
      <li><a href="#contact">Administration</a></li>
      <li><a href="#contact">More</a></li>
    </ul> 

  </div>
)

export default IndexPage
