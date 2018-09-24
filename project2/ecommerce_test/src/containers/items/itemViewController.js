import * as React from 'react';
import {ItemViewPage} from './itemViewPage';
import {CompanyItemViewPage} from './companyItemViewPage';
import {connect} from 'react-redux';

export class ItemViewController extends React.Component
{
    render()
    {
        
        let page;
        const user = JSON.parse(localStorage.getItem("user"));
        // console.log("user from ivc");
        // console.log(user);

        if(user && user[0].role === "company")
        {
            page = <CompanyItemViewPage history={this.props.history} currentProduct={this.props.currentProduct}/>;
        }
        else
        {
            page = <ItemViewPage history={this.props.history} currentProduct={this.props.currentProduct}/>;
        }

        return(
            <div>
                {page}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {currentProduct: state.product.currentProduct}
}

export default connect(mapStateToProps, null)(ItemViewController);