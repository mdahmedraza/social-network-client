import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';

const Profile = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const {user} = useSelector((state) => state.user);
    const {posts} = useSelector((state) => state.posts);
    const [userInfo, setUserInfo] = useState(null);
    const [loading, setLoading] = useState(false);
    return(
        <div>Profile</div>
    )
}
export default Profile;