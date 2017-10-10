function Tweets(){
  return <h1>My Twitter Feed</h1>

}

<script>

  var h3 = document.createElement("h3");
  h3.innerHTML = tweets[0];
  document.body.appendChild(h3);

</script>

<script type="text/jsx">
var tweet = React.createElement("h3",null,tweets[1])
ReactDOM.render(
  tweet,
  document.getElementById('root')
);
</script>
