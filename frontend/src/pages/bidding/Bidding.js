import React, { useState } from 'react';
import Axios from 'axios';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useSelector } from 'react-redux';

function Bidding({open,setOpen,data,fetchingCtn}) {

    const [price, setPrice] = useState();
    const user_id = useSelector(state => state.userAction.user_id);
    const userName = useSelector(state => state.userAction.userName);

    const onChangePrice = (e) => {
        setPrice(e.target.value);
    }

    const onSubmitForm = (e) => {
        e.preventDefault();
        Axios.post('http://localhost:4000/api/bidding', {
            request_id: data._id,
            user_id : user_id,
            userName : userName,
            price: price,
        })
            .then(res => {
                alert(res.data.result);
                setOpen(false);
                fetchingCtn();
            })
            .catch(err => {
                console.log(err);
            })
    }

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">입찰하기</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        입력하신 가격과 함께 프로필이 구매자에게 전달됩니다.
                    </DialogContentText>
                    <form onSubmit={onSubmitForm}>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="price"
                            label="총 금액"
                            type="number"
                            fullWidth
                            onChange={onChangePrice}
                        />
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onSubmitForm} color="primary">
                        입찰
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        취소
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default Bidding;

