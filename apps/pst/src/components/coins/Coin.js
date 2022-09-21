import React, { useState, useEffect } from 'react';
import { css, useTheme } from '@emotion/react';

const style = (theme) => css`
  > * {
	margin-right: 1rem;
  }

  .symbol {
	color: ${theme.colors.link};
  }

  .price7d {

  }

  .price1hr {

  }

  .bold {
	font-weight: bold;
  }

  .green {
	color: forestgreen;
  }

  .red {
	color: darkred;
  }

  .neutral {
	color: grey;
  }
`;

export default ({ coin }) => {
  if (!coin) return null;
  // console.log(coin);

  let symbol = coin.symbol;
  let priceTotal = coin.quote.USD.price;
  let price1hr = coin.quote.USD.percent_change_1h;
  let price24hr = coin.quote.USD.percent_change_24h;
  let price7d = coin.quote.USD.percent_change_7d;

  if (price7d > -0.1 && price24hr < 0.1) return null;
  if (price7d > 25 || price7d < -15) return null;
  if (price24hr > 15 || price24hr < -15) return null;
  if (price1hr > 5 || price1hr < -1) return null;

  return (
    <p css={style}>
      <b className='symbol'>{symbol}</b> {/* <sup>{priceTotal.toFixed(0)}</sup>*/}
      <span className={`price7d ${priceClass(price7d)}`}>{price7d.toFixed(0)}</span>
      <span className={`price24hr ${priceClass(price24hr)}`}>{price24hr.toFixed(0)}</span>
      <span className={`price1hr ${priceClass(price1hr)}`}>{price1hr.toFixed(0)}</span>
    </p>
  );
};

function priceClass(price) {
  let color = price > 1 ? 'green' : price < -1 ? 'red' : 'neutral';
  let bold = '';//Math.abs(price) > 3 ? 'bold' : '';
  return `${color} ${bold}`;
}
