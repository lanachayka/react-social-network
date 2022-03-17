import React, {useState} from 'react';
import st from './Pagination.module.css';
import cn from 'classnames';

type PropsType = {
    totalItemsCount: number,
    pageSize: number,
    onPageChanged: (p: number) => void,
    currentPage: number, 
    portionSize?: number
}

const Pagination: React.FC<PropsType> = ({ totalItemsCount, pageSize, onPageChanged, currentPage, portionSize = 10 }) => {
    const pagesCount = Math.ceil(totalItemsCount / pageSize);

    const pages: number[] = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const portionCount: number = Math.ceil(pagesCount / portionSize);
    const [portionNumber, setPortionNumber] = useState<number>(1);
    const leftPortionPageNumber: number = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber: number = portionNumber * portionSize;

    return (
        <div className={st.buttons}>
            {portionNumber > 1 &&
            <button className={st.btn} onClick={()=>setPortionNumber(portionNumber-1)}>PREV</button>}
            {pages
                .filter(p => (p >= leftPortionPageNumber) && (p <= rightPortionPageNumber))
                .map((p) => (
                    <span
                        key={p}
                        onClick={() => onPageChanged(p)}
                        className={cn({[st.selectedPage]:currentPage === p}, st.pageNumber)}>
                        {p}</span>))}
            {portionCount > portionNumber &&
            <button className={st.btn} onClick={() => setPortionNumber(portionNumber + 1)}>NEXT</button>}
        </div>)
}

export default Pagination;