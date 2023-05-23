import React from 'react'

const Footer = () => {
  return (
    <div className='container'>
        <footer className='row row-col-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top'>
            <div className='col mb-3'>
                  <a className=''>
                      <img src='img/logo 1.png' className='bi me-2' width={100} height={100}>
                      </img>
                  </a>
                  <br/>
                  <br/>
                  <br/>
                <p style={{color:'white'}}>
                Motorcraft -выбор лучших!
                </p>
</div>
                      <div className='col-6'>
                          <h3 style={{color:'white'}}>
                          Запишись на замену масла уже сегодня, по телефону:</h3><br/>
                          <h3 style={{color:'orange'}}>8-800-555-35-35</h3>
                      </div>
        </footer>
    </div>
  )
}

export default Footer