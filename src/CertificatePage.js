import React from 'react';
import { Container } from 'react-bootstrap';
import certificatePDF from './assets/files/CertificateOfCompletion_How to Train Your Brain For Happiness.pdf';

function CertificatePage() {
  return (
    <Container className="py-5">
      <h2 className="mb-4 text-center">My Certificate</h2>

      {/* PDF displayed in browser */}
      <div style={{ textAlign: 'center' }}>
        <iframe
          src={certificatePDF}
          title="Certificate: How to Train Your Brain For Happiness"
          width="80%"
          height="600px"
          style={{ border: '1px solid #ccc' }}
        ></iframe>
      </div>
    </Container>
  );
}

export default CertificatePage;
