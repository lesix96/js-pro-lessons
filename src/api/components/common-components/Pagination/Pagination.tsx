import React from 'react';
import './Pagination.css';

type TRenderPaginationBtns = (onClick: (e: React.MouseEvent<HTMLButtonElement>) => void, page: number, lastPage: number) => React.ReactNode[]

const renderPaginationBtns: TRenderPaginationBtns  = (onClick, page, lastPage) => {
    const startBtns = [page, page + 1, page + 2];
    const gapBtns = [page - 2, page - 1, page];
    const middleBtn = [ '...' ];
    const lastBtns = [lastPage - 3, lastPage - 2, lastPage - 1];

    let btnsArr = [];

    if (page < lastPage - 6) {
        btnsArr = [...startBtns, ...middleBtn, ...lastBtns]
    } else if (page < lastPage - 4) {
        btnsArr = [...gapBtns, ...middleBtn, ...lastBtns]
    } else if (page < lastPage - 3) {
        btnsArr = [...gapBtns, ...lastBtns] // last 6 pages
    } else {
        btnsArr = [...middleBtn, ...lastBtns] // last 3 pages
    }

    return btnsArr.map(num => {
        return num === '...' ?
            num :
            <button
                key={num}
                onClick={onClick}
                data-name={num}
                className={num === page ? 'active' : ''}
            >{num}</button>
    });
};

interface IPagination {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
    page: number,
    lastPage: number,
}

const Pagination = ({ onClick, page, lastPage }: IPagination) => (
    <div className="paginationWrapper">
        { page !== 0 && <button onClick={onClick} data-name="prev">{'<<'}</button> }
        {renderPaginationBtns(onClick, page, lastPage)}
        { page !== lastPage - 1 && <button onClick={onClick} data-name="next">{'>>'}</button> }
    </div>
);

Pagination.defaultProps = {
    onClick: () => {},
    page: 0,
    lastPage: 0,
}

Pagination.displayName = 'Pagination';

export default Pagination;
