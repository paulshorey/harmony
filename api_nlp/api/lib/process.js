export const serverStartError =  function(error) {
  if (error.syscall !== "listen") {
    throw error
  }
  const bind = typeof PORT === "string" ? "Pipe " + PORT : "Port " + PORT

  switch (error.code) {
    case "EACCES":
      ccconsole.error(bind + " requires elevated privileges")
      process.exit(1)
      break
    case "EADDRINUSE":
      ccconsole.error(bind + " is already in use")
      process.exit(1)
      break
    default:
      throw error
  }
}