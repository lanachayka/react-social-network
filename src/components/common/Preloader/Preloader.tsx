import React from 'react'
import loadingIcon from '../../../assets/img/loader.gif'

const Preloader: React.FC = () => {
    return (
      <div>
        <img src={loadingIcon} alt="Loading" style={{ marginLeft: "200px" }} />
      </div>
    );
}

export default Preloader;
