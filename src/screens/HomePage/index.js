import React, { useContext } from 'react'

import { GlobalContext } from "../../context/GlobalState";

const HomePage = () => {
  const { planets } = useContext(GlobalContext);

  return (
    <div>
      <h1>home</h1>
      <p>{planets}</p>
    </div>
  )
}

export default HomePage
