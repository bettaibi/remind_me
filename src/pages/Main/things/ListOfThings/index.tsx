import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Trash } from 'react-bootstrap-icons';
import { useHistory } from 'react-router-dom';
import { PicThingsModel } from '../../../../model/app.model';
import { useFilter } from '../../../../components/useFilter';

import pic from '../../../../assets/img/exp.jpg';
import { useCustomPagination } from '../../../../components/CustomPagination';

export const ListOfThings: React.FC = () => {
    const history = useHistory();

    const things: PicThingsModel[] = [
        { label: 'Recipe', picture: pic, things: [] },
        { label: 'salad', picture: pic, things: [] },
        { label: 'garlic', picture: pic, things: [] },
        { label: 'onions', picture: pic, things: [] },
        { label: 'Recipe', picture: pic, things: [] },
        { label: 'salad', picture: pic, things: [] },
        { label: 'garlic', picture: pic, things: [] },
        { label: 'onions', picture: pic, things: [] },
        { label: 'Recipe', picture: pic, things: [] },
        { label: 'salad', picture: pic, things: [] },
        { label: 'garlic', picture: pic, things: [] },
        { label: 'onions', picture: pic, things: [] },
    ];

    const create = () => {
        history.push('/home/things/new')
    };

    return (
        <React.Fragment >
            <div className="bg-light border rounded p-3">
                Give names to all things inside a picture.
                <div className="text-right mt-2">
                    <button className="btn btn-primary btn-sm" onClick={create}>
                        Create
                    </button>
                </div>
            </div>

            <Things dataSource={things} />
        </React.Fragment>
    )
}

interface ThingsProps {
    dataSource: PicThingsModel[];
}

const Things: React.FC<ThingsProps> = ({ dataSource }) => {

    const { filtredArr, newFilter } = useFilter(dataSource);
    const { CustomPagination, list } = useCustomPagination(filtredArr, 5);

    const handleChange = (e: any) => {
        newFilter(e.target.value);
    }

    return (
        <React.Fragment>
            <Form className="mt-3">
                <Form.Control type="search" placeholder="Search for a picture by its subject"
                    onChange={handleChange} />
            </Form>

            <div className="bg-light border rounded px-3 pt-3 mt-3">
                <div className="fit-grid">
                    {
                        list.map((item: PicThingsModel, index: number) => (
                            <Thing key={'pth' + index} thing={item} />
                        ))
                    }
                </div>

                {list.length > 0 && <div className="d-flex justify-content-end mt-3">
                    <CustomPagination />
                </div>}
            </div>
        </React.Fragment>
    )
}

interface ThingProp {
    thing: PicThingsModel;
}

const Thing: React.FC<ThingProp> = ({ thing }) => {

    return (
        <React.Fragment>
            <div className="pic-container rounded overflow-hidden">
                <img src={thing.picture} alt="thing" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div className="pic-actions">
                    <Button variant="light" className="rounded-circle d-flex " 
                    style={{width: '40px', height:'40px'}}>
                        <Trash className="align-self-center" size="22" />
                    </Button>
                </div>
            </div>
        </React.Fragment>
    )
}


