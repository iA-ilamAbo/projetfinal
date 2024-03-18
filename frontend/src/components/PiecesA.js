
import React from 'react'

export default function PiecesA() {
  return (

    <form className='content'>
      <label htmlFor='Marque'>Marque:</label>
      <input name='Marque' type='text' />

      <label htmlFor='Model'>Model:</label>
      <input name='Model' type='Model' />

      <label htmlFor='Motorisation'>Motorisation:</label>
      <input name='Motorisation' type='Motorisation' />

<div class="btn-group">
  <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Categorie
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Categorie</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
    <div class="dropdown-divider"></div>
    <a class="dropdown-item" href="#">Separated link</a>
  </div>
</div>
      <button>Chercher</button>
  </form>
  )
}

