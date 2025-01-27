import './App.css';
import Raju from './pages/Raju';
import Abhi from './pages/Abhi';
import Sunil from './pages/Sunil';
import Tarak from './pages/Tarak';
import pic from '../src/profile.png';
import Projects from './pages/projects';
function App() {
  return (
    <div class="box">
        <header>
            <div class="h1">
                <h1>.FOLIO</h1>
            </div>
            <div class="brand">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="proj" target="_top">projects</a></li>
                    <li><a href="#">Skills</a></li>
                    <li><a href="#">About</a></li>
                </ul>
            </div>
        </header>
        <div class="main">
            <div class="dis">
                <h1 class="head">Hello_</h1>
                <div class="des">
                    <h1 class="one">I'M</h1>
                    <h1 class="two">DESIGNER</h1>
                </div>
                <div class="para">
                   <p>&nbsp;&nbsp;&nbsp;&nbsp;A strong web portfolio is crucial to a successful career as a web developer, and understanding how to make a portfolio is an essential part of this process.</p>
                </div>
                <div class="but">
                    <div>
                           <button type="submit" class="but1" onclick="window.alert('Response was sent to corresponding person via mail !')">Hire Me</button>
                    </div>
                    <div>
                            <button type="submit" class="but2">Contact Me</button>
                    </div>
                </div>
            </div>
            <div class="profile">
                <div class="pro">
                        <img src={pic} alt='profile'></img>
                </div>
                <div class="det">
                    <b><p>Name : G.Raj Kumar</p></b>
                    <b><p>College : SITE</p></b>
                    <b><p>Degree : B.Tech</p></b>
                </div>
            </div>
        </div>
       {/* { <Projects />} */}
    </div>
  );
}

export default App;
