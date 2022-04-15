import { useSelector } from "react-redux"

export const Profile = () => {
     const { user } = useSelector((store) => store.auth);
    console.log('users', user);

    return (
        <>
            <h1>Profile</h1>
            <div>
                <h3>User Name : {user.user.firstName} {user.user.lastName}</h3> 
                <h3>Email : {user.user.email}</h3>

            </div>
        </>
    )
}