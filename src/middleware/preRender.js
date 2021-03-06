
const defaultFetchData = () => Promise.resolve();

const preRenderMiddleware = ({ routes, location, params }) => {
    const matchedRoute = routes[routes.length - 1];
    const fetchDataHandler = matchedRoute.fetchData || defaultFetchData;
    return fetchDataHandler(params);
};

export default preRenderMiddleware;
