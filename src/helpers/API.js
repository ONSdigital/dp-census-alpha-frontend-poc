import fetch from "./fetch";

export async function makeRequest(url, verb) {
    const requestOptions = {
        method: verb,
    };
    try {
        let timeout = 5000;
        const response = await fetch(url, requestOptions, timeout);
        let data = await response.json();
        let errorText = "";
        if (response.status !== 200) {
            let errorText = "An unknown error occurred when communicating with the API";
            switch (response.status) {
                case 400:
                    errorText = "Error 400: Bad Request from API";
                    break;
                case 500:
                    errorText = "Error 500: Internal Server Error from API";
                    break;
                default: {
                    errorText = "Unsuccessful connection to backend API";
                    break;
                }
            }
            return {errorMessage: errorText || this.props.errorMessage}
        }
        return {
            "results": data,
            "errorMessage": errorText
        }
    } catch {
        return {errorMessage: "Unsuccessful connection to backend API"}
    }
}