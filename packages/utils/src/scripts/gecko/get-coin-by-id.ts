const getCoinByID = async (id: string): Promise<any> => {
  try {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&market_data=false&community_data=true&developer_data=false&sparkline=false`,
    )

    if (!response.ok) {
      if (response.status === 429) {
        console.log(`Rate limited. Waiting before retrying for coin: ${id}`)
        await new Promise((resolve) => setTimeout(resolve, 20000)) // Increase the wait time
        return getCoinByID(id) // Retry the API call
      }
      throw new Error(`Failed to fetch data for coin: ${id}`)
    }

    const data = await response.json()

    // Check if data is undefined or does not contain the expected structure
    if (!data || data?.status?.error_code === 429) {
      console.log(`Rate limited. Waiting before retrying for coin: ${id}`)
      await new Promise((resolve) => setTimeout(resolve, 5000)) // Wait 5 seconds
      return getCoinByID(id) // Retry the API call
    }

    return data // Return the fetched data
  } catch (error) {
    console.error(`Error fetching data for coin: ${id}`, error)
    throw error // Re-throw the error to be handled by the caller
  }
}

export default getCoinByID
