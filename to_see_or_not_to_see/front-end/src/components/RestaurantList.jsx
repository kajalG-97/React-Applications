import { useSelector } from "react-redux";

export const RestaurantList = () => {
    const { isAuthenticated, token } = useSelector((store) => store.auth);
    console.log('token', token);
    console.log('isAuthenticated', isAuthenticated);
    return (
        <>
        RestaurantList here
        </>
    )
}