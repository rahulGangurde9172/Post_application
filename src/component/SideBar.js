const SideBar = ({ selectedTab, setSelectedTab }) => {
    return (
      <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark side-bar" style={{ width: "280px" }}>
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <svg className="bi pe-none me-2" width="40" height="32">
            <use xlinkHref="#bootstrap"></use>
          </svg>
          <span className="fs-4">Post Application </span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
         
         
          <li
            className="nav-item"
            onClick={() => {
              setSelectedTab("home");
             
            }}
          >
            <a href="#" className={`nav-link text-white ${selectedTab === 'home' && 'active'}`} >
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#home"></use>
              </svg>
             Create post
            </a>
          </li>


          <li
            className="nav-item"
            onClick={() => {
              setSelectedTab("create_post");
             
            }}
          >
            <a href="#" className={`nav-link text-white ${selectedTab === 'create_post' && 'active'}`}>
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#speedometer2"></use>
              </svg>
              All post
            </a>
          </li>
        
        </ul>
        <hr />
      </div>
    );
  };
  
  export default SideBar;
  