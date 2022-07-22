import SkillBadge from "./SkillBadge/SkillBadge";
import "./Skills.css"

const Skills = ()=>{
    return(
        <>
        <div className="skillContainer" id="Skills">
        <span className="headerText">What I Can Offer?</span>
        <div className="skillShowCase">
            <SkillBadge/>
            <SkillBadge/>
            <SkillBadge/>
            <SkillBadge/>
            <SkillBadge/>
            <SkillBadge/>
        </div>
        </div>
        </>
    )
}

export default Skills;