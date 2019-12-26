import React from 'react'

const Formulaire = ({ logged }) => (
  <form>
    <input type="text" maxLength={2} required />
    <input type="textarea" autoFocus />
    <p>
      {logged ?
        "logout" : "login"
      }
    </p>

  </form>
)

export default Formulaire
