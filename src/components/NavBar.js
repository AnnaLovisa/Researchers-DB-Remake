import React from 'react';

const NavBar = () =>  {
    return (
      <div className="row">
        {/*This should only appear for admins*/}
        <div className="col-xs-2 pull-left">
            <a href="" id="addlink" className="btn">
                Add new researcher</a>
        </div>
        <div className="col-xs-2 pull-right"><strong>Display</strong>
            <a href="" id="list" className="btn"><i className="fa fa-th-list"></i>
                List</a> <a href="" id="grid" className="btn">
                <i className="fa fa-th"></i>Grid</a>
        </div>
      </div>
    );
}

export default NavBar;