import React from "react"

function Skill(props) {
    const skills = [...props.language,...props.tools, props.role, props.level]
    const onSkillHandler=(skill)=>{
        props.SkillHandler(skill)
        
    }


    return (<React.Fragment>
        {skills.map((skill,i) => (
            <button key={i} type="button" onClick={onSkillHandler.bind(null,skill)} class="btn  skill-button my-1 me-2">{skill}</button>

        ))}

    </React.Fragment>
    )
}

export default Skill