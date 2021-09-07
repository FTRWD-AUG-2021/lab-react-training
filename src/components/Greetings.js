function Greetings({ lang, children }) {
  console.log(lang, children);
  if (lang == 'de') {
    return <div>Hallo {children}</div>;
  } else {
    return <div>Bonjuor {children}</div>;
  }
}
export default Greetings;
