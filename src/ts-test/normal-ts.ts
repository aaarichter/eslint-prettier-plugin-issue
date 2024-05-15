function foo() {
  console.log("foo" + "bar");
  console.log("foo");

  console.log(1 || 2);

  process.env.Foo = "development";
}

export default foo;
