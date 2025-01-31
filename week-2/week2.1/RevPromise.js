const fetchData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = "Data fetched!";
        resolve(data);
      }, 2000);
    });
  };
  
//   fetchData()
//     .then((data) => {
//       console.log(data); // Output: Data fetched!
//     })
//     .catch((error) => {
//       console.error(error);
//     });



    const fetchDataAsync = async () => {
        try {
          const data = await fetchData(); // Wait for the promise to resolve
          console.log(data); // Output: Data fetched!
        } catch (error) {
          console.error(error);
        }
      };
      
      fetchDataAsync();
      