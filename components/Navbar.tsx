
import { ActiveLink } from './ActiveLink';
import styles from './Navbar.module.css';


const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];

export const Navbar = () => {
  return (
    <nav className={styles['menu-container']}>   
  {
    menuItems.map(menuItems => (
      <ActiveLink key = {menuItems.href} text= {menuItems.text} href={menuItems.href}/>
    ))
  }

{/*     <ActiveLink text='Home' href="/"Home />
    <ActiveLink text='About' href="/about"About />
    <ActiveLink text='Contact'href="/contact"Contact />
    <ActiveLink text='Pricing'href="/pricing"Pricing /> */}
  </nav>

  )
}
