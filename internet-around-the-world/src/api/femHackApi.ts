
import axios, { type AxiosInstance } from 'axios';


type TotalUsers = {
    Message: string
    Data: {
        Total: number
    }
}


class FemHackAPI {
    api: AxiosInstance;

    constructor() {
        this.api = axios.create({
            baseURL: "http://localhost:8080",
        });
    }

    async getUsersByYear(year: number): Promise<TotalUsers> {
        console.log("Entra en la función")
        const response = await this.api.get(`/internet-users/${year}`).catch((error) => {
            console.log("Hace la petición")
            return error.response;
        });

        switch (response.status) {
            case 200:
                return response.data;
            default:
                throw new Error(response.data.detail);
        }
    }

}

const FemHackApiInstance = new FemHackAPI();

export default FemHackApiInstance;