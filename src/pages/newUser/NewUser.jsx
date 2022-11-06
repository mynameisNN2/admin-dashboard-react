import './newUser.css';

export default function NewUser() {
    return (
        <div className='newuser'>
            <h1 className='newuserTitle'>New User</h1>
            <form action="" className='newuserForm'>

                <div className="newuserItem">
                    <label>User Name</label>
                    <input type="text" placeholder='Nima' />
                </div>

                <div className="newuserItem">
                    <label>Full Name</label>
                    <input type="text" placeholder='Nima Noorali' />
                </div>

                <div className="newuserItem">
                    <label>Email</label>
                    <input type="email" placeholder='noorali_nima@yahoo.com' />
                </div>

                <div className="newuserItem">
                    <label>Password</label>
                    <input type="password" placeholder='password' />
                </div>

                <div className="newuserItem">
                    <label>Phone Number</label>
                    <input type="password" placeholder='+98 993 148 0669' />
                </div>

                <div className="newuserItem">
                    <label>Address</label>
                    <input type="password" placeholder='Tehran , Iran' />
                </div>

                <div className="newuserItem">
                    <label>Gender</label>
                    <div className="newuserGender">
                        <input type="radio" name="gender" id="male" value="male" />
                        <label for="male">Male</label>
                        <input type="radio" name="gender" id="female" value="female" />
                        <label for="female">Female</label>
                        <input type="radio" name="gender" id="other" value="other" />
                        <label for="other">Other</label>
                    </div>
                </div>

                <div className="newuserItem">
                    <label>Active</label>
                    <select name="active" id="active" className="newUserselect">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
            </form>
            <button className="newuserbtn" type='submit'>Create</button>
        </div>
    );
}
