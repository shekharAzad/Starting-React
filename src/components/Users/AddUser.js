import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUsers.module.css";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../UI/Helpers/Wrapper";
import TestWrapper from "../UI/Helpers/TestWrapper";

const AddUser = (props) => {
  // const [enterUsername, setEnterUsername] = useState("");
  // const [enterAge, setEnterAge] = useState("");
  const [error, setError] = useState();

  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const addUserHandler = (event) => {
    event.preventDefault();
    // console.log(nameInputRef.current.value);
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });

      return;
    }

    if (+enteredUserAge < 1) {
      setError({
        title: "invalid age",
        message: "Please enter a valid age(>0).",
      });
      return;
    }
    // console.log(enterUsername, enterAge);
    props.onAddUser(enteredName, enteredUserAge);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
    // setEnterUsername("");
    // setEnterAge("");
  };

  // const userChangeHandler = (event) => {
  //   setEnterUsername(event.target.value);
  // };

  // const ageChangeHandler = (event) => {
  //   setEnterAge(event.target.value);
  // };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <TestWrapper>
      <Wrapper>
        {error && (
          <ErrorModal
            title={error.title}
            message={error.message}
            onConfirm={errorHandler}
          ></ErrorModal>
        )}

        <Card className={classes.input}>
          <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              // value={enterUsername}
              // onChange={userChangeHandler}
              ref={nameInputRef}
            ></input>

            <label htmlFor="age">Age (Years)</label>
            <input
              id="age"
              type="number"
              // value={enterAge}
              // onChange={ageChangeHandler}
              ref={ageInputRef}
            ></input>
            <Button type="submit"> AddUser</Button>
          </form>
        </Card>
      </Wrapper>
    </TestWrapper>
  );
};

export default AddUser;

//  Here Use Two Concept UseState & UseRef.
//  When we are using UseState Hook than we will all Comment code is unComment.
