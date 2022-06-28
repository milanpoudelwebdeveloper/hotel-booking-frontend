import format from 'date-fns/format'
import moment from 'moment'
import React, { useState } from 'react'
import { DateRangePicker } from 'react-date-range'
import { useSelector } from 'react-redux'
import { ISearch } from '../app/searchSlice'
import { RootState } from '../app/store'
import Header from '../components/Header/Header'
import NavBar from '../components/NavBar/NavBar'
import SearchResultItem from '../components/SearchResult/SearchResultItem'
import { searchResult } from '../data/searchResultsDummy'

const Search = () => {
  const [openCalendar, setOpenCalendar] = useState(false)
  const { date, destination, options } = useSelector(
    (state: RootState) => state.search
  )
  const [searchOptions, setSearchOptions] = useState<any>({
    place: destination,
    dates: date,
    option: options,
  })

  const {
    place,
    dates,
    option: { adult, children, rooms },
  } = searchOptions

  const changeHandler = (e: any) => {
    setSearchOptions((prevState: ISearch) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  console.log('Search options are', searchOptions)

  return (
    <div>
      <NavBar />
      <Header type="search" />
      <div className="search">
        <div className="searchWrapper">
          <div className="searchOption">
            <h1 className="searchTitle">Search</h1>
            <div className="searchOption">
              <label>Destination</label>
              <input
                type="text"
                name="place"
                value={place}
                onChange={(e) => changeHandler(e)}
              />
            </div>
            <div className="searchOption" style={{ position: 'relative' }}>
              <label>Check-in Date</label>
              <span onClick={() => setOpenCalendar((prevState) => !prevState)}>
                {`${format(dates[0].startDate, 'MM/dd/yyyy')}`} to{' '}
                {`${format(dates[0].endDate, 'MM/dd/yyyy')}`}
              </span>
              {openCalendar && (
                <DateRangePicker
                  className="searchDate"
                  ranges={dates}
                  editableDateInputs={false}
                  //this is to disable all dates before today
                  minDate={moment().toDate()}
                  onChange={(ranges) => {
                    setSearchOptions((prevState: ISearch) => ({
                      ...prevState,
                      dates: [ranges.selection],
                    }))
                  }}
                />
              )}
            </div>
            <div className="searchOption">
              <label>Options</label>
              <div className="optionItem">
                <span className="optionText">
                  Min price <small>per night</small>
                </span>
                <input type="number" className="optionInput" min={0} />
              </div>

              <div className="optionItem">
                <span className="optionText">
                  Max price <small>per night</small>
                </span>
                <input type="number" className="optionInput" min={0} />
              </div>
              <div className="optionItem">
                <span className="optionText">Adult</span>
                <input
                  type="number"
                  min={0}
                  className="optionInput"
                  value={adult}
                  onChange={(e) => {
                    setSearchOptions((prevState: ISearch) => ({
                      ...prevState,
                      option: {
                        adult: e.target.value,
                        children,
                        rooms,
                      },
                    }))
                  }}
                />
              </div>
              <div className="optionItem">
                <span className="optionText">Children</span>
                <input
                  min={0}
                  type="number"
                  className="optionInput"
                  value={children}
                  onChange={(e) => {
                    setSearchOptions((prevState: ISearch) => ({
                      ...prevState,
                      option: {
                        children: e.target.value,
                        adult,
                        rooms,
                      },
                    }))
                  }}
                />
              </div>
              <div className="optionItem">
                <span className="optionText">Room</span>
                <input
                  type="number"
                  min={0}
                  className="optionInput"
                  value={rooms}
                  onChange={(e) => {
                    setSearchOptions((prevState: ISearch) => ({
                      ...prevState,
                      option: {
                        rooms: e.target.value,
                        children,
                        adult,
                      },
                    }))
                  }}
                />
              </div>
            </div>
            <button className="searchBtn">Search</button>
          </div>
          <div className="searchResult">
            {searchResult.map((item, index) => (
              <SearchResultItem searchItem={item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search
