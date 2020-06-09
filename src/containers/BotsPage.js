import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {

  state = {
    bots: [],
    enlistedBots: [],
    renderCardC: false,
    bot: [],
    sort: false
  }
  renderCard = (bot) => {
	  this.setState({renderCardC: true, bot: bot})
  }

  dontRenderCard = () => {
	  this.setState({renderCardC: false, bot: [] })
  }

  enlistBot = id => {
    const { bots, enlistedBots } = this.state
    let foundBot = bots.find(bot => bot.id === id)
    this.setState({enlistedBots: [...enlistedBots, foundBot] })
  }

  delistBot = id => {
    const { enlistedBots } = this.state
    // let foundBot = enlistedBots.find(bot => bot.id === id)
    let newBots = enlistedBots.filter(bot => bot.id !== id)
    this.setState({enlistedBots: newBots })
  }

  isBotEnlisted = id => {
    const { enlistedBots } = this.state
    let botToFind = enlistedBots.find(bot => bot.id === id)

    if (botToFind === undefined) {
      console.log("False");
      return false
    } else {
      console.log("True");
      return true
    }
  }
  
  
  getData = () => 
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(res => res.json())

  sortedGetData = () => {
    this.setState({sort: true})
    this.getData()
      .then(bots => this.setState( { bots: bots.sort((a, b) => (a.color > b.color) ? 1 : -1) } ) )
  }
    
  componentDidMount() {
      if (this.state.sort === false ) {
        this.getData()
        .then(bots => this.setState( { bots } ) )
      }
      // else if (this.state.sort === true ) {
      //   this.getData()
      //   .then(bots => this.setState( { bots: bots.sort((a, b) => (a.color > b.color) ? 1 : -1) } ) )
      // }
  }

  render() {
    const { bots, enlistedBots, renderCardC, bot } = this.state
    const { enlistBot, delistBot, isBotEnlisted, renderCard, dontRenderCard } = this
    return (
      <div>
        <button onClick={() => this.sortedGetData() } > Sort alphabetically! </button>
        <YourBotArmy bot={bot} renderCardC={renderCardC} renderCard={renderCard} dontRenderCard={dontRenderCard} bots={ enlistedBots } enlistBot={enlistBot} delistBot={delistBot} isBotEnlisted={isBotEnlisted} />
        <BotCollection bot={bot} renderCardC={renderCardC} renderCard={renderCard} dontRenderCard={dontRenderCard} bots={ bots } enlistBot={enlistBot} delistBot={delistBot} isBotEnlisted={isBotEnlisted} />
      </div>
    );
  }

}

export default BotsPage;
