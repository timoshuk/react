import React, {Component} from "react";


export default class Comment extends Component {
state ={
    showComment: false
};
    render(){
        const btnData = this.state.showComment ? 'Close' : 'Open';
        return (<div className="coment">
                    <button onClick={this.toggleShow}>{btnData}</button>
                    {this.showComment()}
                </div>);

    }

    toggleShow = ()=>{
        this.setState({showComment: !this.state.showComment});
    };

    showComment = () =>{
        if(!this.state.showComment){
            return false
        }else{
            return (<div>
                <h2>Title</h2>
                <div>Sam text for comments</div>
            </div>);
        }
    };

    
}
