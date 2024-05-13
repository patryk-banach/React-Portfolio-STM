import logo from './assets/logo.png'
function Header(){


    return(
    <nav>
      <img src={logo} alt=" "/>
    <div className="buttons"><a href="/index.html">Home</a></div>    
    <div className="buttons"><a href="/work.html">Work</a></div>    
    <div className="buttons">About</div>    
    <div className="buttons">Contact</div>    
        </nav>
        
    
    )
    
    }
    export default Header