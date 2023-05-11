import { useState } from 'react';
import SubProfile from './SubProfile';
import BusinessInfo from './BusinessInfo';
import Address from './Address';
import BankDetail from './BankDetail';
import Verified from './Verified';
import Service from './Service';

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabData = [
    { label: 'Profile', content: <SubProfile/>
    } ,
    { label: 'Business Info', content: <BusinessInfo/> },
    { label: 'Address', content: <Address/> },
    { label: 'Bank Details', content: <BankDetail/>},
    { label: 'Verification', content: <Verified/> },
    { label: 'Service Offered', content: <Service/> },
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div >
      {tabData.map((tab, index) => (
        
        <button
          key={index}
          id='tabs-btn'
          style={{marginBottom: '2vmax'}}
          className={index === activeTab ? 'active' : ''}
          onClick={() => handleTabClick(index)}
        >
          {tab.label}
        </button>
      ))}
      <div className="tab-content">{tabData[activeTab].content}</div>
      <style jsx>{`
        #tabs-btn{
          background-color: white;
          border: none;
          border-radius: 5px 5px 0 0;
          color: #333;
          cursor: pointer;
          padding: 10px;
          transition: background-color 0.3s ease;
          margin-right: 1vmax;
          font-weight: 500;
          transition: transform 0.3s ease; 
        }

        #tabs-btn.active {
          position: relative; /* set position to relative */
          color: #157347;
          transition: transform 0.3s ease; 
        }
        
        #tabs-btn.active::after {
          content: ""; /* create a pseudo-element for the underline */
          position: absolute; /* set position to absolute */
          bottom: -3px; /* place the underline just below the text */
          left: 0; /* align the underline to the left edge of the button */
          height: 2px; /* set the height of the underline */
          width: 100%; /* set the width of the underline to match the button */
          background-color: #157347; /* set the color of the underline */
          transition: transform 0.3s ease; /* add the transition effect */
          transform: scaleX(0); /* start with the underline scaled to 0 */
        }
        
        #tabs-btn.active:hover::after,
        #tabs-btn.active:focus::after {
          transform: scaleX(1); /* scale the underline up on hover or focus */
        }
        

        .tab-content {
          border: 1px solid #ddd;
          border-radius: 0 5px 5px 5px;
          padding: 10px;
        }
      `}</style>
    </div>
  );
};

export default TabComponent;
