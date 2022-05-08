import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='mx-5' >
                <h1 className='text-center mt-3'>Question-Answare</h1>
                <h3 className='mt-5'>1.Difference between Javascript and Node.js:</h3>
                <p>javascript is a scripting languges that runs in any browser javascript engine and.usually to run run javascript we need v8 engine in browser part but in node js it is run time compiler.it works on back end.on the other hand javascript works on front end which is client side
                </p>

                <h3 className='mt-5'>2. When should you use nodejs and when should you use mongodb??</h3>
                <p>Mongodb is a database .We put out data in mongodb.then by using node js we parse that data and from that server we fecth the data in the client side.also we send data from client side to server side then after performing some operation using node.js we send those data to mogoDb which is a data base

                </p>
                <h3 className='mt-5'>2.  Differences between sql and nosql databases.</h3>
                <p>Sql is a relational database.on the other hand no sql mean non relational or sometime not sequel database.no sequel database doesn't have specific data scheduling.you can put data into nosql by any way like object json but in sql we put data using table.no sql is both horizontally and vertically scalable no sql is not
                </p>
            </div>
        </div>
    );
};

export default Blogs;