import React from 'react'

function SearchBox() {
  return (
      <div className="d-flex row w-100 justify-content-around" id="community">
    <div className=" search-box d-flex gap-5 p-3 col-6" >
        <div className="search-box-icon d-flex p-2">
        <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.7557 14.9283C18.2396 14.4811 17.7374 14.0211 17.2495 13.5488C16.8397 13.172 16.5929 12.8979 16.5929 12.8979L13.5079 11.5653C14.743 10.298 15.4246 8.66671 15.425 6.97723C15.425 3.13078 11.9654 0 7.71249 0C3.4596 0 0 3.13078 0 6.97723C0 10.8237 3.4596 13.9545 7.71249 13.9545C9.65493 13.9545 11.4255 13.2966 12.784 12.2211L14.2571 15.012C14.2571 15.012 14.5601 15.2353 14.9765 15.6061C15.4029 15.9679 15.9637 16.4573 16.5014 16.9686L17.9976 18.3561L18.6631 19L21 16.8859L20.2882 16.2839C19.8707 15.9131 19.3132 15.4207 18.7557 14.9283ZM7.71249 11.961C4.67487 11.961 2.20357 9.72526 2.20357 6.97723C2.20357 4.2292 4.67487 1.99349 7.71249 1.99349C10.7501 1.99349 13.2214 4.2292 13.2214 6.97723C13.2214 9.72526 10.7501 11.961 7.71249 11.961Z" fill="white"/>
</svg>

        </div>

        <input type="search" name="" id="" className=" border-0 bg-transparent w-100" />


        </div>
    </div>
  )
}

export default SearchBox