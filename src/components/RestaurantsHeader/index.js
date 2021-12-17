import {BsFilterLeft} from 'react-icons/bs'
import './index.css'

const RestaurantsHeader = props => {
  const {sortByOptions, activeOptionId, updateActiveOptionId} = props
  const onChangeSortBy = event => {
    updateActiveOptionId(event.target.value)
  }
  return (
    <div className="Restaurants-header">
      <div className="text-container">
        <h1 className="Restaurants-list-heading">Popular Restaurants</h1>
        <p className="Restaurants-list-description">
          Select Your favourite restaurent special dish and make your day
          Happy...
        </p>
      </div>

      <div className="sort-by-container">
        <BsFilterLeft className="sort-by-icon" />
        <select
          className="sort-by-select"
          value={activeOptionId}
          onChange={onChangeSortBy}
        >
          {sortByOptions.map(eachOption => (
            <option
              key={eachOption.optionId}
              value={eachOption.optionId}
              className="select-option"
            >
              {eachOption.displayText}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
export default RestaurantsHeader
