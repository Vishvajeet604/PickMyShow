import React from 'react';
class ErrorBoundary extends React.Component {
constructor(props) {
    super(props);
    this.state={
        hasError:false,
    };
}
static getDerivedStateFromError(error){
    return{
        hasError:true,
    }
}
componentDidCatch(error, Info){
    console.log(error);
    console.log(Info);
}
render(){
    if(this.state.hasError==true){
        return(<>
        <h1>Something went wrong.</h1>;
        </>)
    }
    else{
        return (this.props.children);
    }
        
}
}
export default ErrorBoundary;