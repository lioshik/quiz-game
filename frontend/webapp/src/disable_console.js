const disableConsoleIfNeeded = () => {
  if (process.env.NODE_ENV === 'production') {
    console.log = console.info = console.warn = console.error = () => {};
    return true
  }
  return false
};

const consoleDisabled = disableConsoleIfNeeded()

export default consoleDisabled