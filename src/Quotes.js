import React, { Component } from 'react'





export class Quotes extends Component {
    
    state = {
        loading:true,
        quotes:null
      };
    
      async componentDidMount() {
       const name= this.props.name;
        let url2=`https://www.breakingbadapi.com/api/quote?author=`;
        for (let i=0;i<name.size;i++)
        {
            if(name[i]===' ')
            name[i]='+';
        }
        url2+=name;
        // console.log(url2);
        const response2 = await fetch(url2);
        const data2 = await response2.json();
        // console.log(data2);
        this.setState({ quotes:data2,loading: false });
      }

      
      render() {

        if (this.state.loading) {
            return <div>loading...</div>;
          }

        const element=this.state.quotes;
            if(element.length===0)
            return (<div><h3>Not Available</h3></div>)
        
        // console.log(element);
        return (
           
            <div >
        {element.map((value, index) => {
          return (
            <div>
              <h3>{index+1}.{value.quote}</h3>
            </div>
          );
        })}
      </div>
        )
    }
}

export default Quotes
