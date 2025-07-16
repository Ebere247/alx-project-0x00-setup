import React from "react";
import Button from "../components/Button";
import Card from "@/components/Card";

const Landing: React.FC = () => {
  return (
    <div className="p-10 space-y-4">
      <h1 className="text-xl font-extralight">Landing Page</h1>
      <Card />
      <div className="flex flex-col gap-4">
        <Button title="Small Button" styles="text-sm rounded-sm" />
        <Button title="Medium Button" styles="text-base rounded-md" />
        <Button title="Large Button" styles="text-lg rounded-full" />
      </div>
    </div>
  );
};

export default Landing;
