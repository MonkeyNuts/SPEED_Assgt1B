import React from "react";
 
const Home = () =>  {
    return (
      <div>
        <h2> Welcome to SPEED</h2>
        <p>
          SPEED stands for Software Practice Empirical Evidence Database. It is an important and powerful tool that allows
          developers to easily and efficiently research software development practices. SPEED uses a crowd-sourced collection
          of scholarly articles to empower software teams, enabling them to produce better code and products.
        </p>
        <h3>Anybody can submit an article for review</h3>
        <p>
          If you think you have found an article that should be on SPEED, then we can make it happen. Simply visit the Submit
          Article page and fill in the fields to send the article through to our Moderation team. If it fits our acceptance
          criteria, and is not already on the database, then it will be added.
        </p>
        <h3>Filter through our entire collection</h3>
        <p>
          By navigating to our Select A Practice page, you will be able to sort through our listed articles based on the practice
          that they relate to. You can also sort by any of the listed fields.
        </p>
      </div>
    );
  }
 
export default Home;