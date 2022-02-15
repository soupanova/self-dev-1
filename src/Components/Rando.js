import PropTypes from "prop-types"


function Rando({ person }) {
  const {name, age, favouriteFood} = person;

  return `In 5 years ${name} will be ${age + 5}, ${name}'s favourite food is ${favouriteFood}.`
}

Rando.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
    favouriteFood: PropTypes.string,
  })
}

export default Rando