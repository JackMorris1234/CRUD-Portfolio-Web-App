
import CharacterIntro from './CharacterIntro'
import Education from './Education'
import '../../App.css'

const Intro = () => {
    return (
        <section className="AboutSection">
            <h1 className="AboutHeader">About</h1>

            <div className="AboutContent">
                <div className="IntroCard">
                    <Education />
                </div>

                <div className="IntroCard">
                    <CharacterIntro />
                </div>
            </div>
        </section>
    )
}

export default Intro
