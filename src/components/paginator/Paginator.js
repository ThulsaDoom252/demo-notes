import React, {useState} from 'react'
import classNames from "classnames";
import stylePaginator from "./Paginator.module.css"
import {BiLeftArrow, BiRightArrow} from "react-icons/bi";

const Paginator = (props) => {

    const pageNumbers = []
    const numbersCount = Math.ceil(props.totalNotes / props.notesPerPage)
    const portionSize = 1
    const portionCount = Math.ceil(numbersCount / portionSize)
    const [portionNumber, setPortionNumber] = useState(1)
    const leftPortionNumber = (portionNumber - 1) * portionSize + 1
    const rightPortionNumber = portionNumber * portionSize

    for (let i = 1; i <= numbersCount; i++) {
        pageNumbers.push(i)
    }

    return (
        <div className={stylePaginator.container}>
            {portionNumber > 1 &&
                <button className={stylePaginator.prevButton} onClick={() => setPortionNumber(portionNumber - 1)}>
                    <BiLeftArrow/></button>}
            {pageNumbers.filter(n => n >= leftPortionNumber && n <= rightPortionNumber).map((n) => {
                return <span
                    className={classNames({[stylePaginator.selectedNumber]: props.currentPage === n}, stylePaginator.number)}
                    onClick={() => props.changePage(n)}>{`..${n}..`}</span>
            })}
            {portionCount > portionNumber &&
                <button className={stylePaginator.nextButton} onClick={() => setPortionNumber(portionNumber + 1)}>
                    <BiRightArrow/></button>}
        </div>

    );
}

export default Paginator;