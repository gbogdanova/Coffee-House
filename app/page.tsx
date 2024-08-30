"use client";

import { Container } from "./components/Container";
import { HomeBanner } from "./components/HomeBanner";
import { HomeApp } from "./components/HomeApp";
import { HomeSwiper } from "./components/HomeSwiper";

export default function Home() {
  return (
    <Container>
      <HomeBanner/>
      <HomeSwiper/>
      <HomeApp/>
    </Container>
  );
}
