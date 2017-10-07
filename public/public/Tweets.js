function Tweets () {
  var tweets = [
    "ACA class was so awesome today.",
    "I just checked out that new restaurant, it was okay",
    "I just saw a movie that changed my life",
    "shirts are 50% of at Macy's today"
  ];
  return (
    <div>
      {tweets.map((item) => {
        return (
          <div key={item}>
            <h2>{item}</h2>
          </div>
        );
      })}
    </div>
  );
}
