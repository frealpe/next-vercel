import Link from 'next/link'
import { DarkLayout } from '../../components/layouts/DarkLayout'
import { MainLayout } from '../../components/layouts/MainLayout'
import styles from '../../styles/Home.module.css'

export default function PricingPage() {
  return (
    <>
      <h1>Pricing page</h1>
        <h1 className={styles.title}>
        Ir al  <Link href="/">Home</Link> 
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/pricing.jsx</code>
        </p>
    </>

  )
}

PricingPage.getLayout = function getLayout(page:JSX.Element){

    return(

        <MainLayout>         
            {page}
        </MainLayout>

    )
}