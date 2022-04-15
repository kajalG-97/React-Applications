import { useSelector } from "react-redux"

export const Profile = () => {
    const { user } = useSelector((store) => store.auth);
    console.log('users', user);

    return (
        <>
            <h2>Profile</h2>
            <div style={{ padding: '10px 10px' }}>
                <h4>User Name : {user.user.firstName} {user.user.lastName}</h4>
                <h4>Email : {user.user.email}</h4>
                <br />
            </div>
        </>
    )
}