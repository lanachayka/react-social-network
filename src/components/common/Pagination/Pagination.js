import React from 'react';
import st from "./Pagination.module.css";

const Pagination = ({totalUsersCount, pageSize, onPageChanged, currentPage}) => {
    const pagesCount = Math.ceil(totalUsersCount / pageSize);

    const pages = [];
    for (let i = 1; i <= 10; i++) {
        pages.push(i);
    }

    return (<div className={st.buttons}>
            {pages.map((p) => (
                <button
                    key={p}
                    onClick={() => onPageChanged(p)}
                    className={currentPage === p ? st.smallbtnActive : st.smallbtn}>
                    {p}</button>))}
        </div>)
}

export default Pagination;