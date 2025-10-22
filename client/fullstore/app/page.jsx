'use client'

import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Main from "./components/main/Main";

import appContexto from "./context/appContext";
import { useContext } from "react";


export default function Home() {
  const {user, setUser} = useContext(appContexto)
  return (
    <div>
      <Header></Header>
      <Nav></Nav>
      <Main></Main>
    </div>
  );
}
