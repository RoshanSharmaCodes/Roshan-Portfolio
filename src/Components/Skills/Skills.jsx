import "./Skills.css"
import SkillBadge from "./SkillBadge/SkillBadge";
import data from "../../Data/SkillBadgeData.jsx"

const Skills = ()=>{
    return(
        <>
        <div className="skillContainer " id="Skills">
        <span className="headerText">What Can I Offer?</span>
        <div className="skillShowCase reveal">
            {
                data.map((res)=>{
                    return <SkillBadge title={res.title} image={res.image}/>
                })
            }
        </div>
        </div>
        </>
    )
}

export default Skills;