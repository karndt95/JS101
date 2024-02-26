// Consider these two simple functions:
function foo(param = "no") {
  return "yes";
}

function bar(param = "no") {
  return param === "no" ? "yes" : "no";
}
// What will the following function invocation return?
bar(foo());




/* SOLUTION:

"no";
This is because the value returned from the foo function will always be "yes" , and "yes" === "no" will be false.

*/