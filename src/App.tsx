import { useState } from "react";
import Alerts from "./components/Alerts";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import ExpandableText from "./components/ExpandableText";
import Form from "./components/Form";

function App() {
  return (
    <>
      <ExpandableText maxChars={10}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius quis illo
        illum voluptatibus, tempore, dolores culpa neque maxime temporibus
        possimus nisi ratione eveniet ipsa, laboriosam eligendi consequuntur
        esse. Consequuntur dolore nam, totam officia alias aut aperiam animi.
        Exercitationem voluptatibus, odit nesciunt laboriosam, soluta at labore
        aliquam accusamus modi eius sequi laborum corporis ab alias? Voluptate
        tenetur ad ipsa delectus sint, nulla, aspernatur voluptatem, atque
        commodi quos iusto sit laudantium fugiat laborum ab? Repellendus beatae
        officiis quisquam fugiat cupiditate, alias sunt assumenda voluptas enim.
        Minus quisquam iure maiores, necessitatibus vero voluptatibus
        praesentium dolores odit cumque minima harum similique! Perspiciatis,
        magni saepe.
      </ExpandableText>

      <Form></Form>
    </>
  );
}

export default App;
