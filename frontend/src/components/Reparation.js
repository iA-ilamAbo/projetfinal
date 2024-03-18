import React from 'react'

export default function Reparation() {
  return (
    <form className='content'>
      <label htmlFor='Marque'>Marque:</label>
      <input name='Marque' type='texte' />

      <label htmlFor='Model'>Model:</label>
      <input name='Model' type='Model' />

      <label htmlFor='Motorisation'>Motorisation:</label>
      <input name='Motorisation' type='Motorisation' />

      <label htmlFor='Panne'>Info sur La panne:</label>
      <input name='Panne' type='texte' />

      <button>Devis-Mecano</button>
  </form>
  )
}

