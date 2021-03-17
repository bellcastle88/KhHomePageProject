import classes from './About.module.css'
import PageHeader from './../PageHeader/PageHeader'
import profile from './../../img/profile.svg'

const About = () => { 
    return ( 
        <div className={classes.AboutMe} id="about">
            <PageHeader title={'About Me'}/>
            <div className={classes.Container}>
                <div className={classes.Text}>
                    <h2>Tell Me About Yourself !</h2>
                    <p>
                        Let me introduce myself! I'm Jongsung Kang. 
                        I like to have various experiences. 
                        These are the most important things in my 
                        life. Especially working abroad is the coolest 
                        thing for me. Living in another country has 
                        a lot to learn and it makes me know the wider 
                        world. My personality is very cautious and 
                        responsible. I tend to take responsibility for 
                        my work. And if it's a promise that i can't keep, 
                        I don't think I start from the beginning. 
                        This personality has pros and cons. The advantage 
                        is that I can concentrate on my work and produce 
                        results quickly, and the disadvantage is that I don't 
                        know what happens around me when I work. And my 
                        motto is to choose carefully and do it consistently.    
                    </p>
                </div>
                <div className={classes.Photo}>
                    <img className={classes.Profile} src={profile} alt="profile"></img>
                </div>
            </div>
        </div>
     );
}
 
export default About;
