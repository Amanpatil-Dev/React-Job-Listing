
function SelectedSkills(props){

    const onRemoveSkill=(skill,e)=>{
        props.removeSkill(skill)
        e.stopPropagation();
    }
    const onClearSelection=(e)=>{
        props.clearSelection();
        e.stopPropagation();
    }
    return (
        <div className='secretSection p-2'>

          <div className='selection col-md-5 mx-1 my-1'>

            {props.selectedSkills.map((skills) => (
              <div className='btn selection-badge  mx-1 my-1'>{skills}
                <button onClick={onRemoveSkill.bind(null,skills)}  className='dismiss-btn'>X</button>
              </div>
            ))}


          </div>
          <button onClick={onClearSelection} className='btn border text-end'>Clear</button>
        </div>

    )
}

export default SelectedSkills