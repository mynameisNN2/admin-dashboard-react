import './user.css';
import { PermIdentity, CalendarToday, Phone, Email, LocationOn, Publish } from '@mui/icons-material';
import { Link } from 'react-router-dom';


export default function User() {

    return (
        <div className='user'>
            <div className="usertitleContainer">
                <h1 className='userTitle'>Edit User</h1>
                <Link to="/newUser">
                    <button className="userAddBtn">Create</button>
                </Link>

            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="assets/2.jpg" alt="" className="userShowimg" />
                        <div className="userShowTopTitle">
                            <span className='userShowUserName'>Nima Noorali</span>
                            <span className='userShowUserTitle'>Web Developer</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                            <PermIdentity className='userShowIcon' />
                            <span className="userShowInfoTitle">Nemoni1995
                            </span>
                        </div>
                        <div className="userShowInfo">
                            <CalendarToday className='userShowIcon' />
                            <span className="userShowInfoTitle">10.12.1995
                            </span>
                        </div>
                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                            <Phone className='userShowIcon' />
                            <span className="userShowInfoTitle">+98 993 148 0669
                            </span>
                        </div>
                        <div className="userShowInfo">
                            <Email className='userShowIcon' />
                            <span className="userShowInfoTitle">Noorali_nima@yahoo.com
                            </span>
                        </div>
                        <div className="userShowInfo">
                            <LocationOn className='userShowIcon' />
                            <span className="userShowInfoTitle">Tehran , Iran , Mir-Damad.
                            </span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form action="" className="userUpdateForm">
                        <div className="userUpdateleft">

                            <div className="userUpdateItem">
                                <label>User-Name</label>
                                <input type="text" placeholder='Nemoni1995'
                                    className='userUpdateInput' />
                            </div>

                            <div className="userUpdateItem">
                                <label>Full Name</label>
                                <input type="text" placeholder='Nima Noorali'
                                    className='userUpdateInput' />
                            </div>

                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input type="text" placeholder='Noorali_nima@yahoo.com'
                                    className='userUpdateInput' />
                            </div>

                            <div className="userUpdateItem">
                                <label>Phone</label>
                                <input type="text" placeholder='+98 993 148 066'
                                    className='userUpdateInput' />
                            </div>

                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input type="text" placeholder='Tehran , Iran , Mir-Damad.'
                                    className='userUpdateInput' />
                            </div>

                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img src="assets/myself.jpg" alt="" className="userUpdateImg" />
                                <label for="file"><Publish className='Icon' /></label>
                                <input type="file" id='file' style={{ display: "none" }} />
                            </div>
                            <button className='userUpdateBtn'>Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
