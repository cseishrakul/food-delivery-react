import React from 'react'

function DebitCard() {
  return (
    <div className='cardGroup'>
        <img src='https://firebasestorage.googleapis.com/v0/b/food-delivery-react-bb7fe.appspot.com/o/images%2FVisaLogo.png?alt=media&token=8c28afc0-9b3e-4e14-b850-59d99ccf4ae7' alt='' className='card_logo' />
        <img src='https://firebasestorage.googleapis.com/v0/b/food-delivery-react-bb7fe.appspot.com/o/images%2Fchip.png?alt=media&token=41c449a1-759f-4d03-bb81-8b39a70862dc'className='card_chip' />
        <div className='cardNumber'>1234 567 890 420</div>
        <div className='cardName'>Ishrakul Islam</div>
        <div className='cardForm'>10/21</div>
        <div className='cardTo'>10/25</div>
        <div className='cardRing'></div>
    </div>
  )
}

export default DebitCard;