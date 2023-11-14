import axios from 'axios';

async function fetchInspectionData(setIsLoading) {
    try {
        setIsLoading(true);
        const response = await axios.get('https://get-hackdata.azurewebsites.net/api/get-inspection-data?code=7dmx_V2A6ZgyAlXiy1lRFZ415KNL1UsYj1b1QnNjcGydAzFuPdygKQ==&&columnName=UPRN&&columnValue=10014104298');
        console.log(response.data);
        setIsLoading(false);
        return response.data;
    } catch (error) {
        console.error(error);
        setIsLoading(false);
    }
}

export default fetchInspectionData;

