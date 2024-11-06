import Link from 'next/link'
import styles from './Layout.module.css'
const Layout = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <Link href='/'>
          <h2> BOTOCAR</h2>
          <p>choose and buy your car</p>
        </Link>
      </header>
      <div className={styles.container}> {children}</div>
      <footer className={styles.footer}>
        <a href='https://botostart.ir' target='_blank'>
          botostart
        </a>
        Next.js courses | Boto Car Project @copy;
      </footer>
    </>
  )
}

export default Layout