import React from "react";

export default function UserDetails(props) {
  const { userDetails } = props;
  console.log("test: ", userDetails);

  return (
    <div>
      {userDetails && (
        <>
          <br />
          <img
            style={{ height: "100px", width: "100px" }}
            src={userDetails.avatar_url}
            alt={userDetails.avatar_url + "user avatar"}
          />

          <h2>{userDetails.name}</h2>
          <div>{userDetails.location}</div>
          <div>{userDetails.bio}</div>
          

        </>
      )}
    </div>
  );
}
