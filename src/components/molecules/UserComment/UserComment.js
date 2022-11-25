import React, { useEffect, useState } from "react";
import { baseUrl } from "../../../config";
import Button from "../../atoms/Button/Button";
import Img from "../../atoms/Img/Img";
// import Button from "../../atoms/Button";
// import Img from "../../atoms/Img/Img";
export default function UserComment({ comment,deleteComment}) {
  // //(comment)
  let [user, setUser] = useState("");
  let[profileImage,setProfileImage]=useState("")
  let userId=parseInt(sessionStorage.getItem("user-id"))
  const getUser = async () => {
    let res = await fetch(`${baseUrl}users?id=${comment.userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await res.json();
    //(data);
//  useEffect(()=>{
  setUser(data[0].name);
  setProfileImage(data[0].profile_image);
  //(data[0].profile_image);
  //(data.name)
//  })
    // //(user)
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <div className="my-4 border-b py-6">
      <div className="font-semibold text-lg flex items-center ">
        <div>
      <Img src={profileImage} alt="profile image" className="profile-image" width="30px"/>
        </div>
        <div>{user}</div>
      </div>
      <div className="flex gap-5 items-center">
      <div className="py-2 my-2">{comment?.content}</div>
    {(comment.userId===userId)&&  <Button bg='inherit' className='icon-button' onClickHandler={()=>{deleteComment(comment)}}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1}
          stroke="black"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>
      </Button>}
      </div>
    </div>
  );
}