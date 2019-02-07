import React from "react";
import format from "date-fns/format";

export default class UpdatePreview extends React.Component {
  render() {
    const {entry, widgetFor, getAsset} = this.props;
    let image = getAsset(entry.getIn(["data", "image"]));

    return <div className="mw6 center ph3 pv4">
      <div className="flex justify-between grey-3">
        <div style={{
          width: "80px",
          height: "80px"
        }}></div>
        <p>{ format(entry.getIn(["data", "date"]), "ddd, MMM D, YYYY") }</p>
        <p>Read in x minutes</p>
      </div>
      <div className="cms mw6">
        <p>{ entry.getIn(["data", "description"]) }</p>
        { image && <img src={ image } alt={ entry.getIn(["data", "body"])} /> }
        { widgetFor("body") }
      </div>
    </div>;
  }
}
