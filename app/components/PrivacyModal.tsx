import React, { useState } from 'react';

const PrivacyModal: React.FC<{ onAgree: () => void }> = ({ onAgree }) => {
  return (
    <div style={modalStyles.overlay}>
      <div style={modalStyles.modal}>
        <div style={modalStyles.header}>
          <h2>Privacy Policy</h2>
        </div>

        <div style={modalStyles.main}>
          <p>
            This Privacy Policy describes the Search Ai website, stay.ai (the “Website”), and outlines how Search Ai respects the privacy of all visitors to the extent permitted by law. The purpose of this Privacy Policy is to inform you about the following:<br />
            <div style={modalStyles.content}>
              *   The information, including personal information, we may collect from you when you visit our Website, respond to our emails, or place orders (via mail, fax, or any other method).<br />
              *   Why we collect information from you.<br />
              *   How we collect, use, and share this information.<br />
              *   How we secure your personal information.<br />
              *   Your choices regarding the use, access, correction, and deletion of your personal information.<br />
            </div>

            <h3>Control Over Your Information<br /></h3>
            Search Ai respects your control over your information. Upon request, we will confirm whether we hold or process any personal information that we have collected from you. You have the right to amend or update inaccurate or incomplete personal information, request its deletion, or ask that we no longer use it. If you wish to update or correct information previously provided to us, please contact us using the information provided in the “How to Contact Us” section below.<br />
            <br />
            Upon receiving your written request, we will inform you if we hold any of your personal information and confirm whether the data has been corrected or deleted. We will respond to your request within the specified time frame and notify you if an extension is required.<br />
            <br />
            This Privacy Policy applies to information collected through our Website and the Search Ai application program (the “Software”), including information provided to us by our business-to-business customers when you use the Software on their websites.<br />
            <h3>Information We Collect<br /></h3>
            Search Ai collects information, including personal information, primarily to communicate with you, process your orders, improve our products and customer service, and provide an enhanced, personalized experience. We process your data based on the following:<br />

            <div style={modalStyles.content}>
              * To perform a contract with you or take steps at your request to enter into a contract.<br />
              * To comply with legal obligations.<br />
              * To pursue our legitimate interests, provided they do not override your rights and interests, particularly in conducting and developing our business activities.<br />
              * Your consent.<br />
              We may collect information when you:<br />
              * Visit our Website and use our services.<br />
              * Place or receive an order.<br />
              * Engage in other activities, services, products, and resources we make available to customers, members, or users.<br />
            </div>

            <h3>Types of Information We Collect<br /></h3>
            <h3> *Network Traffic Logs:</h3> To ensure network security and consistent service, Search Ai employs software programs that monitor network traffic, identify unauthorized access or attempts to access nonpublic information, detect computer viruses and other malicious software, and tune network performance. During such monitoring, these programs may detect information such as email headers and network packet addresses. This information is used solely to maintain the security and performance of Search Ai&apos;s networks and computer systems. Personally identifiable information from these activities is not shared with external parties without your consent unless required by law.<br />
            <h3> *Web Visit Logs:</h3> Search Ai websites routinely collect and store information from online visitors to manage the sites and improve service. This includes the pages visited on the Website and other usage metrics.<br />

            <div style={modalStyles.addition}>
              <h2>Contact：</h2>
              Business@e-kivi.com
            </div>

          </p>
        </div>

        <div style={modalStyles.bottom}>
          <button onClick={onAgree} style={modalStyles.button}>agree</button>
        </div>

      </div>
    </div>
  );
};

const modalStyles = {
  overlay: {
    position: 'fixed' as 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000
  },
  modal: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    // maxWidth: '500px',
    width: '800px',
    height: '400px',
    // width: '90%'
  },
  header: {

    // backgroundColor:'blue',
    // margin: '0',

  },
  main: {
    color: '#7B7B7B',
    height: '300px',
    overflow: 'scroll',
  },
  content: {
    padding: '12px',

  },
  bottom: {
    display: 'flex',
    justifyContent: 'center',
  },
  addition:{
    color:'black',
  },
  button: {
    marginTop: '10px',
    padding: '10px',
    backgroundColor: '#0070f3',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',

  }
};

export default PrivacyModal;