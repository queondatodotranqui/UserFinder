type UserName = {
    first:string,
    last:string,
    title:string
}

type UserPicture = {
    large:string,
    medium:string,
    thumbnail:string
}

type UserData = {
    gender:string,
    name:UserName,
    picture:UserPicture,
    email:string
}

type PropsGenderFilter = {
    handleGender:Function,
    onToggle:Function,
    setSearch:Function
};

type FetchingData = {
    url:string,
    search:boolean,
    setSearch:Function
}   

type Props = {}

export type{
    UserData,
    UserName,
    UserPicture,
    Props,
    PropsGenderFilter,
    FetchingData
}