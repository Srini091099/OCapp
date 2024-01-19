export function footer(){
    const [data, setData] = useState([]);

  useEffect(() => {
    // Uncomment this section if you want to fetch data from an API using Axios
    // axios.get('YOUR_API_ENDPOINT')
    //   .then((res) => {
    //     // Ensure that the response contains an array before setting the state
    //     if (Array.isArray(res.data.products)) {
    //       setData(res.data.products);
    //     } else {
    //       console.error("API response does not contain an array");
    //     }
    //   })
    //   .catch((error) => console.error(error));

    // Comment this line if you're fetching data from an API using Axios
    // Ensure that MOCKDATA.products is an array before setting the state
    if (Array.isArray(MOCKDATA.products)) {
      setData(MOCKDATA.products);
    } else {
      console.error("Mock data products is not an array");
    }

    console.log("useEffect mounting phase");
  }, []);

    return(

    )
}