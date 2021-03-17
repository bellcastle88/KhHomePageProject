import classes from './Home.module.css'
import logo from './../../img/logo.png'
import startup from './../../img/startup.svg'

const Home = () => {
    return ( 
        <div className={classes.Home} id="home">
            <div className={classes.Container}>
                <h1 className={classes.Hello}>Hello, World!</h1>
                <h1>Welcome on my website</h1>
            </div>
            <img className={classes.Logo} src={logo} alt="logo"/>
            <img className={classes.Startup} src={startup} alt="startup"/>
        </div>
     );
}
 
export default Home;
