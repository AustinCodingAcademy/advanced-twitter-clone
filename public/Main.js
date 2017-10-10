function Main(props){
  let mydiv = <div></div>
  [].push(<div></div>);

  let mydivs = props.tweets.map((item) => {
    return <div>{item}</div>
  });


  return (
    <div>
    <div className="border header"><Header /></div>
    <div className="border profile"><Profile /></div>
    <div className="border posttweets"><PostTweets /></div>
    <div className="border tweets"><Tweets tweets={props.mytweets}/></div>
    <div className="border trends"><Trends /></div>
    <div className="border follow"><Follow /></div>
    <div className="border livevideo"><LiveVideo /></div>
  {mydivs} 
    </div>
    )
}
