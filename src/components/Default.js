import React from 'react';

class Default extends React.Component{
    render(){
        console.log(this.props);
        return (    
        <div className='container'>
            <div className='row'>
                <div className='col-10 mx-auto text-center text-captialize text-title'>
                    <h1 className='display-3'>404</h1>
                    <h2>Page not found</h2>
                    <h3>
                        The requested URL
                        <span className='text-danger'>
                            {this.props.location.pathname}
                        </span>{""}
                        was not found
                    </h3>
                </div>
            </div>
        </div>
        );
    }
}

export default Default;