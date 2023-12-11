import React from 'react'
import Layout from '../components/layout'
import Link from 'next/link'

export default function Pagina404() {
  return (
    <Layout title='Pagina no encontrada'>
        <p className='error'>Pagina no encontrada</p>
        <Link href='/' legacyBehavior>
            <a className='error-enlace'>
                Ir al Inicio
            </a>
        </Link>
    </Layout>
  )
}
