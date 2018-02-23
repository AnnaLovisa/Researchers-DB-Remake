import React from 'react';
import Header from './header'

const NavBar = () =>  {
    return (
      <div className="row d-flex justify-content-between p-2 navigation-style">
        {/*This should only appear for admins*/}
        <div className="col-xs-2">
            <Header />
            
        </div>
        <div className="col-xs-2">           
            <strong>Display</strong>
            <a href="" id="list" className="link-style"><i className="fa fa-th-list"></i>
                List</a> <a href="" id="grid" className="btn">
                <i className="fa fa-th"></i>Grid</a>
            <div className="row ">
                <div className="col-xs-12">
                    <a href="" id="addlink" className="btn">
                        Add new researcher</a>
                </div>
            </div>
        </div>
      </div>
    );
}

export default NavBar;