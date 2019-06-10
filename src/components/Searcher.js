import React from 'react';

function Searcher(props) {

  const options = [
    {id: 1, name: "All"},
    {id: 2, name: "Game of Thrones"},
    {id: 3, name: "Marvel"},
    {id: 4, name: "Super Smash Bros"}
   ];

  return(
    <div>
      <div className="form-group">
        <label>Filter by name</label>
        <input
          type="text"
          className="form-control"
          value={props.query}
          onChange={e => {
            props.setQuery(e.target.value);
          }}
        />
      </div>

      <div className="form-group">
        <label>{"Where are the Characters from ?"}</label>

        <select name="twitter"
          className="form-control"
          id="typeSelector"
          value={props.type}
          onChange={e => {
            props.setType(e.target.value);
          }}>
          {options.map(option => {
            return (
              <option key={option.id}>{option.name}</option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

export default Searcher;
