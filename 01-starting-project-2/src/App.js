import React, { useEffect, useReducer, useState } from 'react'
import mobileHeader from './Assets/bg-header-mobile.svg'
import photoSnap from './Assets/photosnap.svg'
import manage from './Assets/manage.svg'
import acount from './Assets/account.svg'
import myhome from './Assets/myhome.svg'
import loop from './Assets/loop-studios.svg'
import faceit from './Assets/faceit.svg'
import shortly from './Assets/shortly.svg'
import insure from './Assets/insure.svg'
import eyecam from './Assets/eyecam-co.svg'
import airFilter from './Assets/the-air-filter-company.svg'
import desktopHeader from './Assets/bg-header-desktop.svg'
import JobCard from './Components/JobCard/JobCard'
import SelectedSkills from './Components/SelectedSkills/SelectedSkills'

const JOBS_DATA = [
  {
    "id": 1,
    "company": "Photosnap",
    "logo": photoSnap,
    "new": true,
    "featured": true,
    "position": "Senior Frontend Developer",
    "role": "Frontend",
    "level": "Senior",
    "postedAt": "1d ago",
    "contract": "Full Time",
    "location": "USA Only",
    "languages": ["HTML", "CSS", "JavaScript"],
    "tools": []
  },
  {
    "id": 2,
    "company": "Manage",
    "logo": manage,
    "new": true,
    "featured": true,
    "position": "Fullstack Developer",
    "role": "Fullstack",
    "level": "Midweight",
    "postedAt": "1d ago",
    "contract": "Part Time",
    "location": "Remote",
    "languages": ["Python"],
    "tools": ["React"]
  },
  {
    "id": 3,
    "company": "Account",
    "logo": acount,
    "new": true,
    "featured": false,
    "position": "Junior Frontend Developer",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "2d ago",
    "contract": "Part Time",
    "location": "USA Only",
    "languages": ["JavaScript"],
    "tools": ["React", "Sass"]
  },
  {
    "id": 4,
    "company": "MyHome",
    "logo": myhome,
    "new": false,
    "featured": false,
    "position": "Junior Frontend Developer",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "5d ago",
    "contract": "Contract",
    "location": "USA Only",
    "languages": ["CSS", "JavaScript"],
    "tools": []
  },
  {
    "id": 5,
    "company": "Loop Studios",
    "logo": loop,
    "new": false,
    "featured": false,
    "position": "Software Engineer",
    "role": "Fullstack",
    "level": "Midweight",
    "postedAt": "1w ago",
    "contract": "Full Time",
    "location": "Worldwide",
    "languages": ["JavaScript"],
    "tools": ["Ruby", "Sass"]
  },
  {
    "id": 6,
    "company": "FaceIt",
    "logo": faceit,
    "new": false,
    "featured": false,
    "position": "Junior Backend Developer",
    "role": "Backend",
    "level": "Junior",
    "postedAt": "2w ago",
    "contract": "Full Time",
    "location": "UK Only",
    "languages": ["Ruby"],
    "tools": ["RoR"]
  },
  {
    "id": 7,
    "company": "Shortly",
    "logo": shortly,
    "new": false,
    "featured": false,
    "position": "Junior Developer",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "2w ago",
    "contract": "Full Time",
    "location": "Worldwide",
    "languages": ["HTML", "JavaScript"],
    "tools": ["Sass"]
  },
  {
    "id": 8,
    "company": "Insure",
    "logo": insure,
    "new": false,
    "featured": false,
    "position": "Junior Frontend Developer",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "2w ago",
    "contract": "Full Time",
    "location": "USA Only",
    "languages": ["JavaScript"],
    "tools": ["Vue", "Sass"]
  },
  {
    "id": 9,
    "company": "Eyecam Co.",
    "logo": eyecam,
    "new": false,
    "featured": false,
    "position": "Full Stack Engineer",
    "role": "Fullstack",
    "level": "Midweight",
    "postedAt": "3w ago",
    "contract": "Full Time",
    "location": "Worldwide",
    "languages": ["JavaScript", "Python"],
    "tools": ["Django"]
  },
  {
    "id": 10,
    "company": "The Air Filter Company",
    "logo": airFilter,
    "new": false,
    "featured": false,
    "position": "Front-end Dev",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "1mo ago",
    "contract": "Part Time",
    "location": "Worldwide",
    "languages": ["JavaScript"],
    "tools": ["React", "Sass"]
  }
]



const reducterFunction = (state, action) => {

  if (action.type === 'SELECTED_SKILL') {
    console.log(state.selSkills, action.selSkills)
    debugger
    if (!state.selSkills.includes(...action.selSkills)) {
      const newSkills = [...state.selSkills, ...action.selSkills]

      return {
        selSkills: newSkills.flat()
      }
    }else{
      return {
        selSkills:state.selSkills
      }
    }


  }

  if (action.type === 'REMOVE_SKILL') {
    const updatedSkills = state.selSkills.filter((val) => {
      return val !== action.skill
    })
    return {
      selSkills: updatedSkills
    }
  }

  if (action.type === 'CLEAR_SELECTION') {
    return {
      selSkills: []
    }
  }


}

