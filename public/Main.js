function Main(){
    return (
        <div className="main">
            <div className="header">
                <Nav />
                <Twitter />
                <Search />
            </div>

            <div className="main-body">
                <div className="col1">
                    <Profile />
                    <Trends />
                </div>

                <div className="col2">
                    <Tweet />
                    <TweetHist />
                </div>

                <div className="col3">
                    <Friends />
                    <Media />
                </div>
            </div>

        </div>
        )
}
