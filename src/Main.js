
import { Component } from 'react';
import horn1 from './img/horn1.jpg';
import horn2 from './img/horn2.jpg';


class Main extends Component {

  render () {
    return ( 
    <>
      <HornedBeast title={'hornOne'} imageUrl={horn1} description={'one horn profile'}/>
      <HornedBeast title={'hornTwo'} imageUrl={horn2} description={'two horn side'}/>
    </>
    )
  }
}

  class HornedBeast extends Component {
    render() {
      return (
        <>
        <h2>{this.props.title}</h2>
        <img src={this.props.imageUrl} alt={'hornedanimal'} title={this.props.title}/>
        <p>{this.props.description}</p>
        </>
      )

    }
  }
export default Main;

