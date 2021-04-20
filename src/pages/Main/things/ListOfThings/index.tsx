import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Trash } from 'react-bootstrap-icons';
import { useHistory } from 'react-router-dom';
import { AppState, CustomResponse, PicThingsModel } from '../../../../model/app.model';

import { FilrableGrid } from '../../words/shared/FilrableGrid';
import { useConfirmDialog } from '../../../../components/ConfirmDialog';
import { useSelector } from 'react-redux';
import { deleteThing, getThings } from '../../../../store/actions/thing.actions';
import { useSharedContext } from '../../../../Context';
import { Collections, useCache } from '../../../../cache';
import { useSnackbar } from '../../../../components/Snackbar';
import useStorage from '../../../../firebase/useStorage';

const ListOfThings: React.FC = () => {
    const history = useHistory();
    const things: any = useSelector((appState: AppState) => appState.things);
    const { dispatch } = useSharedContext();
    const { find, findOneAndDelete } = useCache(Collections.THINGS);

    useEffect(() => {
        find().then((res) => {
            if (res.success) {
                dispatch(getThings(res.data));
            }
            else {
                console.log(res.message);
            }
        })
        .catch(err => console.error(err));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


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

            <Things dataSource={things} findOneAndDelete = {findOneAndDelete} />
        </React.Fragment>
    )
}

interface ThingsProps {
    dataSource: PicThingsModel[];
    findOneAndDelete: (id: string) => Promise<CustomResponse>;
}

const Things: React.FC<ThingsProps> = ({ dataSource, findOneAndDelete }) => {

    return (
        <FilrableGrid dataSource = {dataSource}>
            {
                (item: PicThingsModel) => (
                    <Thing thing={item} findOneAndDelete = {findOneAndDelete} />
                )
            }
        </FilrableGrid>
    )
}

interface ThingProp {
    thing: PicThingsModel;
    findOneAndDelete: (id: string) => Promise<CustomResponse>;
}

const Thing: React.FC<ThingProp> = ({ thing, findOneAndDelete }) => {

    return (
        <React.Fragment>
            <div className="pic-container rounded overflow-hidden" style={{backgroundColor: 'lightgray'}}>
                <img src={thing.picture} alt="thing" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div className="pic-actions">
                   <RemoveContainer thing = {thing} findOneAndDelete = {findOneAndDelete} />
                   <small className="text-white">{thing.label}</small>
                </div>
            </div>
        </React.Fragment>
    )
}

const RemoveContainer: React.FC<ThingProp> = ({thing, findOneAndDelete}) => {
    const { dispatch } = useSharedContext();
    const { ConfirmDialog, toggleConfirmMessage, setIsloading } = useConfirmDialog({
        message: 'Are you sure you want to remove this Pic? This cannot be undone.',
        onConfirmClick: onConfirm
    });
    const {Snackbar, showMsg} = useSnackbar();
    const { removeUpload } = useStorage();

    function onConfirm() {
        setIsloading(true);
        const id = thing.id || '';
        
        removeUpload(id).then(()=>{
            findOneAndDelete(id).then((res) =>{
                if(res.success){
                    dispatch(deleteThing(id));
                    toggleConfirmMessage();
                }
                else{
                    showMsg('Failed to remove', 'Something wrong, We cannot remove this picture', 'danger');
                }
            }).catch(err => console.log(err.message));
        })
        .catch(err =>{
            showMsg('Failed to remove', err.message, 'danger');
        });
    }

    return (
        <React.Fragment>
             <Button variant="light" className="rounded-circle d-flex "  onClick={toggleConfirmMessage}
                    style={{width: '40px', height:'40px'}}>
                        <Trash className="align-self-center" size="22" />
             </Button>
            <ConfirmDialog />
            <Snackbar />
        </React.Fragment>
    )
}

export default ListOfThings;


