import React from 'react';
import ProductsService from '../../services/productsService';

const producentsOptions = ['All', ...ProductsService.getProducents()];
const initialState = { producent: 'All', text: '' };

class SearchPanel extends React.Component {
  constructor() {
    super();
    this.state = initialState;
  }
  updateText = e => {
    this.setState({ text: e.target.value });
    this.props.onOptionChange(this.state.producent, e.target.value);
  };
  updateProducent = e => {
    this.setState({ producent: e.target.value });
    this.props.onOptionChange(e.target.value, this.state.text);
  };
  clearState = () => {
    this.setState(initialState);
    this.props.onOptionChange(initialState.producent, initialState.text);
  };
  render() {
    return (
      <div className="column-left">
        <div className="filter">
          <div className="filter-header">
            <h4>Search</h4>
            <button className="clear" onClick={this.clearState}>
              Clear
            </button>
          </div>
          <div>
            <input
              onChange={this.updateText}
              type="text"
              placeholder="search..."
              value={this.state.text}
            />
          </div>
          <h4>Manufacturer</h4>
          <div>
            {producentsOptions.map((option, index) => {
              return (
                <div key={index}>
                  <input
                    type="radio"
                    name="manufacturere"
                    id={option}
                    value={option}
                    onChange={this.updateProducent}
                    checked={this.state.producent === option}
                  />
                  <label>{option}</label>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default SearchPanel;
