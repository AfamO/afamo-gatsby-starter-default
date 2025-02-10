import * as React from 'react';

import { Link } from 'gatsby';
import Layout from  '../components/layout';
import {StaticImage } from 'gatsby-plugin-image';
import OrangeSpots from '../components/OrangeSpots';


const Task2InstructionPage = () => {
  return (
    <Layout pageTitle="Jack and Jill Memory Test Instruction Page">
      <h3>Welcome to the instruction page for <em>Jack and Jill Memory Test</em></h3>
      
      <p>Meet Jill on the left and Jack on the right of the screen. They each have a blue ball in one of their hands..<br/></p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginTop: '-2rem' }}>
      <div
            style={{ backgroundColor: '#ffcc66', padding: '1rem', borderRadius: '10%' }}
          >
            Jill<br/>
            <StaticImage
            alt="Jill"
            src="../images/jill.jpg"
            />
        </div>
        <div
            style={{ backgroundColor: '#ffcc66', padding: '1rem', borderRadius: '10%' }}
          >
            Jack<br/>
            <StaticImage
            alt="Jill"
            src="../images/jack_right_3.jpg"
            />
        </div>
      </div>
      <p>Behind Jack there are 6 different orange spots. Jill can’t move, but Jack can turn, as you can see here. When Jack turns, his ball will cover one of the spots behind him.<br/><strong>Every round, remember which spots the ball covers..</strong><br/></p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginTop: '-2rem' }}>
      <div
            style={{ backgroundColor: '#ffcc66', padding: '1rem', borderRadius: '10%' }}
          >
            Jill<br/>
            <StaticImage
            alt="Jill"
            src="../images/jill.jpg"
            />
        </div>
        <div
            style={{ backgroundColor: '#ffcc66', padding: '1rem', borderRadius: '10%' }}
          >
            Jack<br/>
            <StaticImage
            alt="Jill"
            src="../images/jack_left_6.jpg"
            />
        </div>
      </div>
      <p>Jack turns every time you answer the following question: “Does Jack hold the ball in the same hand as Jill?”. </p>
      <p>Before you answer, <em>remember the spot where the ball is covering.</em><br/></p>
      <p>Jill always holds the ball in the right hand from your view, but Jack can hold the ball in the left or right hand.</p>
      <p>Here he’s got it in the left of <strong>your view</strong>, different from Jill. Click “different” below and also remember the spot the ball is covering.</p>
      <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
          <button
            style={{ padding: '0.5rem 1rem', borderRadius: '0.25rem', backgroundColor: '#007bff', color: 'white', cursor: 'pointer', border: 'none' }}
            onClick={() => {
              alert("Please select Different");
            }}
          >
            Same
          </button>
          <button
            style={{ padding: '0.5rem 1rem', borderRadius: '0.25rem', backgroundColor: '#dc3545', color: 'white', cursor: 'pointer', border: 'none' }}
            onClick={() => {
             alert("Correct! Please remember the spot number");
            }}
          >
            Different
          </button>
        </div>
        <p>Before you answer, <em>memorize and remember the <strong>spot number</strong> where the ball is covering as labelled in the image below.</em><br/></p>
        <OrangeSpots /><br/><br/><br/>
      <p>Now to begin the game,  click <Link to='/start_task3'>Next</Link> to continue to task 3 page.<br/><br/>
      </p>
      
      </Layout>
  );
}

export const Head = () => {
  return (
    <>
    <title>Home Page</title>
    <meta name="description" content="This is the home page" />
    </>
  )
}


export default Task2InstructionPage;