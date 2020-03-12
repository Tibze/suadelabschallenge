import { randomColor } from './color'

export const formatPieChart = (data) => {
  const eyeColors = []
  data.map((item) => {
    const eyeColor = item.eyeColor
    if (!eyeColors.find((item) => item === eyeColor)) eyeColors.push(eyeColor)
  })
  const values = []
  eyeColors.map((item) => {
    const items = data.filter((i) => i.eyeColor === item)
    values.push(items.length)
  })
  return {
    labels: eyeColors,
    datasets: [
      {
        backgroundColor: eyeColors,
        data: values
      }
    ]
  }
}

export const formatBarChart = (data, eyeColor) => {
  const names = []
  const ages = []
  const colors = []
  let items
  if (eyeColor && eyeColor !== '') items = data.filter((item) => item.eyeColor === eyeColor)
  else items = data
  items.map((item) => {
    const { name, age } = item
    if (name && age) {
      names.push(name)
      ages.push(age)
      colors.push(randomColor())
    }
  })
  return {
    hoverBorderWidth: 10,
    labels: names,
    datasets: [
      {
        backgroundColor: colors,
        data: ages
      }
    ]
  }
}
