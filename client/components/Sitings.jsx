import React from 'react'
import sitings from '../../data/sitings'

// const Sitings = (props) => {

class Sitings extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      newSiting: '',
      allSitings: sitings
    }
    this.addSiting = this.addSiting.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  addSiting (evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit () {
    const newSiting = this.state.newSiting
    this.setState({
      allSitings: [...this.state.allSitings, {id: this.props.monsterId, description: newSiting}]
    })
  }

  render () {
    const id = this.props.monsterId
    const monsterSitings = this.state.allSitings.filter(siting => {
      return Number(id) === siting.monsterId
    })
    return (
      <div>
        <h1>Monster Sitings</h1>

        <ul className="attr-ul">
          {monsterSitings.map((siting, index) => {
            return <li className="attr-li" key={index}>{siting.description}</li>
          })}
        </ul>

        <form>
          <input name='newSiting' type='text' value={this.state.newSiting} onChange={this.addSiting}/>
          <button type='submit' onClick={this.handleSubmit}>Submit </button>
        </form>
      </div>
    )
  }
}

export default Sitings
