import React from 'react';
import { Form } from 'react-bootstrap';
import { useCustomPagination } from '../../../../../components/CustomPagination';
import { AccordionItems, ReusableAccordion } from '../../../../../components/ReusableAccordion';
import { useFilter } from '../../../../../components/useFilter';

interface PaginatedFiltrableListProps {
    dataSource: any[];
    children: (item: any) => JSX.Element;
}

export const PaginatedFiltrableList: React.FC<PaginatedFiltrableListProps> = ({dataSource, children}) => {
  
    const { filtredArr, newFilter } = useFilter(dataSource);
    const { CustomPagination, list } = useCustomPagination(filtredArr, 5);

    const handleChange = (e: any) => {
        newFilter(e.target.value);
    }

    return (
        <React.Fragment>
            <Form>
                <Form.Control type="search" placeholder="Are you looking for a word? filter here!" 
                onChange={handleChange} />
            </Form>

            <ReusableAccordion>

                {
                    <React.Fragment>
                       {
                               list.map((item: any, index: number) => (
                                   <AccordionItems key={'s' + index}  eventKey={'ev' + index} headerText= {item.label} >
                                       {children(item)}
                                   </AccordionItems>
                               ))
                       }
                   </React.Fragment>
                }

            </ReusableAccordion>

            
          { list.length > 0 && <div className="d-flex justify-content-end mt-3">
                <CustomPagination />
            </div>}
        </React.Fragment>
    )
}