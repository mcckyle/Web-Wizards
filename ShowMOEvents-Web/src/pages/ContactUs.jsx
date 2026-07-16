//****************************************************************************************
// Filename: ContactUs.jsx
// Date: 15 July 2026
// Author: Kyle McColgan
// Description: This file contains the ContactUs component for ShowMOEvents.
//****************************************************************************************

import React from 'react';
import Aishu from '../assets/images/Aishu.jpg';
import Zack from '../assets/images/Zack.jpg';
import Kyle from '../assets/images/Kyle.avif';

const ConnectWithUs = () => {
  const teamMembers = [
    {
      name: 'Aishwarya S',
      linkedin: 'https://www.linkedin.com/in/aishwaryasenthilkumar',
      github: 'https://github.com/AishuSenthil',
      photo: Aishu, // Update with the actual path to the image
    },
    {
      name: 'Zack C',
      linkedin: 'https://www.linkedin.com/in/zacharylcain',
      github: 'https://github.com/cain9209',
      photo: Zack, // Update with the actual path to the image
    },
    {
      name: 'Kyle M',
      linkedin: 'https://www.linkedin.com/in/kylemccolgan',
      github: 'https://github.com/mcckyle',
      photo: Kyle, // Update with the actual path to the image
    }
  ];

  return (
    <div>
      <h2>Connect with us</h2>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px' }}>
        {teamMembers.map((member, index) => (
          <div key={index} style={{ textAlign: 'center', maxWidth: '200px' }}>
            <img
              src={member.photo}
              alt={member.name}
              style={{
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                objectFit: 'cover',
                marginBottom: '10px',
              }}
            />
            <div>{member.name}</div>
            <div>
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                  alt="LinkedIn"
                  style={{ width: '24px', marginRight: '10px' }}
                />
              </a>
              <a href={member.github} target="_blank" rel="noopener noreferrer">
                <img
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                  alt="GitHub"
                  style={{ width: '24px' }}
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConnectWithUs;
