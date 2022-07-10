/* eslint-disable */
import axios from 'axios';

export default async (req, res) => {
  if (req.query.params) {
    switch (req.method) {
      case 'GET': {
        const { data } = await axios.get(
          `
          https://retoolapi.dev/8OwnlQ/categories/${req.query.params}`
        );
        res.statusCode = 200;
        res.json({ payload: data, result: 'success' });
        break;
      }
      case 'PUT': {
        try {
          const { data } = await axios.put(
            `https://retoolapi.dev/8OwnlQ/categories/${req.query.params}`,
            req.body
          );
          res.statusCode = 200;
          res.json({ payload: data, result: 'success' });
        } catch (error) {
          res.statusCode = 500;
          res.json({ error: req.query.params, result: 'fail' });
        }
        break;
      }
      case 'DELETE': {
        try {
          const { data } = await axios.delete(
            `https://retoolapi.dev/8OwnlQ/categories/${req.query.params}`
          );
          res.statusCode = 200;
          res.json({ payload: data, result: 'success' });
        } catch (error) {
          res.statusCode = 500;
          res.json({ error: req.query.params, result: 'fail' });
        }
        break;
      }
      default: {
        res.statusCode = 404;
        res.json({ error: 'Not found', result: 'fail' });
      }
    }
  } else {
    switch (req.method) {
      case 'GET': {
        try {
          const { data } = await axios.get(
            'https://retoolapi.dev/8OwnlQ/categories'
          );
          res.statusCode = 200;
          res.json({ payload: data, result: 'success' });
        } catch (error) {
          res.statusCode = 500;
          res.json({ error: error.message, result: 'fail' });
        }
        break;
      }
      case 'POST': {
        try {
          const { data } = await axios.post(
            'https://retoolapi.dev/8OwnlQ/categories',
            req.body
          );
          res.statusCode = 200;
          res.json({ payload: data, result: 'success' });
        } catch (error) {
          res.statusCode = 500;
          res.json({ error: error.message, result: 'fail' });
        }
        break;
      }
      default: {
        res.statusCode = 404;
        res.json({ error: 'Not found', result: 'fail' });
      }
    }
  }
};
