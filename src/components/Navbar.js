const Navbar = ({toggleMode}) => {

  const modeHandler = () => {
    toggleMode()
  }

  return (
    <nav><button onClick={modeHandler}>MODE</button></nav>
  )
}

export default Navbar