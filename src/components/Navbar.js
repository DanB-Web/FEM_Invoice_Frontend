import {ReactComponent as Logo} from '../assets/logo.svg'
import {ReactComponent as Sun} from '../assets/icon-sun.svg'
import {ReactComponent as Moon} from '../assets/icon-moon.svg'
import avatar from '../assets/image-avatar.jpg'

const Navbar = ({mode, toggleMode}) => {

  const modeHandler = () => {
    toggleMode()
  }

  return (
    <nav>
      <div className='navbar-logo-background'>
        <Logo/>
        <div className='navbar-logo-light'></div>
      </div>
      <div className='navbar-user-details'>
      <button onClick={modeHandler}>{mode === 'light' ? <Moon/> : <Sun/>}</button>
      <div className='user-avatar'>
        <img src={avatar} alt='user-avatar'/>
      </div>
      </div>
    </nav>
    
    
  )
}

export default Navbar