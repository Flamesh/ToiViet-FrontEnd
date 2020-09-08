import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
    Grid, Card, Tooltip, IconButton, Button, TextField,
    Checkbox, FormGroup,
    InputAdornment, Collapse, FormControlLabel, FormControl, FormLabel
} from '@material-ui/core'
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import cover from 'assets/img/cover.jpeg';
import avatar from 'assets/img/logo.png';
import AccountCircle from '@material-ui/icons/AccountCircle';
import FaceIcon from '@material-ui/icons/Face';
import DraftsIcon from '@material-ui/icons/Drafts';
import PhoneIcon from '@material-ui/icons/Phone';
import HomeIcon from '@material-ui/icons/Home';
import "./Profile.scss"

import {userFetch} from 'variables/user';

function Profile(props) {

    const [edit, setEdit] = useState(true);
 
    const [user, setUser] = useState({
        userName: userFetch.userName, 
        name: userFetch.name,
        avatarUrl: userFetch.avatarUrl, 
        gender: userFetch.gender, 
        email: userFetch.email,
        phoneNumber: userFetch.phoneNumber, 
        addr: userFetch.addr
    }) 

    const handleEdit = () => {
        setEdit((prev) => !prev)
    }

    const handleSetGender = (e) => {
        setUser({...user, gender: e.target.value})
    }

    const handleChangeText = (name) => (e) => {
        setUser({...user, [name]: e.target.value})
    }
    return (
        <div className="root-profile">
            <Grid container>
                <Grid item xs={1} sm={1} md={2} lg={2} xxl={2} />
                <Grid item xs={10} sm={10} md={8} lg={8} xl={8} xxl={8}>
                    <div className="header-profile">
                        <Card>
                            <img src={cover} alt="cover" className="cover" />
                            <div className="btn-change-cover">
                                <Tooltip title="Thay đổi ảnh">
                                    <IconButton type="submit">
                                        <PhotoCamera />
                                    </IconButton>
                                </Tooltip>
                            </div>
                            <img src={avatar} alt="avatar" className="avatar" />
                            <div className="btn-change-ava">
                                <Tooltip title="Thay đổi ảnh">
                                    <IconButton type="submit">
                                        <PhotoCamera />
                                    </IconButton>
                                </Tooltip>
                            </div>
                            <div className="avatar-info-content">
                                <div className="name">{user.name}  {" "}
                                    <a>{user.userName} </a>
                                    <Button style={{display: edit ? "none" : ""}} className="btn-edit" variant="outlined" color="primary" onClick={handleEdit}>Thay đổi</Button>
                                </div>
                                <div>
                                    <div>5 Follower - 10 Flowing</div>
                                </div>
                            </div>

                        </Card>
                    </div>
                    <Collapse in={edit}>
                        <div className="body">
                            <Grid container justify="space-around" alignItems="center" >
                                <Grid item xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
                                    <div style={{ display: "inherit" }}>
                                        <TextField
                                            id="name"
                                            label="Họ tên"
                                            value={user.name}
                                            onChange={handleChangeText("name")}
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <AccountCircle />
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />
                                        <TextField
                                            id="userName"
                                            label="Tên hiển thị"
                                            value={user.userName}
                                            onChange={handleChangeText("userName")}
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <FaceIcon />
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />
                                        <div>
                                            <FormControl>
                                                <FormLabel >Giới tính</FormLabel>
                                                <FormGroup aria-label="position" row>
                                                    <FormControlLabel
                                                        control={<Checkbox color="primary" value="MALE" checked={user.gender === "MALE"} onChange={handleSetGender} />}
                                                        label="Nam"
                                                        labelPlacement="top"
                                                    />
                                                    <FormControlLabel

                                                        control={<Checkbox color="primary" value="FEMALE" checked={user.gender === "FEMALE"} onChange={handleSetGender} />}
                                                        label="Nữ"
                                                        labelPlacement="top"
                                                    />
                                                    <FormControlLabel
                                                        value="null"
                                                        control={<Checkbox color="primary" checked={user.gender === "null"} onChange={handleSetGender} />}
                                                        label="Khác"
                                                        labelPlacement="top"
                                                    />
                                                </FormGroup>
                                            </FormControl>
                                        </div>

                                    </div>
                                </Grid>
                                <Grid item xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
                                    <div style={{ display: "inherit" }}>
                                        <TextField
                                            id="email"
                                            label="Email"                                            
                                            value={user.email}
                                            onChange={handleChangeText("email")}
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <DraftsIcon />
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />
                                        <TextField
                                            id="phoneNumber"
                                            label="Số điện thoại"
                                            value={user.phoneNumber}
                                            onChange={handleChangeText("phoneNumber")}
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <PhoneIcon />
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />
                                        <TextField
                                            id="address"
                                            label="Địa chỉ"
                                            value={user.addr}
                                            onChange={handleChangeText("addr")}
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <HomeIcon />
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />
                                    </div>
                                </Grid>
                <Grid item xs={6}>
                    <Button variant="contained" color="primary" onClick={handleEdit}>
                        Lưu
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Button variant="contained" color="secondary" onClick={handleEdit}>
                        Hủy
                    </Button>
                </Grid>
                            </Grid>
                        </div>
                    </Collapse>
                </Grid>

                <Grid item xs={1} sm={1} md={2} lg={2} xxl={2} />
                
            </Grid >

        </div>


    )
}

Profile.propTypes = {

}

export default Profile

