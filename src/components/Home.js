import { Link } from '@material-ui/core';
import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const home = () => {
  return (
    <div class='body'>
      <h1 class='h1'>Repreive</h1>
      <div class='container'>
        <div id='first'>
          <Card style={{ width: '18rem' }}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <button class='button'>
                  <a href='/contact'>Contact and Helpline</a>
                </button>
              </ListGroup.Item>
              <ListGroup.Item>
                <button class='button'>
                  <a href='/notification'>Notifications and Advisiories</a>
                </button>
              </ListGroup.Item>
              <ListGroup.Item>
                <button class='button'>
                  <a href='/hospital'>Hospital Dashboard</a>
                </button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </div>

        <div id='second'>
          <p class='para'>
            It is an infectious disease caused by a new strain of coronavirus
            which was discovered in Wuhan, China in December 2019.It is believed
            to have zoonotic origins and has close genetic similarity to bat
            coronaviruses, suggesting it emerged from a bat-borne virus. There
            is no evidence yet to link an intermediate animal reservoir, such as
            a pangolin, to its introduction to humans.Since, it’s discovery it
            has spread rapidly across the globe and there are currently
            36,361,054 confirmed cases of COVID19 with 1,056,186 deaths reported
            as of date.
          </p>
          <p class='para'>
            Timeline for Key Events<br></br>
            <br></br> 31 Dec 2019<br></br> WHO’s Country Office in the People’s
            Republic of China picked up a media statement by the Wuhan Municipal
            Health Commission from their website on cases of ‘viral pneumonia’
            in Wuhan, People’s Republic of China.<br></br>5 Jan 2020<br></br>
            WHO issued its first Disease Outbreak News report.<br></br> 9 Jan
            2020 <br></br>WHO reported that Chinese authorities have determined
            that the outbreak is caused by a novel coronavirus.<br></br> 13 Jan
            2020<br></br> The Ministry of Public Health in Thailand reported an
            imported case of lab-confirmed novel coronavirus from Wuhan, the
            first recorded case outside of the People’s Republic of China.
            <br></br> 30 Jan 2020<br></br> The Director-General declared the
            novel coronavirus outbreak a public health emergency of
            international concern (PHEIC), WHO's highest level of alarm. 11 Mar
            2020 Deeply concerned both by the alarming levels of spread and
            severity, and by the alarming levels of inaction, WHO made the
            assessment that COVID-19 could be characterized as a pandemic.
          </p>
        </div>
      </div>
    </div>
  );
};

export default home;
