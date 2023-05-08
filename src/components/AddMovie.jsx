import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AddMovie(props) {
  const [name, setName] = useState('')
  const [pic, setPic] = useState('')

  const nav = useNavigate()
  return (
    <div>
      <p id='exampleP'>An example of copying a name and url photo's</p>
      <h2 id='addMovieMSG1' style={{ color: 'white' }}>Here you can add a movie in yourself</h2>
      <h3 id='addMovieMSG2' style={{ color: 'white' }}>To search for a movie and get an image url <button id='newPageBtn' onClick={()=>{window.open('https://www.edb.co.il/')}}>click here</button> </h3>
      <div id='addMovieDiv'>
        <input className='addInps' onChange={(e) => { setName(e.target.value) }} type='text' placeholder='movie name' /> <br />
        <input className='addInps' onChange={(e) => { setPic(e.target.value) }} type='text' placeholder='url for picture' /> <br />
        <button id='addMovieBtn' onClick={() => { props.addNewMovie(name, pic); nav('/') }}>add movie</button>
      </div>
      <div id='picName'>
      <p id='pasteName'>{`paste movie name =>`}</p>
      </div>

      <div id='picName2'>
      <p id='pasteUrl'>{`paste picture url =>`}</p>
      </div>
    </div>
  )
}

