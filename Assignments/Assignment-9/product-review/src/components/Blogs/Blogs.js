import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="qsn-ans">
      <h1>Questions & Answers</h1>
      <h2 style={{ color: "red" }}>Q1. What is Semantic Tags?</h2>
      <p>
        Semantic tags are meaningful tags. We can provide more information about
        a webpage by using the semantic tags. Semantic elements clearly define
        its content. The semantic HTML tags help the search engines and other
        user devices to determine the importance and context of web pages.The
        pages made with semantic elements are much easier to read. It has
        greater accessibility. It offers a better user experience.If we use
        semantic tag browser can easily understand the webpage content and
        semantic tag are also SEO friendly. <br />
        <b>Some semantic tags example: </b> <br />
        <ul>
          <li>
            <b>header</b>: It defines a header for a web page. <br />
          </li>
          <li>
            <b>nav</b>: It defines a container for navigation links. <br />
          </li>
          <li>
            <b>section</b>: This defines a section in a web page. <br />
          </li>
          <li>
            <b>article</b>: This element contains the main part, containing
            information about the web page. <br />
          </li>
          <li>
            <b>aside</b>: The aside content is often placed as a sidebar in a
            document. <br />
          </li>
          <li>
            <b>footer</b>: It defines a footer for a document or a section.{" "}
            <br />
          </li>
        </ul>
      </p>

      <h2 style={{ color: "red", marginTop: "70px" }}>
        Q2. What is the difference between inline & block element?
      </h2>
      <b>Block elements: </b>
      <ul>
        <li>
          A block-level element always starts on a new line, and the browsers
          automatically add some space (a margin) before and after the element.
        </li>
        <li>A block-level element always takes up the full width available</li>
        <li>A block-level have top and bottom margins</li>
        <li>
          Block-level element does not contain any other elements next to it.
        </li>
      </ul>
      <b>Inline Element: </b>
      <ul>
        <li>An inline element does not start on a new line.</li>
        <li>An inline element only takes up as much width as necessary.</li>
        <li>Inline dont have top and bottom margins as block elements have.</li>
        <li>A inline element contain elements next to it.</li>
      </ul>
    </div>
  );
};
export default Blogs;
