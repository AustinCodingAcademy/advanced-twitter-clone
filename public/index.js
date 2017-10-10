console.log(tweets);

ReactDOM.render(
  <App mytweets = {tweets} />,
  document.getElementById('root')//there has to be a starting point for where to put your element
);
