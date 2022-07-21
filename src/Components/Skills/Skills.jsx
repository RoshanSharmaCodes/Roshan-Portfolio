import SkillBadge from "./SkillBadge/SkillBadge";
import "./Skills.css"

const Skills = ()=>{
    return(
        <>
        <div className="skillContainer">
        <div className="skillShowCase">
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