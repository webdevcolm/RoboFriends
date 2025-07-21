import React from "react";

class Error extends React.Component{
    constructor(props){
        super(props);
        this.state={
            error: false
        }
    }
    componentDidCatch(){
        this.setState({error:true})
    }
    render(){
        return(this.state.error? <h1>opppppsss!!</h1>: this.props.children)
        
}
}
export default Error