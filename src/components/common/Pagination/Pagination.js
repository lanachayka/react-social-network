import React, {useState} from 'react';
import st from "./Pagination.module.css";

const Pagination = ({totalItemsCount, pageSize, onPageChanged, currentPage, portionSize=10}) => {
    const pagesCount = Math.ceil(totalItemsCount / pageSize);

    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const portionCount = Math.ceil(pagesCount / portionSize);
    const [portionNumber, setPortionNumber] = useState(1);
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={st.buttons}>
            {portionNumber > 1 &&
            <button className={st.btn} onClick={()=>setPortionNumber(portionNumber-1)}>PREV</button>}
                {pages.filter(p => (p >= leftPortionPageNumber) && (p <= rightPortionPageNumber))
                    .map((p) => (
                    <button
                        key={p}
                        onClick={() => onPageChanged(p)}
                        className={currentPage === p ? st.smallbtnActive : st.smallbtn}>
                        {p}</button>))}
            {portionCount > portionNumber &&
            <button className={st.btn} onClick={() => setPortionNumber(portionNumber + 1)}>NEXT</button>}
        </div>)
}

export default Pagination;