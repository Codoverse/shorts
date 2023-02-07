/**
 * Bracket identifier for matching
 */

const bracketIdentifier = [
  {
    opening: '(',
    closing: ')',
  },
  {
    opening: '[',
    closing: ']',
  },
  {
    opening: '{',
    closing: '}',
  },
];

function getBracket(bracket, tag) {
  return bracketIdentifier.find((bi) => bi[tag] === bracket);
}

function bracketMatcher(bracketArrayString, stack) {
  const bracket = bracketArrayString.shift();

  if (!bracket) return true;
  // when opening bracket push in stack
  else if (getBracket(bracket, 'opening')) stack.push(bracket);
  // when any closing bracket found then match from stack as popped value
  // if not mactched means order is incorrect return false and stop recursive iteration
  else if (getBracket(bracket, 'closing')?.opening !== stack.pop())
    return false;

  return bracketMatcher(bracketArrayString, stack);
}
const str = '{(})'.split('');
const isBracket = bracketMatcher(str, []);

isBracket ? console.log('Incorrect') : console.log('Correct');
