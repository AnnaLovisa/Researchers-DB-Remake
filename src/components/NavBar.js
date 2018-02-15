import React from 'react';

const NavBar = () =>  {
    return (
      <div className="NavBar">
        <strong>Display</strong>
        <div className="btn-group">
            <a href="#" id="list" className="btn btn-default btn-sm"><i className="fa fa-th-list"></i>
                List</a> <a href="#" id="grid" class="btn btn-default btn-sm">
                <i className="fa fa-th"></i>Grid</a>
        </div>
      </div>
    );
}

export default NavBar;