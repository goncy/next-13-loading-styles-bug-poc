# Reproduction steps

0. Start the development server
1. Load the page
  Should load fine
2. Refresh
  You should get `SyntaxError: Unexpected string`, if you keep refreshing you get the same error time after time
3. Rename `loading.tsx` to `_loading.tsx`
  App works again