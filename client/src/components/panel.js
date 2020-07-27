import React, {Component, PureComponent} from 'react';
import {Link} from 'react-router-dom';
import Translate from 'react-translate-component';

class PanelHeader extends PureComponent {
  render() {
    const editPath = this.props.pathName.includes('/edit');
    const linkLabel = editPath ? <Translate content="city.stop_editing" /> : <Translate content="city.edit" />;
    const linkTo = editPath ? `/${this.props.urlName}` : `/${this.props.urlName}/edit`;

    return (
      <div className="panel-header o-grid__cell o-grid__cell--width-100">
        <div className="panel-header-title">
          <h3 className="c-heading">{this.props.name}</h3>
          <div className="commands">
            {!this.props.loading &&
              <Link className="c-link" to={linkTo}><span className="fa fa-pen"></span>{linkLabel}</Link>}
            {!this.props.loading && !editPath &&
              <Link className="c-link" to={`/compare?cities=${this.props.urlName},`}><span className="fa fa-globe-americas"></span><Translate content="compare.link" /></Link>}
            {!this.props.loading && !editPath &&
              <Link className="c-link" to={`/compare?cities=${this.props.urlName},`}><span className="fa fa-sliders-h"></span>Configuración</Link>}
            {!this.props.loading && !editPath &&
              <Link className="c-link" to={`/compare?cities=${this.props.urlName},`}><span className="fa fa-share-alt"></span>Compartir</Link>}
          </div>
        </div>
      </div>
    );
  }
}

class PanelBody extends Component {
  updateHeight() {
    const panel = this.refs.node.parentNode;
    const headerHeight = panel.children[0].clientHeight;
    const panelHeight = panel.clientHeight;
    const height = panelHeight - headerHeight;
    this.refs.node.style.setProperty('height', `${height}px`);
  }

  componentDidMount() {
    this.updateHeight();
  }

  componentDidUpdate() {
    this.updateHeight();
  }

  render() {
    return <div ref="node" className="panel-body">{this.props.children}</div>;
  }
}

export {PanelHeader, PanelBody};
