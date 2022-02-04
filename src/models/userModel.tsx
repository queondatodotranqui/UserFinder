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

type Props = {};



export type{
    UserData,
    UserName,
    UserPicture,
    Props
}