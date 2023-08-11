import logo from './logo.svg';
import './App.css';

export default function Header(){
    return(
      <header >
        <nav className="nav">
       
            
                <img src={logo} className="App-logo" alt="logo" />
                <ul className = " nav_items">
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
        
        
    </nav>
        
    </header>
    )
}