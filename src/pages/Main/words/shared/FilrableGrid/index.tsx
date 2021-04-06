import React from 'react';
import { Form } from 'react-bootstrap';
import { useCustomPagination } from '../../../../../components/CustomPagination';
import { useFilter } from '../../../../../components/useFilter';


interface FilrableGridProps {
    dataSource: any[];
    children: (item: any) => JSX.Element;
}
export const FilrableGrid: React.FC<FilrableGridProps> = ({dataSource, children}) => {
    
    const { filtredArr, newFilter } = useFilter(dataSource);
    const { CustomPagination, list } = useCustomPagination(filtredArr, 5);

    const handleChange = (e: any) => {
        newFilter(e.target.value);
    }

    return (
        <React.Fragment>
                <Form className="mt-3">
                    <Form.Control type="search" placeholder="Search by subject.."
                        onChange={handleChange} />
                </Form>

                <div className="fit-grid mt-3">
                    {
                        list.map((item: any, index: number) => (
                           <React.Fragment key= {index}>
                               {
                                   children(item)
                               }
                           </React.Fragment>
                        ))
                    }
                </div>

                {list.length > 0 && <div className="d-flex justify-content-end mt-3">
                    <CustomPagination />
                </div>}
        </React.Fragment>
    )
}
