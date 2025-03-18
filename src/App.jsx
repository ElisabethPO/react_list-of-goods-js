import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

export const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [sortField, setSortField] = useState('');
  const [selectedAlphabet, setselectedAlphabet] = useState('');
  const [selectedLength, setselectedLength] = useState('');
  const [reversed, setReversed] = useState('');

  const visibleGoods = goodsFromServer.sort((good1, good2) => {
    switch (sortField) {
      case ''
    }
  })

  return (
    <div className="section content">
      <div className="buttons">
        {goodsFromServer.map(field => (
          <button
            key={field}
            type="button"
            className="button is-info is-light"
            onClick={() => setSortField(field)}
          >
            Sort alphabetically
          </button>

          <button type="button" className="button is-success is-light">
            Sort by length
          </button>

          <button type="button" className="button is-warning is-light">
            Reverse
          </button>

          <button
            type="button"
            className="button is-danger is-light"
            onClick={() => setSortField('')}
          >
            Reset
          </button>
        ))}
      </div>

      <ul>
        <li data-cy="Good">Dumplings</li>
        <li data-cy="Good">Carrot</li>
        <li data-cy="Good">Eggs</li>
        <li data-cy="Good">Ice cream</li>
        <li data-cy="Good">Apple</li>
        <li data-cy="Good">...</li>
      </ul>
    </div>
  );
};

// export const App = () => (
//   <div className="section content">
//     <div className="buttons">
//       <button type="button" className="button is-info is-light">
//         Sort alphabetically
//       </button>

//       <button type="button" className="button is-success is-light">
//         Sort by length
//       </button>

//       <button type="button" className="button is-warning is-light">
//         Reverse
//       </button>

//       <button type="button" className="button is-danger is-light">
//         Reset
//       </button>
//     </div>

//     <ul>
//       <li data-cy="Good">Dumplings</li>
//       <li data-cy="Good">Carrot</li>
//       <li data-cy="Good">Eggs</li>
//       <li data-cy="Good">Ice cream</li>
//       <li data-cy="Good">Apple</li>
//       <li data-cy="Good">...</li>
//     </ul>
//   </div>
// );
