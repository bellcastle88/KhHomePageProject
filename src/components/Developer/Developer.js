import classes from './Developer.module.css'
import PageHeader from './../PageHeader/PageHeader'
import profile from './../../img/skill.svg'

const Developer = () => {
    return ( 
        <div className={classes.AboutDeveloper} id="developer">
            <PageHeader title={'Developer Roadmap'}/>
            <div className={classes.Container}>
                <div className={classes.Text}>
                    <h2>What Type of Developer Should I Be ?</h2>
                    <p>
                    I want to work as a Java backend. The skills 
                    I have learned so far are JAVA, Oracle, JDBC, 
                    HTML, CSS, JavaScript, and Spring Framework. 
                    I constantly check the job description posting 
                    on the recruitment site about what skills I 
                    should learn in the future. And I want to learn 
                    more about Spring Boot and JPA(Hibernate). I also 
                    want to implement backend server with this 
                    technology. And I read this on the Internet 
                    that if i first join the company, I can possibly 
                    work as frontend position. That is why this 
                    KH HomePage Project was implemented with React 
                    which is getting popular these day. There are 
                    still many skills to learn and I believe I will 
                    be a good developer.
                    </p>
                </div>
                <div className={classes.Photo}>
                    <img className={classes.Profile} src={profile} alt="profile"></img>
                </div>
            </div>
        </div>
     );
}
 
export default Developer;
