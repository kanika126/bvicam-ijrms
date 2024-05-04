
import React from 'react';
import './EditorialBashComponent.css'; // Import CSS file for styling

const EditorialBashComponent = () => {
  return (
    <div className="editorial-bash">
      <div className="bash-header">
        <span className="bash-button bash-close"></span>
        <span className="bash-button bash-minimize"></span>
        <span className="bash-button bash-expand"></span>
      </div>
      <div className="bash-body">
        <p>$ npm install react</p>
        <p>...</p>
        <p>$ npm start</p>
        <p>...</p>
      </div>
    </div>
  );
}

export default EditorialBashComponent;
