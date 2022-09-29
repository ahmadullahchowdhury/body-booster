import React from "react";
import "react-accessible-accordion/dist/fancy-example.css";
import "./Blog.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const Blog = () => {
  return (
    <div className="blog-container">
      <div className="accordion-container">
        
      <Accordion>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              How React Works?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
            React is JavaScript library which is developed by Facebook. React is frontend library which is very fast. Behind the scene, React works bit differently because of this. When something changes in the DOM React doesn't render whole DOM againg. Rather it only, render the the changes only. How can they do it? They tracks the page with a virtual DOM and by diff algorithm they can track only the changes and apply it in the page by render(). 
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Difference between State and Props?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
            The main difference between Props and State is that Props data can be flowed from parent to child components where as State works only within the components. Props can be passed to child component state but the child component can't update it. Props are used to communicate between component where as States can be used for rendering dynamic changes with the component. 
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
             What is usage of useEffect expect data loading?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
            useEffect is react hook. By which we can do many things. In the last milestone we mostly used useEffect to load data. But one case we also used it while state is being changed. After some research i found that useEffect can be used to track login data with live feedback. 
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
      </div>
    </div>
  );
};

export default Blog;
