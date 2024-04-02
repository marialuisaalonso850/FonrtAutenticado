import React from 'react'
import '../assets/NotFoundPage.css'
import DefaultLayout  from '../layout/DefaultLayout'
import Footer from '../components/Footer'
import   image404 from '../img/image404.png'

export const NotFoundPage = () => {
  return (
    <DefaultLayout>
        <div className='notContainer'>
            <section className="notBox">
                <div className="nCimage">
                <img src={ image404 } alt="" className='notImage'/>

                </div>
                <h1 className='notTitle'>¡Ups! La página que buscas no ha sido encontrada :(.</h1>
            </section>
        </div>

        <Footer />
    </DefaultLayout>
  )
}

export default NotFoundPage;