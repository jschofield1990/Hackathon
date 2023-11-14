import axios from 'axios';

async function fetchInspectionData(setIsLoading) {
    try {
        setIsLoading(true);
        await axios.get('https://get-hackdata.azurewebsites.net/api/get-inspection-data?code=7dmx_V2A6ZgyAlXiy1lRFZ415KNL1UsYj1b1QnNjcGydAzFuPdygKQ==&&columnName=UPRN&&columnValue=10014104298')
            .then(({ data }) => {
                setIsLoading(false);
                console.log(data[0])
                return data[0];
            }).catch((err) => {
                console.log(err);
                setIsLoading(false);
            });
    } catch (error) {
        console.error(error);
        setIsLoading(false);
    }
}

export default fetchInspectionData;

