import React from 'react'
import Button from './Button'
import InputField from '../Components/InputField'
const Salary = ({handleChanges,handleClick}) => {
  return (
    <div className=''>
      <h4 className='text-lg  font-medium mb-2'>Salary</h4>
      <div className='mb-4'>
        <Button onClickHandler={handleClick} value="" title="Hourly"/>
        <Button onClickHandler={handleClick} value="monthly" title="Monthly"/>
        <Button  onClickHandler={handleClick} value="yearly" title="Yearly"/>
      </div>
      <div>
      <label className='sidebar-label-container'>
        <input type='radio' name='test' id='test' value="" onChange={handleChanges}/>
        <span className='checkmark'></span>All
        </label>
{/* condition ka home ka ayu ku jira */}
    <InputField 
       handleChanges={handleChanges} 
       value={30} 
       title="<30000K"
        name="test2"
          />
            <InputField 
       handleChanges={handleChanges} 
       value={50} 
       title="<50000k"
        name="test2"
          />
            <InputField 
       handleChanges={handleChanges} 
       value={50} 
       title="<80000k"
        name="test2"
          />
            <InputField 
       handleChanges={handleChanges} 
       value={50} 
       title="<1000000k"
        name="test2"
          />
      </div>
    </div>
  )
}

export default Salary
