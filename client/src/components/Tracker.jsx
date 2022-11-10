import React from "react";
import _ from "underscore";
import helper from "../../../helper/clientHelper.js";

function Tracker(props) {
  var tracker = [];
  var colorMessage, totalMessage;

  // construct color message
  var missedColors = helper.missedColors(props.colorCount);
  if(missedColors.length === 0) {
    colorMessage = <p>Woo-hoo! You painted a rainbow!</p>
  } else {
    colorMessage = <p>Paint your plate with some <em>{missedColors[0]}</em>!</p>
  }

  // construct total count message
  if (props.total < 28) {
    totalMessage = <p><em>{28 - props.total}</em> more cups to go! You can do it!</p>
  } else {
    totalMessage = <p>You beat <em>95%</em> of Americans!</p>
  }

  // construct color trackers list
  for(var color in props.colorCount) {
    tracker.push(<li key={color}>{color}: {props.colorCount[color]}</li>);
  }

  return (
    <div className='tracker'>
      <h3>Rainbow Meter</h3>
      <h4>{colorMessage}</h4>
      <h4>{totalMessage}</h4>
      <ul>Color status:
        {tracker}
      </ul>
      <button onClick={props.handleReset}>Start a new week</button>
    </div>
  )
}

export default Tracker;