
const baseURL:string = 'https://randomuser.me/api/?page=1&results=10'

const buildURL = (gender?:string) => {
    return gender ? `${baseURL}&gender=${gender}` : `${baseURL}`
};

export { baseURL, buildURL }