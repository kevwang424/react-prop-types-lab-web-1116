const React = require('react')



class Product extends React.Component{
  render(){
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h2>{this.props.producer}</h2>
        <h2>{this.props.hasWatermark}</h2>
        <h2>{this.props.color}</h2>
        <h2>{this.props.weight}</h2>
      </div>
    )
  }
}

// function howMuchWeight(weight){
//   if (weight < 80 || )
// }

Product.defaultProps = {
  hasWatermark: false
}

Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  // weight: React.PropTypes.number.isRequired
  weight(props, propName, componentName){
    if (!(propName in props)){
      return new Error("Missing prop")
    }
    if (props[propName] < 80 || props[propName] > 300){
      return new Error("weight is not in range")
    }
    if (typeof props[propName] != 'number'){
      return new Error("weight is not a number")
    }
  }
}




module.exports = Product
