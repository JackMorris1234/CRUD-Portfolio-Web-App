import Frontend from  './Frontend'
import Backend from  './Backend'
import Languages from './Languages'
import Other from './Other'

const Skills = () => {
    return(
        <section className="AboutSection">
            <h1 className="AboutHeader">Skills</h1>

            <div className="AboutContent">
                <div className="IntroCard">
                    <Frontend />
                </div>

                <div className="IntroCard">
                    <Backend />
                </div>
                <div className="IntroCard">
                    <Languages />
                </div>
                <div className="IntroCard">
                    <Other />
                </div>
            </div>
        </section>
    )


}
export default Skills