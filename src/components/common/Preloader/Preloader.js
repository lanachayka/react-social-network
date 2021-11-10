import React from 'react'
import loadingIcon from '../../../assets/img/loader.gif'

export default function Preloader(props) {
    return (
      <div>
        <img src={loadingIcon} alt="Loading" style={{ marginLeft: "200px" }} />
      </div>
    );
}
