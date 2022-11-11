import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useGlobalContext } from "./Context";

const SingleUser = () => {
  const { users } = useGlobalContext();
  const { id } = useParams();

  const NewArray = users.find((val) => {
    return val.login.uuid === id;
  });

  console.log(users);

  const {
    gender: gender,
    password: password,
    picture: { large },
    name: { first, last },
  } = NewArray;

  return (
    <section className="app">
      <div className="user">
        <img src={large} />
        <p>{`FullName: ${first} ${last}`}</p>
        <p>{`Gender: ${gender}`}</p>
        <p>{`password: ${password}`}</p>

        <Link to="/Users">back to users</Link>
      </div>
    </section>
  );
};

export default SingleUser;
