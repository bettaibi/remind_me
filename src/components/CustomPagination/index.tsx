import { useState } from 'react';
import { Pagination } from 'react-bootstrap';


export const useCustomPagination = (array: any[], itemsPerPage: number) => {
    
    const [currentPage, setCurrentPage] = useState<number>(0);

    const visitedPages = (currentPage * itemsPerPage);
    let list = array.slice(visitedPages, visitedPages + itemsPerPage);

    const leng = array.length;
    const slices = Math.ceil(leng / itemsPerPage);

    const nextSlice = () => {
        if (currentPage < slices - 1) {
            setCurrentPage((previous) => previous + 1);
        }
    };

    const prevSlice = () => {
        if (currentPage > 0) {
            setCurrentPage((previous) => previous - 1);
        }
    };

    const firstSlice = () => {
        setCurrentPage(0);
    };

    const lastSlice = () => {
        setCurrentPage(slices - 1);
    };

    const newSlice = (index: number) => {
        setCurrentPage(index);
    }

    const CustomPagination = () => (

        <Pagination>
            <Pagination.First disabled={currentPage === 0} onClick={firstSlice} />
            <Pagination.Prev disabled={currentPage === 0} onClick={prevSlice} />
            {
                [...Array(slices)].map((item, index) => (
                    <Pagination.Item key={'slice' + index}
                        active={currentPage === index} onClick={() => newSlice(index)} >
                        {index + 1}
                    </Pagination.Item>
                ))
            }
            <Pagination.Next disabled={currentPage === (slices - 1)} onClick={nextSlice} />
            <Pagination.Last disabled={currentPage === (slices - 1)} onClick={lastSlice} />
        </Pagination>
    )

    return {
        list,
        CustomPagination
    }
};
