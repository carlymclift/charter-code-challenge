export const getRestaurantData = async () => {
  const response = fetch('https://code-challenge.spectrumtoolbox.com/api/restaurants', {
    headers: {
        Authorization: 'Api-Key q3MNxtfep8Gt',
    }
  })
  const data = (await response).json()
  return data
}