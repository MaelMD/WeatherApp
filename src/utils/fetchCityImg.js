export const fetchCityImageUrl = async (city, accessKey) => {
  try {
      const response = await fetch(`https://api.unsplash.com/search/photos?client_id=${accessKey}&query=${city}&w=1920`);
      const data = await response.json();
      if (data.results.length > 0) {
          // Determine the upper limit for random selection
          const upperLimit = Math.min(data.results.length, 5); // Choose the smaller of 5 or the total number of results
          // Pick a random index within the first 5 results
          const randomIndex = Math.floor(Math.random() * upperLimit);
          console.log("Image URL:", data.results[randomIndex].urls.regular);
          return data.results[randomIndex].urls.regular;
      } else {
          console.log("No results found.");
          return null;
      }
  } catch (error) {
      console.error('Error fetching image:', error);
      return null;
  }
};
