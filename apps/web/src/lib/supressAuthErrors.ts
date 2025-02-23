const originalConsoleError = console.error

console.error = (...args) => {
  const message = args[0]

  if (typeof message === "string" && message.includes("CredentialsSignin")) {
    return
  }

  if (typeof message === "string" && message.includes("Invalid next.config.js options detected")) {
    return
  }

  originalConsoleError(...args)
};
