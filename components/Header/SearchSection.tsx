import format from 'date-fns/format'
import moment from 'moment'
import React, { useState } from 'react'
import { DateRangePicker, Range } from 'react-date-range'
import { FaBed } from 'react-icons/fa'
import { MdDateRange, MdOutlineEmojiPeople } from 'react-icons/md'
import styles from './Header.module.css'

interface options {
  adult: number
  children: number
  rooms: number
}

const SearchSection = () => {
  const [openCalendar, setOpenCalendar] = useState(false)
  const [date, setDate] = useState<Range[]>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ])

  const [openOptions, setOpenOptions] = useState(false)
  const [options, setOptions] = useState<any>({
    adult: 1,
    children: 0,
    rooms: 1,
  })

  const { adult, children, rooms } = options

  //my-logic
  // const handleOption = (type: string, operation: string) => {
  //   if (type === 'adult') {
  //     if (operation === 'add') {
  //       setOptions((prevState) => ({
  //         ...prevState,
  //         adult: prevState.adult + 1,
  //       }))
  //     } else if (operation === 'minus') {
  //       if (adult >= 2) {
  //         setOptions((prevState) => ({
  //           ...prevState,
  //           adult: prevState.adult - 1,
  //         }))
  //       }
  //     }
  //   } else if (type === 'children') {
  //     if (operation === 'add') {
  //       setOptions((prevState) => ({
  //         ...prevState,
  //         children: prevState.children + 1,
  //       }))
  //     } else if (operation === 'minus') {
  //       if (children >= 1) {
  //         setOptions((prevState) => ({
  //           ...prevState,
  //           children: prevState.children - 1,
  //         }))
  //       }
  //     }
  //   } else if (type === 'rooms') {
  //     if (operation === 'add') {
  //       setOptions((prevState) => ({
  //         ...prevState,
  //         rooms: prevState.rooms + 1,
  //       }))
  //     } else if (operation === 'minus') {
  //       if (rooms >= 2) {
  //         setOptions((prevState) => ({
  //           ...prevState,
  //           rooms: prevState.rooms - 1,
  //         }))
  //       }
  //     }
  //   }
  // }

  //better-logic but has to do with html buttons

  const handleOption = (name: string, operation: string) => {
    setOptions((prevState: options) => ({
      ...prevState,
      [name]: operation === 'i' ? options[name] + 1 : options[name] - 1,
    }))
  }

  return (
    <div className={styles.headerSearch}>
      <div className={styles.headerSearchItem}>
        <FaBed className={styles.headerIcon} />
        <input
          type="text"
          placeholder="Where are you going"
          className={styles.searchInput}
        />
      </div>
      <div className={styles.headerSearchItem}>
        <MdDateRange className={styles.headerIcon} size={20} />
        <span
          className={styles.headerSearchText}
          onClick={() => setOpenCalendar((prevState) => !prevState)}
        >
          {`${format(date[0].startDate as any, 'MM/dd/yy')}`} to{' '}
          {`${format(date[0].endDate as any, 'MM/dd/yy')}`}
        </span>
        {openCalendar && (
          <DateRangePicker
            ranges={date}
            onChange={(ranges) => {
              setDate([ranges.selection])
            }}
            editableDateInputs={false}
            className={styles.date}
            //this is to disable all dates before today
            minDate={moment().toDate()}
          />
        )}
      </div>

      <div className={styles.headerSearchItem}>
        <MdOutlineEmojiPeople className={styles.headerIcon} size={20} />
        <span
          className={styles.headerSearchText}
          onClick={() => setOpenOptions((prevState) => !prevState)}
        >
          {adult} adults {children} chilren {rooms} room{' '}
        </span>
        {openOptions && (
          <div className={styles.options}>
            <div className={styles.optionItem}>
              <span className="optionText">Adult</span>

              <div className={styles.counter}>
                <button
                  className={styles.counterBtn}
                  onClick={() => handleOption('adult', 'i')}
                >
                  +
                </button>
                <span className={styles.countNumber}>{adult}</span>
                <button
                  className={styles.counterBtn}
                  onClick={() => handleOption('adult', 'd')}
                  disabled={adult <= 1}
                >
                  -
                </button>
              </div>
            </div>
            <div className={styles.optionItem}>
              <span className="optionText">Children</span>
              <div className={styles.counter}>
                <button
                  className={styles.counterBtn}
                  onClick={() => handleOption('children', 'i')}
                >
                  +
                </button>
                <span className={styles.countNumber}>{children}</span>
                <button
                  className={styles.counterBtn}
                  onClick={() => handleOption('children', 'd')}
                  disabled={children < 1}
                >
                  -
                </button>
              </div>
            </div>
            <div className={styles.optionItem}>
              <span className="optionText">Rooms</span>
              <div className={styles.counter}>
                <button
                  className={styles.counterBtn}
                  onClick={() => handleOption('rooms', 'i')}
                >
                  +
                </button>
                <span className={styles.countNumber}>{rooms}</span>
                <button
                  className={styles.counterBtn}
                  onClick={() => {
                    handleOption('rooms', 'd')
                  }}
                  disabled={rooms <= 1}
                >
                  -
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className={styles.headerSearchItem}>
        <button className={styles.headerBtn}>Search</button>
      </div>
    </div>
  )
}

export default SearchSection
