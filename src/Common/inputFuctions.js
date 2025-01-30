export const preventNotNumberCharacter = (e) => {
  if (!/[0-9]|Backspace|Tab|Enter|Delete|ArrowLeft|ArrowRight/.test(e.key)) {
    e.preventDefault();
  }
};
