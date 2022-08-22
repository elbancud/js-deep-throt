/**
 * ================ JSON Reviver ======================
 * | In the new version of Javascript
 * | The reviver function will handle the parsing
 *
 */
// Context
// Normal object
const item = {
  name: 'Bulagtok',
  lastName: 'tik',
  status: null,
  location: undefined,
};
// Let's Stringify the shit out of this object.
const data = JSON.stringify(item);
/**Expected output
 * {
 * "name": "Bulagtok",
 * "lastName": "tik",
 * ...
 * }
 */
// This is the reviver, which is a followup function which will handle
// The mutation of the key/value in the data
const reviver = (key, value) => {
  if (!value) return; // What this does is that we filter the value which is either null or undefined
  return value; // Only returns the value
};
const stringified = JSON.stringify(item, reviver);
