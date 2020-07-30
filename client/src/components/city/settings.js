import React, {PureComponent} from 'react';
import Translate from 'react-translate-component';
import TimelineSpeedControl from './timeline-speed-control';
import CityToggleableContainer from './toggleable-container';

class CitySettings extends PureComponent {
  render() {
    return (
      <CityToggleableContainer>
        <TimelineSpeedControl
          speed={this.props.speed}
          onSpeedChange={this.props.onSpeedChange}
        />
        <label className="c-field c-field--choice">
          <input
            type="checkbox"
            checked={this.props.showTransportModes}
            onChange={this.props.onShowTransportModesChange && this.props.onShowTransportModesChange.bind(this)}
          /> <Translate content="city.config.show_transport_modes" />
        </label>
      </CityToggleableContainer>
    )
  }
}

export default CitySettings
