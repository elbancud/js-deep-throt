import assert from 'assert';
/**
 * ================ JSON Reviver ======================
 * | In the new version of Javascript
 * | The reviver function will handle the parsing
 * | Wtf is a json?
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
/**============== parse() vs stringify() =================
 * | parse converts strings to json
 * | stringify coverts to strings
*/ 
assert.deepStrictEqual(JSON.parse(data), item, 'should be equal');

// The problem is that parsing  
JSON.parse( data, reviver);
// The proposal, here we direct to the source
JSON.parse(data, (key, value, {source}) => 
// the function
)