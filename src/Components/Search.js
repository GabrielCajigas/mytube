import React from 'react';

class Search extends React.Component {
    state = {
        video: 'Search'
    };
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.handleForm(this.state.video);
    }

    render() {
        return (
            <div className='container mt-2 mb-2 p-2'>
                <form onSubmit={this.handleSubmit} className='input-group'>
                    <div className="input-group-prepend">
                        <span className="input-group-text" ><i className="fa fa-search" aria-hidden="true"></i></span>
                    </div>
                    <input className="form-control" onChange={this.handleChange} name='video' type="text" value={this.state.video}/>
                </form>
            </div>
        )
    }
}
export default Search;