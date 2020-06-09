import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {
              this.props.bots.map(bot => {
                return <BotCard renderCard={this.props.renderCard} bot={bot} key={bot.id} enlistBot={this.props.enlistBot} delistBot={this.props.delistBot} isBotEnlisted={this.props.isBotEnlisted}/>
              }
            )}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
