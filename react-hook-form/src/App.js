import React from "react";
import "./App.css";
import Input from "./components/Input/input";
import { useState } from "react";
import { userSchema } from "./schemas/user";
import { joiResolver } from "@hookform/resolvers";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

const App = () => {
  const { register, handleSubmit, errors } = useForm({
    mode: "all",
    resolver: joiResolver(userSchema),
  });

  const onSubmit = (data) => console.log("Data", data);

  const [state, setState] = useState({
    name: "",
    phone: "",
    email: "",
  });

  useEffect(() => {
    console.log("Errors", errors);
  }, [errors]);

  return (
    <div className="App">
      <div
        style={{
          height: "250px",
          width: "250px",
          margin: "0 auto",
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input         
            defaultValue={state.name}
            onChange={(event) => {
              const inputValue = event.target.value;
              console.log('Value', inputValue);
              setState((previous) => ({
                ...previous,
                name: inputValue,
              }));
            }}
            label="Name"
            ref={register}
            erroMessage={errors.name?.message}
            name="name"
          />
          <Input
            defaultValue={state.phone}
            onChange={(event) => {
              const inputValue = event.target.value;
              setState((previous) => ({
                ...previous,
                phone: inputValue,
              }));
            }}
            label="Phone"
            ref={register}
            erroMessage={errors.phone?.message}
            name="phone"
          />
          <Input
            defaultValue={state.email}
            onChange={(event) => {
              const inputValue = event.target.value;
              setState((previous) => ({
                ...previous,
                email: inputValue,
              }));
            }}
            label="Email"
            ref={register}
            erroMessage={errors.email?.message}
            name="email"
          />
          <input type="submit" value="Salvar" />
        </form>
      </div>
    </div>
  );
};

export default App;
