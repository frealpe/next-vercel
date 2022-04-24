import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout'
import styles from '../styles/Home.module.css'


export default function HomePage() {
  return (
    <MainLayout>
     <h1>Home page</h1>
        <h1 className={styles.title}>
          Ir al  <Link href="/about"> About</Link>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.jsx</code>
        </p>      
    </MainLayout>
  )
}
