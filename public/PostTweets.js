class PostTweets extends React.component{
constructor(){
  super();
  this.state={
    theword:""
  }
}

render(){
  function hello(){
    console.log("hello")
  }

  return (
    <h1>
    <input onChange={(e)=>{
        this.setState({theword:e.target.value});
      }} />
    <button onClick={hello}> Click Me To Submit A Tweet! </button>
  </h1>
    )
  }
}
