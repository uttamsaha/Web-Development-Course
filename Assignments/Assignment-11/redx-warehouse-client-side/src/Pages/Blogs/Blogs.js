import React from 'react'

const Blogs = () => {
  return (
    <div>
      <div className='container mt-4'>
       <div>
       <h4>Q1. Difference between JavaScript and NodeJs:</h4>
        <p><b>Answer: </b></p>
        <p><b>JavaScript:</b></p>
        <ul>
          <li>It is a programming language. We use JS mainly to write scripts on a website that makes web pages more dynamic in nature.	</li>
          <li>We can only run JS on browsers.	</li>
          <li>It is utilised on the web page’s client-side.	</li>
          <li>The JS can easily add HTML and even play with the DOM.	</li>
          <li>It runs mainly on the client-side. Thus, it is used in the development of the front end.	</li>
        </ul>

        <p><b>NodeJS:</b></p>
        <ul>
          <li>It is a runtime environment for Javascript that lets a user run this programming language on the server-side as well.</li>
          <li>NodeJS helps us run JS outside the browser as well.</li>
          <li>It lets us use JS on the server-side as well since it works on the server-side.</li>
          <li>Inside Node.JS, we have the JS engine known as V8. It helps in parsing and running the JS code.</li>
          <li>It runs on the server-side. Thus, it helps in the server-side development via the JS.</li>
        </ul>
       </div>

       <div className='mt-5'>
         <h4>Q2.  When should you use nodejs and when should you use mongodb</h4>
         <p><b>Answer: </b>NodeJS is a JavaScript runtime environment. It's actually helps JavaScript to run outside of server. It's used in server side development.
         But, MongoDB is NoSQL database which is document oriented. It represents data as of JSON documents. It's used for store data.The summary is MongoDB is a database where we can store data and NodeJS helps us to to connect our client site to database by it's server site.Suppose you are building a website and you need a database to store the data or information so here you can use MongoDB but to be connected with MongoDB you need a connector, so here you can use NodeJS which will help your website to run outside of server.</p>
       </div>

       <div className='mt-5'>
         <h4>Q3. Differences between sql and nosql databases.</h4>
         <p><b>Answer: </b></p>
         <p><b>SQL:</b></p>
         <ul>
           <li>Databases are categorized as Relational Database Management System (RDBMS)</li>
           <li>SQL databases have fixed or static or predefined schema</li>
           <li>SQL databases display data in form of tables so it is known as table-based database.</li>
           <li>SQL databases are vertically scalable.</li>
           <li>SQL databases use a powerful language "Structured Query Language" to define and manipulate the data.</li>
           <li>SQL databases are best suited for complex queries.	</li>
         </ul>

         <p><b>NoSQL:</b></p>
         <ul>
           <li>NoSQL databases are categorized as Non-relational or distributed database system.</li>
           <li>NoSQL databases have dynamic schema.</li>
           <li>NoSQL databases display data as collection of key-value pair, documents, graph databases or wide-column stores.</li>
           <li>NoSQL databases are horizontally scalable.</li>
           <li>In NoSQL databases, collection of documents are used to query the data. It is also called unstructured query language. It varies from database to database.</li>
           <li>NoSQL databases are not so good for complex queries because these are not as powerful as SQL queries.</li>
         </ul>

       </div>
      </div>
    </div>
  )
}

export default Blogs;