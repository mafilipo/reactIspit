import React from "react";

export default function UserRepos(props) {
  const { repos } = props;
  console.log("**************", repos);
  return (
    <div>
      {repos &&
        repos.length &&
        repos.map((r) => <div key={r.id}>{r.full_name}</div>)}
    </div>
  );
}
