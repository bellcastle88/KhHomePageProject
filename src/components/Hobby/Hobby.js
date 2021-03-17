import classes from './Hobby.module.css'
import PageHeader from '../PageHeader/PageHeader'
import cinema from './../../img/cinema.svg'

const Hobby = () => {
    return ( 
        <div className={classes.AboutHobby} id="hobby">
            <PageHeader title={'My Hobby'}/>
            <div className={classes.Container}>
                <div className={classes.Text}>
                    <h2>What's Your Hobby ?</h2>
                    <p>
                      I really 
                      like watching Netflix, listening to music, and 
                      singing a song. Usually i watch movies and TV 
                      series on Netflix before I go to bed. I can't 
                      even count how many movies I've watched . If you 
                      ask me which TV series are enjoyable on Netflix, 
                      I can recommend that are very good to watch. And 
                      i love listening to music a lot. Especially, When 
                      I am coding and go outside, It always good to listen 
                      to music. Whenever I want to relieve stress, I always 
                      go to coin karaoke near my home. After a few hours of 
                      singing, all the stress disappears and I feel better. 
                      I think I have been going to coin karaoke steadily since I 
                      was in middle school.
                    </p>
                </div>
                <div className={classes.Photo}>
                    <img className={classes.Cinema} src={cinema} alt="cinema"></img>
                </div>
            </div>
        </div>
     );
}
 
export default Hobby;
