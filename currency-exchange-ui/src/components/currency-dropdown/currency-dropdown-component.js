import React, { useState } from 'react';

import { Dropdown } from 'semantic-ui-react'

import currenciesOptions from './currencies-data.json';
import './currency-dropdown-component.css'

function CurrencyDropdown({setvalue, value , onChange , addedClass , removedOptionsValues }) {


  const getValue = (event , data) => {
    if(setvalue)
      setvalue(data.value)
    if(onChange)
      onChange(data.value)
  }

  return <Dropdown
  placeholder='Select Currency'
  fluid
  selection
  search
  options={removedOptionsValues? currenciesOptions.filter((option) => !removedOptionsValues.includes(option.value)): currenciesOptions }
  className={'currency-dropdown ' +  addedClass}
  onChange={getValue}
  value={value}
  
/>

}

export default CurrencyDropdown;
