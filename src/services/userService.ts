
const baseURL:string = 'https://randomuser.me/api/'

const buildURL = (gender?:string) => {
    return gender ? `${baseURL}?gender=${gender}` : `${baseURL}`
};

export { baseURL, buildURL }