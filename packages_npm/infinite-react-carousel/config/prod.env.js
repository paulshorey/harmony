module.exports = {
  NEXT_PUBLIC_BUILD_ENV: '"production"',
  OPENPAAS: JSON.stringify(process.env.OPENPAAS) || 'http://localhost:8080',
};
