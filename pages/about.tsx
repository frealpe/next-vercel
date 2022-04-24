import Link from 'next/link'
import { DarkLayout } from '../components/layouts/DarkLayout'
import { MainLayout } from '../components/layouts/MainLayout'
import styles from '../styles/Home.module.css'

export default function AboutPage() {
  return (
    <>
      <h1>About page</h1>
        <h1 className={styles.title}>
        Ir al  <Link href="/">Home</Link> o <Link href="/contact">Contact</Link>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/about.jsx</code>
        </p>
    </>

  )
}

AboutPage.getLayout = function getLayout(page: JSX.Element){

    return(

        <MainLayout>
          <DarkLayout>
            {page}
          </DarkLayout>
        </MainLayout>

    )
}