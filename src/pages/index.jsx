import React from "react";
import Button from "../ui/button";
import Input from "../ui/input";

function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Home Component</h1>
      <form className="flex gap-2">
        <Input placeholder="search kiritig" type="search" />
        <Button type={"primary"}>Button Home</Button>
      </form>
    </div>
  );
}

export default Home;