const reducerFunctionForJob = (state, action) => {
  let updatedJobs = []

  if (action.type === 'FILTER_JOB') {

    const language = state
      .filter((element) =>
        element.languages.some((subElement) => subElement === action.skill))

    const tools = state
      .filter((element) =>
        element.tools.some((subElement) => subElement === action.skill))

    const role = state.filter((job) => {
      return job.role === action.skill

    })
    const level = state.filter((job) => {
      return job.level === action.skill
    })

    if (language.length > 0) {
      updatedJobs.push( language.flat().filter(function (item, pos) {
        return language.flat().indexOf(item) === pos;
      }))
    }
    if (tools.length > 0) {
      updatedJobs.push(tools.flat().filter(function (item, pos) {
        return tools.flat().indexOf(item) === pos;
      }))
    }
    if (role.length > 0) {
      updatedJobs.push(role.flat().filter(function (item, pos) {
        return role.flat().indexOf(item) === pos;
      }))
    }
    if (level.length > 0) {
      updatedJobs.push(level.flat().filter(function (item, pos) {
        return level.flat().indexOf(item) === pos;
      }))
    }

    return updatedJobs.flat()


  }

  if (action.type === 'REM_FILTER') {
    let updatedJobs = []
    try {


      
      updatedJobs = action.lengthSk === 1 ? JOBS_DATA : []

      const isRoleOrLevel = JOBS_DATA.map((val) => {
        for (const [key, value] of Object.entries(val)) {
          if (value === action.removedSkill) {
            return { isWhat: key, lastIndex: false }
          } else if (action.skill.length === 1 && value === action.skill[action.skill.length - 1]) {

            return { isWhat: key, lastIndex: true }
          }
        }
        return { isWhat: undefined, lastIndes: undefined }
      }).map((val) => {
        return JSON.parse(JSON.stringify(val))
      }).filter((val) => {
        return val.isWhat !== undefined
      })


      if (isRoleOrLevel.length > 0) {



        const role = isRoleOrLevel[0].isWhat === 'role' && isRoleOrLevel[0].lastIndex === undefined ? JOBS_DATA.filter(val => val.role !== action.removedSkill) : JOBS_DATA.filter(val => val.role === action.skill[action.skill.length - 1])

        if (role.flat().length > 0) {
          updatedJobs.push(role.flat().filter(function (item, pos) {
            return role.flat().indexOf(item) === pos;
          }))
        }
      }
      if (isRoleOrLevel.length > 0) {

        const level = isRoleOrLevel[0].isWhat === 'level' && isRoleOrLevel[0].lastIndex === false ? JOBS_DATA.filter(val => val.level !== action.removedSkill) : JOBS_DATA.filter(val => val.level === action.skill[action.skill.length - 1])

        if (level.flat().length > 0) {
          updatedJobs.push(level.flat().filter(function (item, pos) {
            return level.flat().indexOf(item) === pos;
          }))
        }
      }

      if(isRoleOrLevel.length === 0){


      const language = action.skill.map((val) => {

        return JOBS_DATA.filter((element) =>
          element.languages.some((subElement) => subElement === val) && element.languages.some((subElement) => subElement !== action.removedSkill))
      })

      const tools = action.skill.map((val) => {

        return JOBS_DATA.filter((element) =>
          element.tools.some((subElement) => subElement === val) && element.tools.some((subElement) => subElement !== action.removedSkill))
      })




      if (language.flat().length > 0) {
        updatedJobs.push(language.flat().filter(function (item, pos) {
          return language.flat().indexOf(item) === pos;
        }))
      }
      if (tools.flat().length > 0) {
        updatedJobs.push(tools.flat().filter(function (item, pos) {
          return tools.flat().indexOf(item) === pos;
        }))
      }
    }





      return updatedJobs.flat()
    } catch (error) {
      console.log(error)

    }

  }

  if (action.type === 'CLEAR_FILTERED_JOB') {

    return JOBS_DATA
  }



}

function App() {

  const [initJob, dispatchSetJob] = useReducer(reducerFunctionForJob, JOBS_DATA)

  const [selectedSkills, dispatchFunction] = useReducer(reducterFunction, {
    selSkills: []
  })



  const onGettingSkill = (skill) => {

    dispatchFunction({ type: 'SELECTED_SKILL', selSkills: [skill] })
    dispatchSetJob({ type: 'FILTER_JOB', skill })


  }

  const RemoveSkill = (skill) => {
    dispatchFunction({ type: 'REMOVE_SKILL', skill: skill })

    const selectedFilter = selectedSkills.selSkills.filter((filter) => {
      return filter !== skill
    }).flat()

    dispatchSetJob({ type: 'REM_FILTER', skill: selectedFilter, removedSkill: skill, lengthSk: selectedSkills.selSkills.length })

  }

  const removeAllSelection = () => {
    dispatchSetJob({ type: 'CLEAR_FILTERED_JOB', skill: [], removedSkill: '', lengthSk: 1 })
    dispatchFunction({ type: 'CLEAR_SELECTION', skill: '' })

  }




  return (
    <React.Fragment>

      <header>
        <div className='banner'>
          <img alt='header-mobile' className='img-fluid header-banner' src={mobileHeader} />
          <img alt='photosnap' className='img-fluid header-banner-desktop col-md-2' src={desktopHeader} />
        </div>

        {selectedSkills.selSkills.length > 0 ? <SelectedSkills clearSelection={removeAllSelection} removeSkill={RemoveSkill} selectedSkills={selectedSkills.selSkills} /> : ''}

      </header>


      <section className='container'>
        {initJob.length > 0 ? 
        initJob.map((job) => (
          <JobCard onGetSkill={onGettingSkill} data={job} />
        )):<div className='error'>Sorry Could not found Job According to your Requirment. Please Try Rearraging Filters</div>}



      </section>
    </React.Fragment>


  );
}

export default App;

// #issue
// 1.duplictaes added when filtering and removing sometimes i think it is fixed but keep an eye out
// 2.when we selecta role or a level how can we know ifits a role or level done
//3 duplicate should now be allowedi n selection fo filter in secret section