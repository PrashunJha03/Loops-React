import React from 'react'

function App() {
  const cars = ['Mercedes','Porsche','BMW','Ferrari']
  const carList = []
  let i
  for (i = 0; i < cars.length;i++)
  {
    carList.push( <h3 style={{color:"green"}}> <p key={i}>{cars[i]}</p> </h3>)
  }
  return (
    <div>
      <h1 style={{color:"red"}}>Here Are Your Fav Cars</h1>
      <br/>
      {carList}
      </div>
  )
}

export default App