export const Button = (properties) => {
  console.log(properties)
  const children = properties.children

  return <button>{children}</button>
}