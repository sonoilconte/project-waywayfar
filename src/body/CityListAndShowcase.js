import React, { Component } from 'react'
import CityList from './CityList.js'
import CityShowcase from './CityShowcase.js'
import AllTitles from './AllTitles.js'

class CityListAndShowcase extends Component {
  constructor () {
    super()
    this.state = {
      cities: [], // ajax call puts all city in our database into this  state
      selectedCity: [ ],
      showcasedCity: [ ]
    }
  }
  render () {
    return (
      <div>
        <AllTitles />
        <div className='row'>
          <div className='col s3'>
            <CityList />
          </div>
          <div className='col s9'>
            <CityShowcase />
          </div>
        </div>
      </div>
    )
  }
}

export default CityListAndShowcase
