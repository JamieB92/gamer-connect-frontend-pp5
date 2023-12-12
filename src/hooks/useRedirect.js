import axios from "axios";
import { useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

export const useRedirect = (userAuthStatus) => {
    const history = useHistory();

    useEffect(() => {
        const handleMount = async () => {
            try {
                await axios.posts('/dj-rest-auth/token/refresh/')
                // If user is logged in this will run
                if (userAuthStatus === 'loggedIn'){
                    history.push('/')
                }
            } catch(err) {
                // if user is not logged in this will run
                if (userAuthStatus === 'loggedOut'){
                    history.push('/')
                }
            }
        }
        handleMount();
    }, [history, userAuthStatus])
}