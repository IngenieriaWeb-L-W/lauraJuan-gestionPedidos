/* eslint-disable import/no-default-export */
import React from "react";
import Card from "./card";

const Index = () => {
    
  return (
    <div>
      <section className="text-gray-600 body-font bg-white shadow dark:bg-gray-900">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 gap-5 justify-center items-center">
            
             <Card/> 
             <Card/> 
             <Card/> 
             <Card/> 
             <Card/> 
             <Card/> 
             
            
          </div>
        </div>
      </section>
    </div>
  );
};
export default Index

