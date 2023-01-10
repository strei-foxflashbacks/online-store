const convertNameToPath = (str: string): string => {
  const convertableStr = str;

  return convertableStr.replace(/( )/g, '%20').replace(/'/g, '%27');
}
export default convertNameToPath