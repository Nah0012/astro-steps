import { h } from 'preact';
import { useState } from 'preact/hooks';
import classes from './Greeting.module.css';

export default function Greeting({messages}) {

  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div>
      <h3 className={classes.greeting}>{greeting}</h3>
      <button className={classes.button} onClick={() => setGreeting(randomMessage())}>
        あいさつする！
      </button>
    </div>
  );
};

