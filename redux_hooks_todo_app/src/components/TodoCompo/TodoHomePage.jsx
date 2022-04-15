import { useSelector } from "react-redux"

export const TodoHomePage = () => {
    const { loding, error } = useSelector((store) => store.todo);
    const { user } = useSelector((store) => store.auth);
    console.log('users', user);

    return loding ? <img src="https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif" /> : error ? <img src="https://cdn.dribbble.com/users/2469324/screenshots/6538803/comp_3.gif" alt="Oops something went wrong" /> : (
        <>
        hello</>
    )
}