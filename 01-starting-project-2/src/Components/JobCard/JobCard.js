import Skill from "../Skills/Skill"

function JobCard(props) {
    console.log(props)
    const getSkill=(skill)=>{
        props.onGetSkill(skill)
    }

    return (
        <div class={`card animate__animated ${props.data.new ? 'featured-border ' : ''} `} >
            <div class="card-body row">
                <img alt='photosnap' className='img-fluid company col-md-2' src={props.data.logo} />
                <div className='col-md-5'>
                    <div class="card-title ">
                        <h5 className='title me-3'>{props.data.company}</h5>
                        {props.data.new ? <span class="badge rounded-pill new">New!</span> : ''}

                        {props.data.featured ? <span class="badge rounded-pill featured">Featured</span> : ''}

                    </div>

                    <h6 class="card-subtitle mb-2 ">{props.data.position}</h6>

                    <div className='job-details text-muted'>
                        <span>{props.data.postedAt}</span>
                        .
                        <span>{props.data.contract}</span>
                        .
                        <span>{props.data.location}</span>

                    </div>
                </div>
                
                <hr className='hrline my-2' />

                <div className='skills col-md-5'>
                    <Skill language={props.data.languages} SkillHandler={getSkill} role={props.data.role} level={props.data.level} tools={props.data.tools}/>
                </div>



            </div>
        </div>
    )

}

export default JobCard