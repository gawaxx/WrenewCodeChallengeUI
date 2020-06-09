import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs";

class BotCollection extends React.Component {
  //your code here

  render(){

	if (this.props.renderCardC === true ){

		return(
			<BotSpecs dontRenderCard={this.props.dontRenderCard} bot={this.props.bot} renderCard={this.props.renderCard} enlistBot={this.props.enlistBot} delistBot={this.props.delistBot} isBotEnlisted={this.props.isBotEnlisted} />
		)
	}
  	else { 
		return (
		<div className="ui four column grid">
				<div className="row">
				{
				
					this.props.bots.map(bot => {
						return <BotCard renderCard={this.props.renderCard} bot={bot} key={bot.id} enlistBot={this.props.enlistBot} delistBot={this.props.delistBot} isBotEnlisted={this.props.isBotEnlisted}/>
					})

				}
				</div>
		</div>
		);
	}
  }

};

export default BotCollection;
