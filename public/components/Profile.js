function Profile() {
   return (
    <div className="profile">
      <div className="ptop"></div>
      <div className="pinfo">
        <img id="ppic" src="http://i.imgur.com/sIpoA2K.jpg"/>
        <div className="user">
          <h3>FirstName LastName</h3>
          <p>@username</p>
        </div>
        <div className="pstats">
          <div className="pstat">
            <p className="plabel">TWEETS</p>
            <p className="pnum">150</p>
          </div>
          <div className="pstat">
            <p className="plabel">FOLLOWING</p>
            <p className="pnum">50</p>
          </div>
          <div className="pstat">
            <p className="plabel">FOLLOWERS</p>
            <p className="pnum">100</p>
          </div>
        </div>
      </div>
    </div>
  );
 }
export default Profile;
